'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Reveal from '@/components/ui/Reveal';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert prose-brand max-w-none prose-headings:text-text-1 prose-a:text-brand-light hover:prose-a:text-brand prose-p:text-text-2 prose-li:text-text-2 prose-strong:text-text-1">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const {children, className, node, ...rest} = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <Reveal threshold={0}>
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  style={vscDarkPlus}
                  className="!rounded-xl !my-8 border border-white/10 shadow-2xl text-[13px] md:text-[14px]"
                  customStyle={{ background: '#0a0a0c', padding: '1.5rem' }}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </Reveal>
            ) : (
              <code {...rest} className={`${className} bg-white/10 px-1.5 py-0.5 rounded text-brand-light font-mono text-[0.9em]`}>
                {children}
              </code>
            );
          },
          blockquote(props) {
            return (
              <Reveal threshold={0}>
                <blockquote className="relative my-10 border-l-2 border-brand pl-6 py-6 bg-gradient-to-r from-brand/10 to-transparent rounded-r-2xl overflow-hidden shadow-[inset_0_0_20px_rgba(91,141,243,0.05)]">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(91,141,243,0.15)_0%,transparent_70%)] pointer-events-none"></div>
                  <div className="relative z-10 text-text-1 not-italic">
                    {props.children}
                  </div>
                </blockquote>
              </Reveal>
            );
          },
          p(props) {
            return <Reveal threshold={0}><p {...props}>{props.children}</p></Reveal>;
          },
          h2(props) {
            return <Reveal threshold={0}><h2 {...props} className="mt-16 mb-6 tracking-tight">{props.children}</h2></Reveal>;
          },
          h3(props) {
            return <Reveal threshold={0}><h3 {...props} className="mt-10 mb-4">{props.children}</h3></Reveal>;
          },
          ul(props) {
            return <Reveal threshold={0}><ul {...props} className="my-6 space-y-2">{props.children}</ul></Reveal>;
          },
          ol(props) {
            return <Reveal threshold={0}><ol {...props} className="my-6 space-y-2">{props.children}</ol></Reveal>;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
