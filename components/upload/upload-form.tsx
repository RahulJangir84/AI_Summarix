"use client";
import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./upload-form-input";
import { z } from "zod";


//to validate the file
const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 24 * 1024 * 1024,
      "File size must be less than 24MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

export default function UploadForm() {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("Uploaded successfully");
    },
    onUploadError: (err) => {
      console.error("error occured while uploading", err);
    },
    onUploadBegin: (fileName) => {
      console.log("Upload has begun for", fileName);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //stops browser reload
    console.log("submitted");
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;
    //validation
    const validatedFields = schema.safeParse({ file });
    if (!validatedFields.success) {
      console.log(validatedFields.error);
      return;
    }

    //upload file to uploadthing
    const resp = await startUpload([file]);
    if (!resp) {
      return;
    }


    //parse the pdf using langchain

    
  };
  return (
    //handlesubmit runs when form is submitted in uploadforminput
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto ">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
