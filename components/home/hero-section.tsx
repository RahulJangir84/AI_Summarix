import { LayoutTextFlip } from "../ui/layout-text-flip";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import { auth } from "@clerk/nextjs/server";
import { MotionDiv, MotionH1, MotionP, MotionSection } from "../common/motion";
import { containerVariants, itemVariants } from "@/utils/constants";
const { userId } = await auth();

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://res.cloudinary.com/ddjgnyubn/image/upload/v1774559900/image_jlygqt.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://res.cloudinary.com/ddjgnyubn/image/upload/v1774559899/photo-1438761681033-6461ffad8d80_pwg2y2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://res.cloudinary.com/ddjgnyubn/image/upload/v1774559898/photo-1580489944761-15a19d654956_chm0fa.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://res.cloudinary.com/ddjgnyubn/image/upload/v1774559898/image_igq6ix.jpg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://res.cloudinary.com/ddjgnyubn/image/upload/w_100,h_100,c_fill,q_auto,f_auto/image_jlygqt",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://res.cloudinary.com/ddjgnyubn/image/upload/v1774559898/image_igq6ix.jpg",
  },
];

export default function HeroSection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="relative w-full overflow-hidden bg-white/50 dark:bg-slate-950"
    >
      <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
        <BackgroundRippleEffect />
        <div className="mt-24 w-full">
          <div className="relative z-10 container mx-auto px-4 my-10 flex flex-col items-center text-center">
            <div className="mb-8 flex justify-center">
              <Badge
                variant="outline"
                className="relative cursor-default px-4 py-1.5 text-sm font-medium 
    text-indigo-600 border-indigo-200 bg-indigo-50 hover:bg-indigo-100 
    dark:text-slate-300 dark:border-slate-700 dark:bg-slate-900 
    dark:hover:bg-slate-800 transition-colors gap-2 rounded-full"
              >
                <Sparkles
                  className="h-4 w-4 fill-indigo-600 text-indigo-600 
    dark:fill-slate-400 dark:text-slate-400 animate-pulse"
                />

                <span className="dark:text-slate-300">Powered by AI</span>
              </Badge>
            </div>

            <MotionH1
              variants={itemVariants}
              className="max-w-4xl text-2xl my-3 font-extrabold tracking-tight dark:text-[#d2d2d7] text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl mb-6 flex flex-col md:flex-row gap-3 items-center justify-center"
            >
              <span className="whitespace-nowrap">Transform PDFs into</span>

              <span className="inline-flex color-indigo-600">
                <LayoutTextFlip
                  text=""
                  words={["Concise", "Crispier", "Accurate", "Compact"]}
                />
                <span className="ml-2 text-black dark:text-[#d2d2d7]">
                  Summaries
                </span>
              </span>
            </MotionH1>

            <MotionP
              variants={itemVariants}
              className="mx-auto lg:text-xl md:text-lg sm:text-base max-w-2xl my-5 text-slate-600 dark:text-slate-100/80 mb-10 leading-relaxed"
            >
              Upload your documents and get instant, intelligent breakdowns of
              the content in seconds.
            </MotionP>
            <MotionDiv
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button
                size="lg"
                className="hover:cursor-pointer h-12 lg:px-8 md:px-6 sm:px-4 
text-white text-base 
bg-slate-800 hover:bg-slate-700 
dark:bg-[#707be0] dark:text-slate-900 dark:hover:bg-[#7882E3]/80 
shadow-md"
              >
                {userId ? (
                  <Link href="/upload" className="text-[17wpx]">Try Summarix</Link>
                ) : (
                  <Link href="/sign-in">Try Summarix</Link>
                )}
              </Button>
            </MotionDiv>

            <div className="mt-16 flex flex-col items-center gap-4 text-sm text-slate-500">
              <div className="flex flex-row items-center justify-center w-full mb-2">
                <AnimatedTooltip items={people} />
              </div>
              <p className="font-semibold">
                Trusted by 1,000+ students and researchers
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
