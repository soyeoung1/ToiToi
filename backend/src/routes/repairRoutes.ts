import { Router } from "express";
import Repair from "../models/Repair";
import { auth } from "../middleware/auth";

const router = Router();

// @route   GET /api/repairs
// @desc    Get user repairs
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const repairs = await Repair.find({ user: req.userId })
      .populate("expert", "nickname rating")
      .sort("-createdAt");

    res.json(repairs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

// @route   POST /api/repairs
// @desc    Create repair request
// @access  Private
router.post("/", auth, async (req, res) => {
  try {
    const { toyName, toyCategory, description, images } = req.body;

    const repair = new Repair({
      user: req.userId,
      toyName,
      toyCategory,
      description,
      images,
    });

    await repair.save();

    res.status(201).json({ message: "수리 요청이 등록되었습니다.", repair });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

// @route   PUT /api/repairs/:id/status
// @desc    Update repair status
// @access  Private
router.put("/:id/status", auth, async (req, res) => {
  try {
    const { status } = req.body;
    const repair = await Repair.findById(req.params.id);

    if (!repair) {
      return res.status(404).json({ message: "수리 요청을 찾을 수 없습니다." });
    }

    repair.status = status;
    await repair.save();

    res.json({ message: "수리 상태가 업데이트되었습니다.", repair });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

export default router;
