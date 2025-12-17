import { Schema, model, Document } from "mongoose";

export interface IRepair extends Document {
  user: Schema.Types.ObjectId;
  expert?: Schema.Types.ObjectId;
  toyName: string;
  toyCategory: string;
  description: string;
  images: string[];
  status:
    | "pending"
    | "quoted"
    | "accepted"
    | "in-progress"
    | "completed"
    | "cancelled";
  quotedPrice?: number;
  finalPrice?: number;
  createdAt: Date;
  updatedAt: Date;
}

const repairSchema = new Schema<IRepair>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expert: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    toyName: {
      type: String,
      required: true,
    },
    toyCategory: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: [
        "pending",
        "quoted",
        "accepted",
        "in-progress",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },
    quotedPrice: {
      type: Number,
    },
    finalPrice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IRepair>("Repair", repairSchema);
