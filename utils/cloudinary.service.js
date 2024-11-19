import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "my_cloud_name",
  api_key: "my_key",
  api_secret: "my_secret",
});

const uploader = async (filepath) => {
  const result = await cloudinary.uploader.upload(filepath);
  
};
