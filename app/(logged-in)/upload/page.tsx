import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
export default function Page() {
  return (
      <section className="relative h-full w-full overflow-hidden">
        <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center text-center gap-6">
        <UploadHeader />
        <UploadForm />
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
