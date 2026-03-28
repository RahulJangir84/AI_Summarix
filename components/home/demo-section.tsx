"use client";
import { Pizza } from "lucide-react";
import { containerVariants, itemVariants } from "@/utils/constants";
import { MotionSection, MotionDiv } from "../common/motion";
import CompareDemo from "../compare-demo";
export default function DemoSection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="relative flex justify-center items-center overflow-hidden bg-gradient-to-l from-indigo-100 via-white to-indigo-200/70 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950"
    >
        
      <div className="py-7 lg:pt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div></div>
        <div className="flex flex-col items-center text-center space-y-6">
          <MotionDiv
            variants={itemVariants}
            className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs mx-auto px-4 sm:px-6"
          >
            <Pizza className="w-6 h-6 text-indigo-600" />
          </MotionDiv>
          <MotionDiv variants={itemVariants} className="text-center mb-14">
            <h3 className="text-3xl max-w-3xl font-bold mx-auto px-4 sm:px-6">
              Watch how Summarix can help you to transform{" "}
              <span className="text-indigo-600">this next.js course PDF </span>
              into an easy-to-read summary!
            </h3>
          </MotionDiv>
          <MotionDiv
            variants={itemVariants}
            className="flex justify-center items-center px-2 sm:px-4 lg:px-6"
          >
            <CompareDemo />
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
