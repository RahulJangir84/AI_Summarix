import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing ,type FileRouter} from "uploadthing/next";
import {UploadThingError} from "uploadthing/server";
const f = createUploadthing();

export const ourFileRouter ={
    pdfUploader: f({pdf:{maxFileSize:'32MB'}})
    .middleware(
        async ({req}) => {
            const user = await currentUser();
            // if user is not signed in
            if(!user) throw new UploadThingError("Unauthorized");
            // return to be used in onUploadComplete
            return {userId:user.id};
        
    }).onUploadComplete(async ({metadata, file}) => {
        console.log("Upload complete for userId:", metadata.userId);
        console.log("File url:", file.ufsUrl);
        return {userId:metadata.userId,fileUrl:file.ufsUrl}
    })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
