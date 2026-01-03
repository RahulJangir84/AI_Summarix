'use client'
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const words = [
    {
      text: "Ready",
    },
    {
      text: "to",
    },
    {
      text: "Save",
    },
    {
      text: "Hours",
    },
    {
        text:"of",
    },
    {
        text:"Reading",
    },
    {
        text:"Time?",
    },

  ];
export default function CTASection() {
    return (
        <section className="relative overflow-hidden mt-7">
            <div className="flex flex-col items-center justify-center mx-auto">
      <TypewriterEffectSmooth words={words} />
      <p className= "text-neutral-500 dark:text-neutral-200 lg:text-xl md:text-lg sm:text-sm max-w-3xl text-center">
        Transform lengthy documents into clear, actionable insights with our AI-powered summarizer.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
        onClick={()=>window.location.href="#pricing"}
        className="hover:cursor-pointer w-40 h-11 rounded-xl bg-indigo-600 border dark:border-white border-transparent text-white text-lg mt-6">
          Join now
        </button>
      </div>
      </div>
        </section>
    );
}