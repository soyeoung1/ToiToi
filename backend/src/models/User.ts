import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  nickname: string;
  bio?: string;
  avatar?: string;
  joinDate: Date;
  rating: number;
  salesCount: number;
  purchaseCount: number;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      maxlength: 500,
    },
    avatar: {
      type: String,
    },
    joinDate: {
      type: Date,
      default: Date.now,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    salesCount: {
      type: Number,
      default: 0,
    },
    purchaseCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("User", userSchema);
