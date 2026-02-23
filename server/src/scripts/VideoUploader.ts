import cloudinary from "../config/cloudinary.config";

type ClodunirayUplaodResult = {
  secure_url: string;
  public_id: string;
};
export async function VideoUploader(buffer: Buffer) {
  // Implementation for video uploading
  const upload = await new Promise<ClodunirayUplaodResult>(
    (resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: "video",
          folder: "makon",
          quality_analysis: true,
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result as ClodunirayUplaodResult);
          }
        },
      );
      stream.end(buffer);
    },
  );

  return { secure_url: upload.secure_url, public_id: upload.public_id };
}

export async function VideoDeleter(public_id: string) {
  // Implementation for video deletion
  const result = await cloudinary.uploader.destroy(public_id, {
    resource_type: "video",
  });
  return result;
}
