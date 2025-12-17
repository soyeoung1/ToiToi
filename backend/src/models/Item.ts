import { Schema, model, Document } from "mongoose";

export interface IItem extends Document {
  title: string;
  description: string;
  price: number;
  category: string;
  condition: "excellent" | "good" | "fair" | "poor";
  images: string[];
  seller: Schema.Types.ObjectId;
  status: "available" | "reserved" | "sold";
  views: number;
  likes: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const itemSchema = new Schema<IItem>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: ["doll", "figure", "gundam", "lego", "car", "other"],
    },
    condition: {
      type: String,
      required: true,
      enum: ["excellent", "good", "fair", "poor"],
    },
    images: [
      {
        type: String,
      },
    ],
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "reserved", "sold"],
      default: "available",
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model<IItem>("Item", itemSchema);
