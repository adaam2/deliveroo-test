import express, { Request, Response } from "express";

const router = express.Router();

// Namespaced router: url pattern is /api/{route}
// Define api-only routes here...

router.get("/", (req: Request, res: Response) => {
  res.json({ status: 'OK' })
})

export default router;
