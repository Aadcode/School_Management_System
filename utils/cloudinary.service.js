import { v2 as cloudinary } from "cloudinary";
import { response } from "express";

const uploader = async (req) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
  if (!req.file) {
    throw new Error("File not uploaded");
  }
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log("Respone URL", result.url);
    return response;
  } catch (e) {
    console.log("Error in Uploading", e);
    return e;
  }
};
export default uploader;
