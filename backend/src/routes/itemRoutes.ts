import { Router } from "express";
import Item from "../models/Item";
import { auth } from "../middleware/auth";

const router = Router();

// @route   GET /api/items
// @desc    Get all items
// @access  Public
router.get("/", async (req, res) => {
  try {
    const {
      category,
      condition,
      minPrice,
      maxPrice,
      search,
      sort = "-createdAt",
    } = req.query;

    const filter: any = { status: "available" };

    if (category && category !== "all") filter.category = category;
    if (condition && condition !== "all") filter.condition = condition;
    if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
    if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };
    if (search) filter.title = { $regex: search, $options: "i" };

    const items = await Item.find(filter)
      .populate("seller", "nickname rating")
      .sort(sort as string)
      .limit(50);

    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

// @route   GET /api/items/:id
// @desc    Get item by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate(
      "seller",
      "nickname rating salesCount"
    );

    if (!item) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }

    // Increment views
    item.views += 1;
    await item.save();

    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

// @route   POST /api/items
// @desc    Create new item
// @access  Private
router.post("/", auth, async (req, res) => {
  try {
    const { title, description, price, category, condition, images } = req.body;

    const item = new Item({
      title,
      description,
      price,
      category,
      condition,
      images,
      seller: req.userId,
    });

    await item.save();

    res.status(201).json({ message: "상품이 등록되었습니다.", item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

// @route   PUT /api/items/:id
// @desc    Update item
// @access  Private
router.put("/:id", auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }

    if (item.seller.toString() !== req.userId) {
      return res.status(403).json({ message: "권한이 없습니다." });
    }

    Object.assign(item, req.body);
    await item.save();

    res.json({ message: "상품이 수정되었습니다.", item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

// @route   DELETE /api/items/:id
// @desc    Delete item
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }

    if (item.seller.toString() !== req.userId) {
      return res.status(403).json({ message: "권한이 없습니다." });
    }

    await item.deleteOne();

    res.json({ message: "상품이 삭제되었습니다." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

export default router;
