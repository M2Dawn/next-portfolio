---
title: "Getting Started with Revit API Development"
description: "A comprehensive, hands-on guide to building your first Revit plugin using C# and the Revit API — from environment setup to reading, modifying, and filtering model data."
date: "2025-01-15"
tags: ["Revit API", "C#", "Tutorials"]
---

## Why the Revit API Changes Everything

Most Revit users spend their careers working around Revit's limitations — manually renaming hundreds of elements, running the same coordination export every week, fixing parameter data that drifts out of sync. The Revit API exists to eliminate exactly this class of problem.

With C# and the Revit API, you can automate any repetitive task, enforce BIM standards programmatically, and build entirely new workflows that don't exist out of the box. This guide will get you from zero to your first working plugin.

## Prerequisites

Before writing a single line of code, make sure you have:

- **Autodesk Revit** — any version (this guide targets Revit 2024)
- **Visual Studio** — the free Community edition is perfect. During installation, include the **.NET desktop development** workload
- **Revit SDK** — optional but highly recommended. It includes `RevitAPI.chm` (the full API reference) and hundreds of official code samples

> **Where to find the SDK**
>
> The Revit SDK is included in the Revit installer. During Revit installation, look for the "Install Tools and Utilities" option. Alternatively, search for `RevitSDK.exe` inside your Revit installation directory.

## Step 1: Create the Visual Studio Project

The Revit API requires a specific project type and framework version. Follow these steps exactly:

1. Open Visual Studio and select **Create a new project**
2. Choose **Class Library (.NET Framework)** — *not* .NET Core or .NET 5+
3. Set the target framework to match your Revit version:
   - Revit 2024 → **.NET Framework 4.8**
   - Revit 2023 → **.NET Framework 4.8**
   - Revit 2022 → **.NET Framework 4.7.2**
4. Name your project `MyFirstRevitPlugin`

## Step 2: Add the Revit API References

Your project needs to reference Revit's API DLLs:

1. In Solution Explorer, right-click **References** → **Add Reference** → **Browse**
2. Navigate to your Revit install directory: `C:\Program Files\Autodesk\Revit 2024\`
3. Select **both** of these files:
   - `RevitAPI.dll`
   - `RevitAPIUI.dll`
4. Click **OK** to add them

> **Critical: Set Copy Local = False**
>
> Select both references in Solution Explorer, open the **Properties** panel, and set **Copy Local** to **False**.
>
> If you skip this step, your DLL will bundle its own copy of the Revit API — and when Revit tries to load it, you'll get version conflicts and cryptic crashes.

## Step 3: Write Your First Command

Every Revit plugin starts with a class that implements `IExternalCommand`. Create `Command.cs` and add:

```csharp
using System;
using Autodesk.Revit.Attributes;
using Autodesk.Revit.DB;
using Autodesk.Revit.UI;

namespace MyFirstRevitPlugin
{
    // This attribute tells Revit your command needs a transaction
    // Manual = you control when the transaction opens and commits
    [Transaction(TransactionMode.Manual)]
    public class Command : IExternalCommand
    {
        public Result Execute(
            ExternalCommandData commandData,
            ref string message,
            ElementSet elements)
        {
            // Access the active Revit session
            UIApplication uiApp = commandData.Application;
            UIDocument uiDoc = uiApp.ActiveUIDocument;
            Document doc = uiDoc.Document;

            // Show the current project title in a dialog
            TaskDialog.Show(
                "My First Plugin",
                $"Connected to: {doc.Title}\nRevit version: {uiApp.Application.VersionName}"
            );

            return Result.Succeeded;
        }
    }
}
```

`Result.Succeeded` tells Revit the command ran cleanly. You can also return `Result.Failed` (with an error message in the `message` parameter) or `Result.Cancelled` if the user exits a dialog.

## Step 4: Create the .addin Manifest

Revit won't discover your plugin automatically. You need an `.addin` XML manifest file that tells Revit where to find your DLL and which class to call.

```xml
<?xml version="1.0" encoding="utf-8"?>
<RevitAddIns>
  <AddIn Type="Command">
    <Text>My First Revit Plugin</Text>
    <Description>Demonstrates a basic Revit API connection</Description>
    <Assembly>C:\path\to\MyFirstRevitPlugin.dll</Assembly>
    <FullClassName>MyFirstRevitPlugin.Command</FullClassName>
    <ClientId>YOUR-UNIQUE-GUID-HERE</ClientId>
    <VendorId>com.yourcompany</VendorId>
    <VendorDescription>Your Name, yourwebsite.com</VendorDescription>
  </AddIn>
</RevitAddIns>
```

**Generate a unique GUID for ClientId** — In Visual Studio, go to **Tools → Create GUID**, select format 4, and paste the result. Never reuse another plugin's GUID.

## Step 5: Deploy and Test

1. Build your solution in Visual Studio (**Ctrl+Shift+B**)
2. Copy `MyFirstRevitPlugin.dll` and `MyFirstRevitPlugin.addin` to:
   ```
   %AppData%\Autodesk\Revit\Addins\2024\
   ```
3. Launch Revit and open any project
4. Go to **Add-Ins tab → External Tools** — your plugin should appear
5. Click it — you should see the dialog with your project title

## Step 6: Reading Model Data

Once the basic structure works, the real power begins. Here's how to read elements from the model:

```csharp
[Transaction(TransactionMode.ReadOnly)]
public class ReadWallsCommand : IExternalCommand
{
    public Result Execute(
        ExternalCommandData commandData,
        ref string message,
        ElementSet elements)
    {
        Document doc = commandData.Application.ActiveUIDocument.Document;

        // FilteredElementCollector is the core tool for querying the model
        var walls = new FilteredElementCollector(doc)
            .OfClass(typeof(Wall))          // Only Wall elements
            .WhereElementIsNotElementType() // Exclude wall type definitions
            .Cast<Wall>()
            .ToList();

        // Build a summary report
        var report = $"Found {walls.Count} walls in this model:\n\n";
        foreach (var wall in walls.Take(10)) // Show first 10 only
        {
            var length = wall.get_Parameter(BuiltInParameter.CURVE_ELEM_LENGTH);
            report += $"• {wall.Name} — Length: {length?.AsDouble() * 0.3048:F2}m\n";
        }

        TaskDialog.Show("Wall Report", report);
        return Result.Succeeded;
    }
}
```

> **Understanding FilteredElementCollector**
>
> `FilteredElementCollector` is the Revit API's primary query engine. Think of it like a database query:
>
> - `.OfClass(typeof(Wall))` — filter by element class
> - `.OfCategory(BuiltInCategory.OST_Walls)` — filter by Revit category
> - `.WhereElementIsNotElementType()` — exclude type definitions (keeps only instances)
> - `.WherePasses(new BoundingBoxIntersectsFilter(outline))` — spatial filtering

## Step 7: Modifying Parameters with Transactions

Any change to the Revit model — even setting a single parameter — must happen inside a **Transaction**. Think of it as a database commit that Revit can undo.

```csharp
[Transaction(TransactionMode.Manual)]
public class SetParameterCommand : IExternalCommand
{
    public Result Execute(
        ExternalCommandData commandData,
        ref string message,
        ElementSet elements)
    {
        Document doc = commandData.Application.ActiveUIDocument.Document;

        var walls = new FilteredElementCollector(doc)
            .OfClass(typeof(Wall))
            .WhereElementIsNotElementType()
            .Cast<Wall>()
            .ToList();

        // Open a transaction — Revit won't allow writes without one
        using (Transaction tx = new Transaction(doc, "Set Wall Comments"))
        {
            tx.Start();

            foreach (var wall in walls)
            {
                // Get the "Comments" parameter (available on all elements)
                Parameter comments = wall.get_Parameter(BuiltInParameter.ALL_MODEL_INSTANCE_COMMENTS);

                if (comments != null && !comments.IsReadOnly)
                {
                    comments.Set($"Reviewed — {DateTime.Today:yyyy-MM-dd}");
                }
            }

            tx.Commit(); // Save all changes at once
        }

        TaskDialog.Show("Done", $"Updated comments on {walls.Count} walls.");
        return Result.Succeeded;
    }
}
```

**Transaction rules:**

- Always wrap writes in `using (Transaction tx = ...)` — the `using` block ensures the transaction is disposed even if an exception occurs
- Never open a transaction inside a loop — open once, write many, commit once
- If something goes wrong, call `tx.RollBack()` to undo everything cleanly

## Step 8: Filtering with Multiple Conditions

Real-world automation usually requires combining multiple filters. Here's a practical example — finding all exterior walls that haven't been assigned a fire rating:

```csharp
var uncheckedExteriorWalls = new FilteredElementCollector(doc)
    .OfClass(typeof(Wall))
    .WhereElementIsNotElementType()
    .Cast<Wall>()
    .Where(wall =>
    {
        // Check wall function parameter
        var functionParam = wall.get_Parameter(BuiltInParameter.FUNCTION_PARAM);
        bool isExterior = functionParam?.AsInteger() == (int)WallFunction.Exterior;

        // Check if fire rating is empty
        var fireRating = wall.LookupParameter("Fire Rating");
        bool missingRating = string.IsNullOrWhiteSpace(fireRating?.AsString());

        return isExterior && missingRating;
    })
    .ToList();

if (uncheckedExteriorWalls.Any())
{
    TaskDialog.Show(
        "BIM QC Alert",
        $"⚠ Found {uncheckedExteriorWalls.Count} exterior walls with no fire rating assigned."
    );
}
```

## Common Pitfalls and How to Avoid Them

**1. Revit API calls outside of a valid Revit context**
The Revit API can only be called from the main Revit thread during command execution. Never call it from a background thread or a `Task.Run()`.

**2. Forgetting to open a Transaction before writing**
Any attempt to modify the model without an active transaction will throw an `InvalidOperationException`. Always check `doc.IsReadOnly` first.

**3. Using `Element.Name` instead of parameters**
`element.Name` often returns the type name, not the instance name. For instance-level data, always use `element.get_Parameter()` with the correct `BuiltInParameter`.

**4. Slow collectors with too many elements**
Avoid `.ToList()` on large collectors before filtering. Chain your quick filters (`.OfClass()`, `.OfCategory()`) before any slow LINQ `.Where()` operations. Revit applies quick filters server-side, LINQ runs client-side.

```csharp
// ❌ Slow: loads ALL elements into memory before filtering
var walls = new FilteredElementCollector(doc)
    .ToList()
    .Where(e => e is Wall);

// ✅ Fast: filter happens inside Revit's optimized engine
var walls = new FilteredElementCollector(doc)
    .OfClass(typeof(Wall))
    .WhereElementIsNotElementType()
    .ToList();
```

## What to Learn Next

Once you're comfortable with the basics, these are the highest-impact next areas to explore:

- **ExternalEvents** — Running Revit API code from modeless dialogs and external UI
- **IUpdater** — Reacting automatically to model changes in real time
- **Dynamo integration** — Exposing your C# logic as custom Dynamo nodes
- **Ribbon UI** — Replacing the "External Tools" menu entry with a proper custom ribbon tab
- **RevitLookup** — An open-source developer tool that lets you inspect any Revit element's parameters and properties at runtime (essential for debugging)

> **Where to go for help**
>
> - **Revit API Docs** — `help.autodesk.com/view/RVT/2024/ENU/` (search the API reference)
> - **APIdocs.co** — Unofficial but searchable API documentation
> - **Revit API forum** — `forums.autodesk.com/t5/revit-api-forum/bd-p/160` — most questions are already answered here
> - **RevitLookup** — Install from the Revit SDK or the Autodesk App Store

The Revit API has a steep initial learning curve, but once you get the first plugin running, the second one is dramatically easier. The core concepts — `FilteredElementCollector`, `Transaction`, `Parameter` — appear in virtually every tool you'll ever build.

**Go build something that saves your team time.**
