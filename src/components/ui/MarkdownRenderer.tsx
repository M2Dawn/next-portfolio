import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert prose-brand max-w-none prose-headings:text-text-1 prose-a:text-brand-light hover:prose-a:text-brand prose-p:text-text-2 prose-li:text-text-2 prose-strong:text-text-1">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
