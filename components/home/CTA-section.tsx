"use client";
import { MotionSection, MotionDiv, MotionP } from "../common/motion";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Link from "next/link";
import { containerVariants, itemVariants } from "@/utils/constants";
import ChatInput from "../speech/chatInput";
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
    text: "of",
  },
  {
    text: "Reading",
  },
  {
    text: "Time?",
  },
];
export default function CTASection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.005 }}
      className="relative overflow-hidden pt-4 pb-20 bg-white dark:bg-gradient-to-b dark:from-[#1C2236] dark:to-[#1C2236]"
    >
      <div className="flex flex-col items-center justify-center mx-auto">
        <MotionDiv variants={itemVariants}>
          <TypewriterEffectSmooth words={words} />
        </MotionDiv>
        <MotionP
          variants={itemVariants}
          className="text-neutral-500 dark:text-[#D2D2D7] lg:text-xl md:text-lg sm:text-sm max-w-3xl text-center"
        >
          Transform lengthy documents into clear, actionable insights with our
          AI-powered summarizer.
        </MotionP>
        <MotionDiv
          variants={itemVariants}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4"
        >
          <button className="hover:cursor-pointer w-40 h-11 rounded-xl bg-slate-900 border dark:border-transparent border-transparent text-white dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-400 text-lg mt-6 shadow-md transition-all">
            <Link href="/sign-in">Join now</Link>
          </button>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
