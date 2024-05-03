import { NextFunction, Router } from "express";

import { Controller } from "@controllers/controller";

const router = Router({ caseSensitive: true, strict: true });
const controller = new Controller();

// middleware that is specific to this router
const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log("Time: ", Date.now());
  next();
};
router.use(timeLog);

router.get("/get", (req, res) => controller.get());

router.post("/post", (req, res) => controller.post());

router.put("/post", (req, res) => controller.put());

router.delete("/post", (req, res) => controller.delete());

export default router;
