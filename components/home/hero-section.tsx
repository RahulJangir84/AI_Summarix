import { LayoutTextFlip } from "../ui/layout-text-flip";
import { Button } from "../ui/button";
import { Link, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export default function HeroSection() {
  return (
    
    <section className="relative w-full overflow-hidden bg-white/50 dark:bg-slate-950">
      <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-24 w-full">
        <div className="relative z-10 container mx-auto px-4 my-10 flex flex-col items-center text-center">
        <div className="mb-8 flex justify-center">
          <Badge
            variant="outline"
            className="relative cursor-pointer px-4 py-1.5 text-sm font-medium text-indigo-600 border-indigo-200 bg-indigo-50 hover:bg-indigo-100 transition-colors gap-2 rounded-full"
          >
            <Sparkles className="h-4 w-4 fill-indigo-600 text-indigo-600 animate-pulse" />
            <span>Powered by AI</span>
          </Badge>
        </div>

        <h1 className="max-w-4xl text-2xl my-3 font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl mb-6 flex flex-col md:flex-row gap-3 items-center justify-center">
          <span className="whitespace-nowrap">Transform PDFs into</span>

          <span className="inline-flex color-indigo-600">
            <LayoutTextFlip
              text=""
              words={["Concise", "Crispier", "Accurate","Compact"]}
            />
            <span className="ml-2 text-black">Summaries</span>
          </span>
        </h1>

        <p className="mx-auto lg:text-xl md:text-lg sm:text-base max-w-2xl my-5 text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Upload your documents and get instant, intelligent breakdowns of the
          content in seconds.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button 
            size="lg"
            className="hover:cursor-pointer h-12 lg:px-8 md:px-6 sm:px-4 text-white text-base bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 "
          >
            <Link href="/login"/>
            Try Summarix
          </Button>
        </div>

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

      
    </section>
  );
}
