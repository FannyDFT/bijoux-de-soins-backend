import { UploadApiResponse } from "cloudinary";

import asyncFormParse from "../../../utils/asyncFormParse";
import cloudinaryUpload from "../../../utils/cloudinaryUpload";
import prisma from "../../../../prisma/client";
import ProductController from "../interface";

const uploadImage: ProductController["uploadImage"] = async (req, res) => {
  const { id } = req.params;
  console.log("ici", id);
  console.log(req.headers);
  try {
    const { files, fields } = await asyncFormParse(req);
    console.log(files, fields);
    const cloudinaryResponse = await cloudinaryUpload(files.image[0].path);
    if (!cloudinaryResponse) {
      throw new Error("upload error");
    }
    const service = await prisma.service.update({
      where: { id },
      data: { image: cloudinaryResponse!.url },
    });
    res.status(200).send(service);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default uploadImage;
