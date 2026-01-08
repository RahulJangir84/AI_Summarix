'use server';

import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openAI";
import { generateSummaryFromGeminiAPI } from "@/lib/geminiAI";

export async function generatePdfSummary(uploadResponse:[{
    serverData:
    {
        userId:string;
        file:{
            url:string;
            name:string; 
        };
    };
}]
)
 {
    if(!uploadResponse){
        return{
            success:false,
            message:"File upload failed",
            data:null,
        }
    }

    const {serverData :{
        userId,
        file:{
            url:pdfUrl,
            name:pdfName,
        },
    }} = uploadResponse[0];


    if(!pdfUrl){
        return{
            success:false,
            message:"File upload failed",
            data:null,
        }
    }

    try{
        const pdfText=await fetchAndExtractPdfText(pdfUrl);
        console.log({pdfText});

        let summary;
        try{
            summary=await generateSummaryFromGeminiAPI(pdfText);
            console.log({summary});
        }
        catch(error){
            console.log(error);
            if(error instanceof Error && error.message==="Rate limit exceeded" ){
                try{
                    summary=await generateSummaryFromGeminiAPI(pdfText);
                    console.log(summary);
                }
                catch(geminiError){
                    console.error("Gemini API failed after OpenAI rate limit exceeded",geminiError);
                    throw new Error("Summary generation failed");
                }
            }
            // call gemini api if openai fails
            
        }

        if(!summary){
            return {
                success:false,
                message:"Summary generation failed",
                data:null,
            }
        }

        return {
            success:true,
            message:"Summary generated successfully",
            data:summary,
        }

    }
    catch(error){
        console.log("Error uploading file",error);
        return{
            success:false,
            message:"File upload failed",
            data:null,
        };
    }
}