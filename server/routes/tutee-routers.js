import express from "express";
import { getRequests, createRequest, login, signup, enroll } from "../routes-controllers/tutee-controller.js";

const router = express.Router();

router.get("/requests", getRequests);
router.post("/requests", createRequest);
router.post("/login", login);
router.post("/signup", signup);
router.patch("/enroll/:courseid", enroll);

export default router;
