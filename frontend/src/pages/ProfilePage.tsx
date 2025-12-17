import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Star, MapPin, Package, Heart, Settings } from "lucide-react";
import {
  getUserById,
  getItemsBySeller,
  getLikedItemsByUser,
  getRepairRequestsByUser,
} from "../data/mockData";

export default function ProfilePage() {
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState<"selling" | "liked">("selling");

  // userId가 없으면 기본값 사용 (로그인한 사용자)
  const currentUserId = userId || "user1";
  const user = getUserById(currentUserId);
  const sellingItems = getItemsBySeller(currentUserId);
  const likedItems = getLikedItemsByUser(currentUserId);
  const repairRequests = getRepairRequestsByUser(currentUserId);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 프로필 헤더 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-primary-200 rounded-full flex items-center justify-center">
                <span className="text-5xl">{user.avatar}</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                <div className="flex items-center gap-4 text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Star size={18} fill="#fbbf24" stroke="#fbbf24" />
                    <span className="font-semibold">{user.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span className="text-sm">{user.location}</span>
                  </div>
                  <span className="text-sm">가입 {user.joinDate}</span>
                </div>
                <div className="flex gap-6 text-sm">
                  <div>
                    <span className="text-gray-600">거래 </span>
                    <span className="font-bold text-primary-600">
                      {user.sales}회
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">리뷰 </span>
                    <span className="font-bold text-primary-600">
                      {user.reviews}개
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Settings size={18} />
              <span>설정</span>
            </button>
          </div>
        </div>

        {/* 거래중 만족 */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold mb-2">🎉 거래중 만족도</h3>
          <p className="text-lg">
            고객님의 거래 만족도는{" "}
            <span className="font-bold text-2xl">95%</span>입니다!
          </p>
        </div>

        {/* 탭 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab("selling")}
                className={`flex-1 px-6 py-4 font-semibold transition ${
                  activeTab === "selling"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Package size={18} className="inline mr-2" />
                판매
              </button>
              <button
                onClick={() => setActiveTab("liked")}
                className={`flex-1 px-6 py-4 font-semibold transition ${
                  activeTab === "liked"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Heart size={18} className="inline mr-2" />
                관심 상품
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === "selling" ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sellingItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/marketplace/${item.id}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="aspect-square bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="mb-2">
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            item.status === "판매중"
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <h3 className="font-semibold text-sm mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="text-primary-600 font-bold">
                        ₩{item.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {likedItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/marketplace/${item.id}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="aspect-square bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-sm mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="text-primary-600 font-bold text-sm">
                        ₩{item.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 수리 요청 내역 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">수리 요청 내역</h2>
            <Link
              to="/repair"
              className="text-primary-600 text-sm hover:underline"
            >
              더보기
            </Link>
          </div>
          <div className="space-y-3">
            {repairRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div>
                  <h3 className="font-semibold mb-1">{request.toyName}</h3>
                  <p className="text-sm text-gray-500">{request.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    request.status === "진행중"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {request.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
