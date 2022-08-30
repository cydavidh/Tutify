import express from "express";
import { getTeaching, createCourse } from "../controllers/tutor-controller.js";

const router = express.Router();

router.get("/", getTeaching);
router.post("/", createCourse);

export default router;
