'use client';

import { useState, useEffect, useRef } from 'react';

type ExportFormat = 'pdf' | 'dwg' | 'dwg-csv';

interface LogEntry {
  time: string;
  message: string;
  isImportant?: boolean;
}

export default function WpfSimulation() {
  const [windowState, setWindowState] = useState<'open' | 'minimized' | 'closed'>('open');
  const [formatDropdownOpen, setFormatDropdownOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('pdf');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [taskName, setTaskName] = useState('Ready');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const consoleRef = useRef<HTMLDivElement>(null);

  const samplePaths = [
    'C:\\Projects\\AECOM_Central\\Exports\\',
    'D:\\BIM_Deliverables\\Phase_1\\Outputs\\',
    'C:\\Users\\BIM_Coordinator\\Desktop\\Revit_PDFs\\'
  ];
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const currentPath = samplePaths[currentPathIndex];

  // Auto-scroll logs
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  const addLog = (message: string, isImportant = false) => {
    const time = new Date().toTimeString().split(' ')[0];
    setLogs(prev => [...prev, { time, message, isImportant }]);
  };

  const handleBrowse = () => {
    const nextIndex = (currentPathIndex + 1) % samplePaths.length;
    setCurrentPathIndex(nextIndex);
    addLog(`Output path redirected to: ${samplePaths[nextIndex]}`);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setShowSuccess(false);
    setProgress(0);
    setTaskName('Ready');
    setLogs([]);
  };

  const runSimulation = () => {
    setIsRunning(true);
    addLog('System initialized. Checking Revit document context...', true);

    setTimeout(() => {
      let steps: { p: number; t: string; l: string; d: number }[] = [];
      let finalLog = "";

      if (selectedFormat === 'pdf') {
        steps = [
          { p: 5, t: 'Loading database...', l: 'Opening Autodesk.Revit.DB connection...', d: 400 },
          { p: 20, t: 'Exporting sheets 1 - 50...', l: 'Exporting Sheets [1 - 50] to PDF format...', d: 600 },
          { p: 96, t: 'Combining sheets into PDF...', l: 'Merging separate pages into a single multipage document...', d: 700 },
          { p: 100, t: 'Completing export...', l: `PDF generated successfully.`, d: 400 }
        ];
        finalLog = "Task finished. Saved 6.5 hours of manual work.";
      } else if (selectedFormat === 'dwg') {
        steps = [
          { p: 5, t: 'Loading database...', l: 'Opening Autodesk.Revit.DB connection...', d: 400 },
          { p: 50, t: 'Exporting sheets...', l: 'Exporting Sheets to CAD DWG format...', d: 800 },
          { p: 100, t: 'Completing export...', l: `DWG files exported successfully.`, d: 400 }
        ];
        finalLog = "Task finished. Saved 6.5 hours of manual work.";
      } else {
        steps = [
          { p: 5, t: 'Loading database...', l: 'Opening connection...', d: 400 },
          { p: 92, t: 'Extracting schedules...', l: 'Generating CSV reports with structured BIM metadata...', d: 600 },
          { p: 100, t: 'Completing export...', l: `Files generated successfully`, d: 400 }
        ];
        finalLog = "Task finished. Saved 8 hours of manual work.";
      }

      let currentStep = 0;
      const processNext = () => {
        if (currentStep >= steps.length) {
          setTimeout(() => {
            setShowSuccess(true);
            addLog(finalLog, true);
          }, 500);
          return;
        }
        const s = steps[currentStep];
        setTaskName(s.t);
        setProgress(s.p);
        addLog(s.l);
        currentStep++;
        setTimeout(processNext, s.d);
      };

      processNext();
    }, 800);
  };

  if (windowState === 'closed') {
    return (
      <button 
        onClick={() => setWindowState('open')}
        className="flex items-center gap-2.5 my-10 mx-auto py-3 px-6 bg-brand/10 border border-brand/25 rounded-md text-brand-light text-sm font-semibold cursor-pointer backdrop-blur-sm transition-all hover:bg-brand/15 hover:border-brand/45 hover:-translate-y-0.5 shadow-lg"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2-2V5a2 2 0 0 1-2-2H9"/><polyline points="17 14 12 9 7 14"/><line x1="12" y1="9" x2="12" y2="21"/></svg>
        <span>Restore Exporter Plugin</span>
      </button>
    );
  }

  return (
    <div className={`bg-[#0D0D10] border border-brand/20 rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(91,141,243,0.1),0_32px_100px_rgba(0,0,0,0.6),0_0_80px_rgba(91,141,243,0.12),inset_0_1px_0_rgba(255,255,255,0.04)] relative transition-all duration-300 ${windowState === 'minimized' ? 'max-h-[35px]' : 'max-h-[800px]'}`}>
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-transparent border-b border-white/5 select-none">
        <div className="flex items-center gap-2 text-text-2 text-xs font-medium tracking-wide">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
            <rect x="8" y="8" width="14" height="14" rx="2" />
            <path d="M12 15h6" />
            <path d="M15 12l3 3-3 3" />
          </svg>
          <span>Batch Sheet Exporter v2.1</span>
          <span className="bg-brand/20 text-brand-light px-1.5 py-0.5 rounded-[3px] text-[10px] font-bold tracking-widest uppercase ml-1">Simulation</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setWindowState(windowState === 'minimized' ? 'open' : 'minimized')} className="text-white/30 hover:text-white/80 transition-colors" aria-label="Minimize">
            <svg width="10" height="1" viewBox="0 0 10 1"><line x1="0" y1="0.5" x2="10" y2="0.5" stroke="currentColor" strokeWidth="1"/></svg>
          </button>
          <button className="text-white/30 hover:text-white/80 transition-colors" aria-label="Maximize">
            <svg width="10" height="10" viewBox="0 0 10 10"><rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="1"/></svg>
          </button>
          <button onClick={() => setWindowState('closed')} className="text-white/30 hover:text-red-400 transition-colors" aria-label="Close">
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1"/></svg>
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-4 min-h-[160px] justify-center">
        {!isRunning && !showSuccess ? (
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-[120px_minmax(0,1fr)] items-center gap-4 text-sm w-full">
              <span className="text-text-2 font-medium">Export Format</span>
              <div className="relative">
                <button 
                  onClick={() => setFormatDropdownOpen(!formatDropdownOpen)}
                  className="w-full bg-[#161619] border border-border-1 rounded-md px-3 py-2 text-left flex items-center justify-between hover:border-border-3 hover:bg-[#1c1c20] focus:outline-none focus:ring-2 focus:ring-brand/50 transition-colors"
                >
                  <span className="text-text-1 text-[13px]">{selectedFormat === 'pdf' ? 'PDF (Combine multi-sheet)' : selectedFormat === 'dwg' ? 'DWG (Individual sheets)' : 'DWG + CSV (Sheets + Schedules)'}</span>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {formatDropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 bg-[#1c1c20] border border-border-2 rounded-md shadow-xl overflow-hidden z-10">
                    {([
                      { id: 'pdf', title: 'PDF (Combine multi-sheet)', desc: 'Merge all sheets into a single PDF file' },
                      { id: 'dwg', title: 'DWG (Individual sheets)', desc: 'Export each sheet as a separate CAD file' },
                      { id: 'dwg-csv', title: 'DWG + CSV (Sheets + Schedules)', desc: 'CAD files + structured schedule data' }
                    ] as const).map(option => (
                      <button 
                        key={option.id}
                        onClick={() => {
                          setSelectedFormat(option.id);
                          setFormatDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 hover:bg-brand/10 transition-colors flex items-start gap-2 ${selectedFormat === option.id ? 'bg-brand/10' : ''}`}
                      >
                        <div className="flex-1">
                          <div className={`text-[13px] font-medium ${selectedFormat === option.id ? 'text-text-1' : 'text-text-2'}`}>{option.title}</div>
                          <div className="text-[11px] text-text-3 mt-0.5">{option.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-[120px_minmax(0,1fr)] items-center gap-4 text-sm w-full">
              <span className="text-text-2 font-medium">Output Path</span>
              <div className="flex gap-2 w-full min-w-0">
                <div className="flex-1 min-w-0 bg-[#161619] border border-border-1 rounded-md px-3 py-2 text-[13px] text-text-2 truncate font-mono">
                  {currentPath}
                </div>
                <button onClick={handleBrowse} className="px-4 py-2 bg-[#1c1c20] border border-border-2 rounded-md text-[13px] font-medium text-text-1 hover:border-border-3 hover:bg-white/5 transition-colors">
                  Browse...
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button onClick={runSimulation} className="w-full py-2.5 bg-brand text-white rounded-md font-semibold text-sm hover:bg-brand-light transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                Run Exporter
              </button>
            </div>
          </div>
        ) : showSuccess ? (
          <div className="flex flex-col items-center justify-center py-6 gap-3 text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 className="text-text-1 font-semibold text-lg">Export Complete</h3>
            <p className="text-text-2 text-sm max-w-[80%]">Task finished successfully.</p>
            <button onClick={resetSimulation} className="mt-2 px-4 py-1.5 border border-border-2 rounded-md text-text-1 text-sm hover:bg-white/5 transition-colors">
              Run Again
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-[13px]">
              <span className="text-text-1 font-medium">{taskName}</span>
              <span className="text-brand-light font-mono">{progress}%</span>
            </div>
            <div className="h-1.5 bg-[#161619] rounded-full overflow-hidden">
              <div className="h-full bg-brand transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-[#080809] border-t border-white/5 flex flex-col h-[140px]">
        <div className="flex-1 p-3 overflow-y-auto font-mono text-[11px] leading-relaxed flex flex-col gap-1" ref={consoleRef}>
          {logs.length === 0 ? (
            <div className="text-text-3 italic">Revit API Simulated Sandbox. Click &apos;Run Exporter&apos; above to begin.</div>
          ) : (
            logs.map((log, i) => (
              <div key={i} className={`flex gap-2 ${log.isImportant ? 'text-brand-light' : 'text-text-2'}`}>
                <span className="text-text-3 shrink-0">[{log.time}]</span>
                <span className="break-words">{log.message}</span>
              </div>
            ))
          )}
        </div>
        <div className="flex items-center justify-between px-4 py-1.5 bg-white/5 border-t border-white/5 text-[10px] font-mono text-white/30 uppercase tracking-widest">
          <span>{isRunning ? 'Processing...' : 'Idle'}</span>
          <div className="flex items-center gap-2">
            <span className={showSuccess ? 'text-green-400' : ''}>{showSuccess ? 'Completed' : 'System Ready'}</span>
            <div className={`w-1.5 h-1.5 rounded-full ${showSuccess ? 'bg-green-500' : isRunning ? 'bg-brand animate-pulse' : 'bg-green-500'}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
