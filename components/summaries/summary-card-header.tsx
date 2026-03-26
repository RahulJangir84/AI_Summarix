import Link from "next/link";
import { Button } from "../ui/button";
import { Calendar, ChevronLeft, Clock, Sparkles } from "lucide-react";

export default function SummaryHeader({title,created_at,readingTime}:{
    title:string;
    created_at:string;
    readingTime:number;
}) {
    return (
        <div>
       <div className="flex items-center px-10 pt-8 justify-between mb-6">

  <div className="flex items-center gap-5 group">
    <div className="flex items-center gap-2 px-6 py-[8px] rounded-full 
      bg-linear-to-r from-indigo-100 via-blue-100 to-indigo-100 
      border border-indigo-200/40 shadow-sm 
      hover:shadow-md transition-all duration-300">

      <Sparkles className="h-4 w-4 text-indigo-600" />

      <span className="text-[15px] font-semibold bg-linear-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
        AI Summary
      </span>
    </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-6 py-[8px] rounded-full 
      bg-linear-to-r from-indigo-100 via-blue-100 to-indigo-100 
      border border-indigo-200/40 shadow-sm 
      hover:shadow-md transition-all duration-300">
        <Calendar className="h-4 w-4 text-indigo-600" />
        <span className="text-[15px] font-semibold bg-linear-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
          {new Date(created_at).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}
        </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-6 py-[8px] rounded-full 
      bg-linear-to-r from-indigo-100 via-blue-100 to-indigo-100 
      border border-indigo-200/40 shadow-sm 
      hover:shadow-md transition-all duration-300">
        <Clock className="h-4 w-4 text-indigo-600" />
        <span className="text-[15px] font-semibold bg-linear-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
          {readingTime} min Read
        </span>
        </div>
      </div>
  </div>

   <Link href="/dashboard">
    <Button
      variant="ghost"
      size="sm"
      className="group flex items-center gap-2 px-6 py-5 rounded-full
      bg-linear-to-r from-indigo-100 via-blue-100 to-indigo-100 backdrop-blur-md border border-indigo-200/40
      shadow-sm hover:shadow-lg hover:scale-[1.03] cursor-pointer
      transition-all duration-300">

      <ChevronLeft className="h-4 w-4 text-indigo-600 
        transition-transform duration-300 group-hover:-translate-x-1" />

      <span className="text-[16px] font-medium text-gray-700">
        Back <span className="hidden sm:inline">to Summaries</span>
      </span>
    </Button>
  </Link>

</div>
      <h1 className="text-3xl pl-10 font-bold">{title}</h1>
    </div>
    );
}