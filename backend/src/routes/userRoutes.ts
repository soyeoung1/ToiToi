import { Router } from "express";
import User from "../models/User";
import { auth } from "../middleware/auth";

const router = Router();

// @route   GET /api/users/:id
// @desc    Get user profile
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

// @route   GET /api/users/me
// @desc    Get current user
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

// @route   PUT /api/users/me
// @desc    Update current user
// @access  Private
router.put("/me", auth, async (req, res) => {
  try {
    const { nickname, bio } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    if (nickname) user.nickname = nickname;
    if (bio !== undefined) user.bio = bio;

    await user.save();

    res.json({ message: "프로필이 업데이트되었습니다.", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

export default router;
