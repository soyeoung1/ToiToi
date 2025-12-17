import { Schema, model, Document } from "mongoose";

export interface IReview extends Document {
  reviewer: Schema.Types.ObjectId;
  reviewee: Schema.Types.ObjectId;
  item?: Schema.Types.ObjectId;
  repair?: Schema.Types.ObjectId;
  rating: number;
  comment: string;
  type: "trade" | "repair";
  createdAt: Date;
}

const reviewSchema = new Schema<IReview>(
  {
    reviewer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reviewee: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
    repair: {
      type: Schema.Types.ObjectId,
      ref: "Repair",
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["trade", "repair"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IReview>("Review", reviewSchema);
