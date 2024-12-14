import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log(`File Uploaded on Cloudinary! File Src : ${response.url}`);
    // Once the file is uploaded, we would like to delete from our server
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log(`File Uploaded on Cloudinary Failed:`, error);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export const deleteOnCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Deleted from Cloudinary! Public Id: ", publicId);
  } catch (error) {
    console.log("Error while deleting on Cloudinary", error);
    return null;
  }
};

export default uploadOnCloudinary;
