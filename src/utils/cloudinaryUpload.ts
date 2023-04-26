/* eslint-disable no-console */
import cloudinary, { UploadApiResponse } from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUpload = (
  filePath: string,
): Promise<UploadApiResponse | undefined> =>
  new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      filePath,
      {
        secure: true,
      },
      (error, result) => {
        if (error) {
          console.log(error);
          reject(error.messages);
        }
        resolve(result);
      },
    );
  });

export default cloudinaryUpload;
