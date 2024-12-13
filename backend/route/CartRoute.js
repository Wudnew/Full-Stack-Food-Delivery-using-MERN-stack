import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/CartController.js";
import { authMiddleware } from "../middleware/auth.js";
const cartRouter = express.Router();

//api Endpoint
cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);

export { cartRouter };
