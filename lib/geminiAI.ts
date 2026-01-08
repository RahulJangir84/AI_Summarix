import { GoogleGenerativeAI } from "@google/generative-ai";
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function generateSummaryFromGeminiAPI(pdfText: string) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", // or "gemini-1.5-pro"
    });

    const result = await model.generateContent([
      {
        text: `${SUMMARY_SYSTEM_PROMPT}

Transform the following document into a concise, clear summary:

${pdfText}`,
      },
    ]);

    const summary = result.response.text();

    if (!summary) {
      throw new Error("Empty response from Gemini");
    }

    return summary;
  } catch (error) {
    console.error("Gemini summary generation failed", error);
    throw new Error("Failed to generate summary");
  }
}
