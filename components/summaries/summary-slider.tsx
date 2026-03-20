"use client";

import { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  FileText,
} from "lucide-react";

/** Split the summary into one slide per paragraph/section block */
function parseSlides(summary: string): string[] {
  return summary
    .split(/\n{2,}/) // split on blank lines
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/** Render a single line: heading, bullet, or plain */
function renderLine(line: string, idx: number) {
  // Markdown-style heading: ## or # at start
  if (/^#{1,3}\s/.test(line)) {
    return (
      <h3
        key={idx}
        className="text-base font-bold text-indigo-800 mb-1 mt-3 first:mt-0"
      >
        {line.replace(/^#{1,3}\s/, "")}
      </h3>
    );
  }
  // Bullet: starts with -, *, or number.
  if (/^(\s*[-*]|\s*\d+\.)/.test(line)) {
    return (
      <li
        key={idx}
        className="ml-4 list-disc text-gray-700 text-[0.97rem] leading-relaxed"
      >
        {line.replace(/^\s*[-*]\s*/, "").replace(/^\s*\d+\.\s*/, "")}
      </li>
    );
  }
  // Plain paragraph line
  return (
    <p key={idx} className="text-gray-700 text-[0.97rem] leading-[1.9]">
      {line}
    </p>
  );
}

/** Render one slide's text, preserving lines */
function SlideContent({ text }: { text: string }) {
  const lines = text.split("\n").map((l) => l.trimEnd());
  const hasBullets = lines.some((l) => /^(\s*[-*]|\s*\d+\.)/.test(l));

  const content = lines.map((line, i) => renderLine(line, i));

  return hasBullets ? (
    <ul className="space-y-1">{content}</ul>
  ) : (
    <div className="space-y-2">{content}</div>
  );
}

export default function SummarySlider({ summary }: { summary: string }) {
  const slides = useMemo(() => parseSlides(summary), [summary]);
  const [current, setCurrent] = useState(0);

  const wordCount = useMemo(
    () => summary.trim().split(/\s+/).length,
    [summary],
  );
  const readingTime = Math.max(1, Math.round(wordCount / 200));
  const progress = ((current + 1) / slides.length) * 100;

  const goTo = (i: number) => {
    if (i >= 0 && i < slides.length) setCurrent(i);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      {/* Card */}
      <div className="relative bg-gradient-to-br from-white to-indigo-50/40 rounded-3xl shadow-xl shadow-indigo-100/60 border border-indigo-100 overflow-hidden">
        {/* Decorative blobs */}
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
            <span className="text-sm font-bold text-indigo-700 tabular-nums">
              {current + 1}
              <span className="text-indigo-300 font-medium">
                /{slides.length}
              </span>
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-[3px] bg-indigo-50">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Slide content */}
        <div className="relative px-8 py-8 min-h-[260px] flex flex-col gap-6">
          {/* Section badge */}
          <span className="absolute top-6 right-8 text-[10px] font-black text-indigo-200 uppercase tracking-[0.2em] select-none">
            Section {current + 1}
          </span>

          {/* Content */}
          <div className="flex-1 pr-6">
            <SlideContent text={slides[current]} />
          </div>

          {/* Dot nav */}
          <div className="flex items-center justify-center gap-[6px] pt-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to section ${i + 1}`}
                className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                  i === current
                    ? "w-6 h-2 bg-indigo-600"
                    : "w-2 h-2 bg-indigo-200 hover:bg-indigo-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer nav */}
        <div className="flex items-center justify-between px-8 pb-7 gap-4 border-t border-indigo-50">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-100 text-gray-500 font-medium text-sm hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 mt-4"
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          {/* Mini segment bar */}
          <div className="hidden sm:flex gap-[5px] items-center mt-4">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-[5px] rounded-full transition-all duration-300 ${
                  i < current
                    ? "w-5 bg-indigo-400"
                    : i === current
                      ? "w-8 bg-indigo-600 shadow-sm shadow-indigo-300"
                      : "w-5 bg-indigo-100"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            disabled={current === slides.length - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-300/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 mt-4"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Sub-label */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        <FileText size={12} className="text-gray-300" />
        <span className="text-[11px] text-gray-300 font-medium">
          {slides.length} sections · AI-generated summary
        </span>
      </div>
    </div>
  );
}
