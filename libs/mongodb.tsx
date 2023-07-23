//user Name : nextjsToDo

import mongoose from "mongoose";

// password: HkPFY4yuurlnP47q
export const connnetMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nextjsToDo:HkPFY4yuurlnP47q@cluster0.zr5yxev.mongodb.net/nextjs_crud"
    );
    console.log("mongoose Connected");
  } catch (error) {
    console.log(error);
  }
};
