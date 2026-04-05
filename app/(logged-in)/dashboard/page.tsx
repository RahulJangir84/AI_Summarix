import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import SummaryCard from "@/components/summaries/summary-card";
import { getSummaries } from "@/lib/summary";
import { currentUser} from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import EmptySummary from "@/components/summaries/empty-summary";
import { hasReachedUploadLimit } from "@/lib/user";


export default async function Dashboard() {
    const user=await currentUser();
    const userId=user?.id;
    if (!userId) {
        return redirect('/sign-in');
    }
    const summaries = await getSummaries(userId);
    const email=user?.emailAddresses?.[0]?.emailAddress;
    if(!email){
        return redirect('/sign-in');
    }
    const {hasReachedLimit,currentCount,limit,planName}=await hasReachedUploadLimit(userId,email);
  return (
    <main className="min-h-screen pt-5 bg-linear-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 dark:via-80% ">
      <div className="flex flex-col gap-3 mx-auto justify-center items-center ">
        <div className="px-17 w-full py-12 sm:py-24 ">
          <div className="flex gap-4 w-full mb-8 justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="text-5xl font-bold tracking-tight bg-linear-to-r from-gray-600 to-gray-900 bg-clip-text dark:text-[#D2D2D7] text-transparent">
                Your summaries
              </h1>
              <p className="text-lg text-gray-600 dark:text-slate-300">
                All the summaries you&apos;ve created will appear here
              </p>
            </div>
            <div className="mt-5">
              <div className="flex gap-4">

                {!hasReachedLimit&&<Button
                  size="lg"
                  className="hover:cursor-pointer h-10 lg:px-6 md:px-5 sm:px-3 text-white text-base bg-indigo-600/90 hover:bg-indigo-700 dark:bg-[#a5b4fc] dark:hover:bg-[#8490f8] shadow-lg shadow-indigo-600/20 "
                >
                  <Link className="flex items-center dark:text-slate-900" href="/upload"><Plus className="mr-2 h-4 w-4" />New Summary</Link>
                </Button>}
              </div>
            </div>
          </div>
        <div className="mb-6 bg-indigo-100 border border-indigo-200 rounded-lg p-4 text-indigo-800">
            <div className="text-sm">
            <p>You&apos;ve used {currentCount} out of {limit} uploads on the {" "} {planName??"Free"} Plan 
                <Link href="/#pricing" className="underline text-indigo-800 font-medium underline-offset-4 ml-1 inline-flex items-center">Upgrade to a pro{' '}
                <ArrowRight className="w-4 h-4 inline-block"></ArrowRight>
                </Link >
                {' '}for unlimited uploads.
            </p>

            </div>
        </div>
        {summaries.length === 0 ? (
            <EmptySummary />
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 sm:px-0">
            {summaries.map((summary, index) => (
                <SummaryCard key={index} summary={summary} />
            ))}
        </div>
        )}
        </div>
      </div>
    </main>
  );
}
