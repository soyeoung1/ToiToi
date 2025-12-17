export interface User {
  id: string;
  email: string;
  nickname: string;
  bio?: string;
  avatar?: string;
  joinDate: string;
  rating: number;
  salesCount: number;
  purchaseCount: number;
}

export interface Item {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: "doll" | "figure" | "gundam" | "lego" | "car" | "other";
  condition: "excellent" | "good" | "fair" | "poor";
  images: string[];
  seller: User | string;
  status: "available" | "reserved" | "sold";
  views: number;
  likes: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Repair {
  _id: string;
  user: string;
  expert?: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  _id: string;
  reviewer: string;
  reviewee: string;
  item?: string;
  repair?: string;
  rating: number;
  comment: string;
  type: "trade" | "repair";
  createdAt: string;
}

export interface PricePrediction {
  predictedPrice: number;
  priceRange: {
    min: number;
    max: number;
  };
  trend: "up" | "down" | "stable";
  trendPercentage: number;
  confidence: number;
}

export interface Recommendation {
  id: number;
  name: string;
  category: string;
  ageRange: [number, number];
  tags: string[];
  score: number;
  reason: string;
}
