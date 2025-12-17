import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import User from "../models/User";

const router = Router();

// @route   POST /api/auth/signup
// @desc    Register user
// @access  Public
router.post(
  "/signup",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 8 }),
    body("nickname").trim().isLength({ min: 2, max: 20 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password, nickname } = req.body;

      // Check if user exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "이미 사용 중인 이메일입니다." });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const user = new User({
        email,
        password: hashedPassword,
        nickname,
      });

      await user.save();

      // Create JWT token
      const token = jwt.sign(
        { userId: user._id },
        (process.env.JWT_SECRET || "secret") as string
      );

      res.status(201).json({
        message: "회원가입 성공",
        token,
        user: {
          id: user._id,
          email: user.email,
          nickname: user.nickname,
          joinDate: user.joinDate,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
  }
);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post(
  "/login",
  [body("email").isEmail().normalizeEmail(), body("password").notEmpty()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      // Check user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(401)
          .json({ message: "이메일 또는 비밀번호가 잘못되었습니다." });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "이메일 또는 비밀번호가 잘못되었습니다." });
      }

      // Create JWT token
      const token = jwt.sign(
        { userId: user._id },
        (process.env.JWT_SECRET || "secret") as string
      );

      res.json({
        message: "로그인 성공",
        token,
        user: {
          id: user._id,
          email: user.email,
          nickname: user.nickname,
          joinDate: user.joinDate,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
  }
);

export default router;
