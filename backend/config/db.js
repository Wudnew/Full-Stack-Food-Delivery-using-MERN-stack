import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://wudexhd:wudwud@cluster0.yib94.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
