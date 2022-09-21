import express from "express";
import { login, signup, enroll } from "../routes-controllers/tutee-controller.js";

const router = express.Router();

router.get("/requests");
router.post("/requests");
router.post("/login", login);
router.post("/signup", signup);
router.patch("/enroll/:courseid", enroll);

export default router;
