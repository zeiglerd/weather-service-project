import { Request, Response } from "express";
import { Weather } from "../../services/weather/index.js";

export default async (req: Request, res: Response) => {
  const { lat, long } = req.params;

  try {
    const report = await Weather.getReport({ lat, long });
    res.json(report);
  } catch (error) {
    res.status(400).json({ message: "Invalid latitude or longitude." });
  }
};
