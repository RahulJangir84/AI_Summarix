"use client";

import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  BookOpen,
  Sparkles,
  FileText,
} from "lucide-react";

/** Render full summary */
function FullContent({ text }: { text: string }) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node: _node, ...props}) => <h2 className="text-2xl font-bold text-indigo-800 mb-3 mt-5 first:mt-0" {...props} />,
          h2: ({node: _node, ...props}) => <h3 className="text-xl font-bold text-indigo-800 mb-2 mt-4 first:mt-0" {...props} />,
          h3: ({node: _node, ...props}) => <h4 className="text-lg font-semibold text-indigo-800 mb-2 mt-3 first:mt-0" {...props} />,
          p:  ({node: _node, ...props}) => <p className="text-gray-700 text-[0.98rem] leading-[1.9] mb-4" {...props} />,
          ul: ({node: _node, ...props}) => <ul className="ml-5 list-disc space-y-1.5 mb-4 text-gray-700" {...props} />,
          ol: ({node: _node, ...props}) => <ol className="ml-5 list-decimal space-y-1.5 mb-4 text-gray-700" {...props} />,
          li: ({node: _node, ...props}) => <li className="text-[0.97rem] leading-relaxed pl-1" {...props} />,
          strong: ({node: _node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
          hr: ({node: _node, ...props}) => <hr className="my-6 border-indigo-100" {...props} />
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}

export default function SummaryPage({ summary }: { summary: string }) {
  const wordCount = useMemo(
    () => summary.trim().split(/\s+/).length,
    [summary],
  );

  const readingTime = Math.max(1, Math.round(wordCount / 200));

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="relative bg-gradient-to-br from-white to-indigo-50/40 rounded-3xl shadow-xl shadow-indigo-100/60 border border-indigo-100 overflow-hidden">
        
        {/* Background blobs */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-indigo-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-violet-200/20 blur-3xl" />

        {/* Header */}
        <div className="relative flex items-center justify-between px-8 pt-7 pb-5 border-b border-indigo-100/70">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600 shadow-md shadow-indigo-300/40">
              <BookOpen size={16} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">
                AI Summary
              </p>
              <p className="text-[11px] text-gray-400 font-medium">
                {readingTime} min read · {wordCount.toLocaleString()} words
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-indigo-400" />
            <span className="text-sm font-bold text-indigo-700">
              Full View
            </span>
          </div>
        </div>

        {/* Full Content */}
        <div className="relative px-8 py-8">
          <FullContent text={summary} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        <FileText size={12} className="text-gray-700" />
        <span className="text-[11px] text-gray-700 font-medium">
          AI-generated full summary
        </span>
      </div>
    </div>
  );
}