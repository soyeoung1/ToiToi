import { Router } from "express";
import axios from "axios";

const router = Router();

// @route   GET /api/prices/predict
// @desc    Get AI price prediction
// @access  Public
router.get("/predict", async (req, res) => {
  try {
    const { toyName, category, condition } = req.query;

    // Call AI service
    const aiServiceUrl = process.env.AI_SERVICE_URL || "http://localhost:8000";
    const response = await axios.post(`${aiServiceUrl}/predict-price`, {
      toyName,
      category,
      condition,
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI 서비스 오류가 발생했습니다." });
  }
});

// @route   GET /api/prices/trending
// @desc    Get trending toy prices
// @access  Public
router.get("/trending", async (req, res) => {
  try {
    // TODO: Implement trending prices from database
    res.json({ message: "Trending prices endpoint" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

export default router;
