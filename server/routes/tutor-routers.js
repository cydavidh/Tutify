import express from "express";
import { getTeaching, createCourse, logIn, signUp } from "../routes-controllers/tutor-controller.js";

const router = express.Router();

router.get("/teaching", getTeaching);
router.post("/teaching", createCourse);
router.post("/login", logIn);
router.post("/signup", signUp);

export default router;
