/* eslint-disable no-console */
import { UploadApiResponse } from "cloudinary";
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import asyncFormParse from "../../../utils/asyncFormParse";
import cloudinaryUpload from "../../../utils/cloudinaryUpload";
import prisma from "../../../../prisma/client";
import CategoryController from "../interface";

const uploadImage: CategoryController["uploadImage"] = async (req, res) => {
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
    const category = await prisma.category.update({
      where: { id },
      data: { imageURL: cloudinaryResponse!.url },
    });
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default uploadImage;
