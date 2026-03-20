import SummaryHeader from "@/components/summaries/summary-card-header";
import { getDbConnection } from "@/lib/database";
import SourceInfo from "@/components/summaries/source-info";
import SummarySlider from "@/components/summaries/summary-slider";
export default async function Page({params,}: {
  params: Promise<{ id: string }>;
}){
  const { id } = await params;
  const sql=await getDbConnection();
  const summary=await sql`SELECT * FROM pdf_summary WHERE id=${id}`;
  if(!summary){
    return (
      <div>
        Summary not found
      </div>
    );
  }
  const {title,summary_text,file_name}=summary[0];
  return (
    <div className="container mx-auto flex flex-col gap-4">
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-24">
            <div className="flex flex-col">
                <SummaryHeader title={title}/>
                <SourceInfo source={file_name}/>
                <SummarySlider summary={summary_text}/>
            </div>
        </div>
    </div>
  );
}