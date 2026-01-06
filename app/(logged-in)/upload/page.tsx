import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";

export default function Page() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="absolute top-[-20%] left-0 right-0 h-full w-full bg-[radial-gradient(circle_farthest-side,rgba(79,70,229,0.15),rgba(255,255,255,0))]" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-indigo-100/50 blur-[100px]" />
      <div className="relative z-10 max-w-5xl py-24 mx-auto px-6 mt-18">
        <div className="flex flex-col items-center justify-center text-center gap-6">
        <UploadHeader />
        <UploadForm />
        </div>
      </div>
    </section>
  );
}
