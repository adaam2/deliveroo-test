import express, { Request, Response } from "express";

import parser from "../parser";

const router = express.Router();

router.get("/restaurants\.:json?", (req: Request, res: Response) => {
  res.json({ status: 'OK', data: parser() })
})

export default router;
