import { Router } from "express";
import { auth } from "../middleware/auth";

const router = Router();

// @route   GET /api/chats
// @desc    Get user chats
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    // TODO: Implement chat listing
    res.json({ message: "Chat list endpoint" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

export default router;
