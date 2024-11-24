import express from "express";
import {
  getOtherUsers,
  login,
  logOut,
  register,
} from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logOut").get(logOut);
router.route("/").get(isAuthenticated, getOtherUsers);

export default router;
