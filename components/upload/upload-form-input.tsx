"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function UploadFormInput({ onSubmit }: UploadFormInputProps) {
  //upload form input triggers the onSubmit function
  return (
    <form className="flex flex-col gap-6 mt-4" onSubmit={onSubmit}>
      <div className="flex justify-end items-center gap-4">
        <Input type="file" accept="application/pdf" name="file" id="file" required />
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          Upload your PDF
        </Button>
      </div>
    </form>
  );
}
