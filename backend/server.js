import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./route/FoodRoute.js";
import { userRouter } from "./route/UserRoute.js";
import "dotenv/config";
import { cartRouter } from "./route/CartRoute.js";
import orderRouter from "./route/OrderRoute.js";
//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());
//db connection
connectDB();

//api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("upploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(port, () => {
  console.log(`server Started on http://localhost:${port}`);
});
