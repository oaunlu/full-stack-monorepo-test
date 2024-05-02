import { Router } from "express";

import { Controller } from "@/controller";

const router = Router();
const controller = new Controller();

router.get("/get", (req, res) => controller.get());

router.post("/post", (req, res) => controller.post());

router.put("/post", (req, res) => controller.put());

router.delete("/post", (req, res) => controller.delete());

export default router;
