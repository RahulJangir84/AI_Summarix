'use client'
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "../ui/button";
import DownloadButton from "./downloadButton";
export default function SourceInfo({original_file_url,file_name,title,summary_text,created_at}:{
    original_file_url:string;
    file_name:string;
    title:string;
    summary_text:string;
    created_at:string;
}) {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
                <FileText className="h-4 w-4" />
                <p className="text-[16px]">Source:{file_name}</p>
            </div>
            <div className="flex gap-2">
                <Button className="px-3 text-[16px] text-indigo-600 hover:text-indigo-700"
                variant="ghost"
                size="sm"
                asChild
                >
                <a href={original_file_url} className="text-2xl" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 mr-1" />
                    View Original
                </a>
                </Button>
                <DownloadButton file_name={file_name} created_at={created_at} title={title} summary_text={summary_text}/>
            </div>
        </div>
    );
}