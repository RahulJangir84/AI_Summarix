import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareDemo() {
  return (
    <div className="flex flex-col gap-1">
    <div className="p-4 border rounded-3xl bg-white border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="/image.png"
        secondImage="/image2.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[450px] md:w-[700px]"
        slideMode="hover"
      />
    </div>
    <div className="flex items-center justify-evenly gap-1">
      <p className="text-sm font-semibold text-gray-500">
        Original PDF
      </p>
      <p className="text-sm font-semibold text-gray-500">
        Summarized PDF
      </p>
    </div>
    </div>
  );
}