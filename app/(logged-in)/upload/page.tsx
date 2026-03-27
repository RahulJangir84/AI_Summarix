import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { hasReachedUploadLimit } from "@/lib/user";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default async function Page() {
  const user=await currentUser();
  const userId=user?.id;
  if (!userId) {
      return redirect('/sign-in');
  }
  const email=user?.emailAddresses?.[0]?.emailAddress;
  if(!email){
      return redirect('/sign-in');
  }
  const {hasReachedLimit}=await hasReachedUploadLimit(userId,email);
  if(hasReachedLimit){
    return redirect('/dashboard');
  }
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
