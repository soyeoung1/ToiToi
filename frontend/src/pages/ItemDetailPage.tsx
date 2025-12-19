import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, MessageCircle, Share2, MapPin, Clock } from "lucide-react";
import { getUserById, getItemById, items } from "../data/mockData";

export default function ItemDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );
  const [isLiked, setIsLiked] = useState(false);

  // 페이지 이동 시 최상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const item = getItemById(Number(id));
  if (!item) {
    return <div>Item not found</div>;
  }

  const seller = getUserById(item.sellerId);
  if (!seller) {
    return <div>Seller not found</div>;
  }

  const relatedItems = items
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* 이미지 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-square bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition"
                >
                  <img
                    src={item.image}
                    alt={`${item.name} ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 정보 섹션 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{item.postedAt}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">가격</span>
                  <span className="text-4xl font-bold text-primary-600">
                    ₩{item.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">상태</span>
                  <span className="font-semibold">{item.condition}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">조회수</span>
                  <span className="font-semibold">{item.views}회</span>
                </div>
              </div>

              {/* 판매자 정보 */}
              <Link
                to={`/profile/${seller.id}`}
                className="block bg-gray-50 rounded-lg p-4 mb-6 hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">{seller.avatar}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{seller.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>⭐ {seller.rating}</span>
                      <span>•</span>
                      <span>거래 {seller.sales}회</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* 액션 버튼 */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center justify-center gap-2 px-6 py-4 border-2 rounded-lg font-semibold transition ${
                    isLiked
                      ? "border-red-500 bg-red-50 text-red-500"
                      : "border-gray-300 hover:border-primary-500 hover:bg-primary-50"
                  }`}
                >
                  <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                  <span>찜 {isLiked ? item.likes + 1 : item.likes}</span>
                </button>
                <Link
                  to={`/chat?itemId=${item.id}`}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition"
                >
                  <MessageCircle size={20} />
                  <span>채팅하기</span>
                </Link>
              </div>

              <button className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Share2 size={18} />
                <span>공유하기</span>
              </button>
            </div>
          </div>
        </div>

        {/* 탭 섹션 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab("description")}
                className={`flex-1 px-6 py-4 font-semibold transition ${
                  activeTab === "description"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                설명
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`flex-1 px-6 py-4 font-semibold transition ${
                  activeTab === "reviews"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                리뷰
              </button>
            </div>
          </div>

          <div className="p-8">
            {activeTab === "description" ? (
              <div>
                <h3 className="text-xl font-bold mb-4">상품 설명</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">거래 시 주의사항</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 안전한 장소에서 거래하세요</li>
                    <li>• 직접 물건을 확인하고 거래하세요</li>
                    <li>• 사기 거래에 주의하세요</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-4">판매자 리뷰</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b border-gray-200 pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span>👤</span>
                        </div>
                        <div>
                          <div className="font-semibold">구매자{i}</div>
                          <div className="text-sm text-gray-500">
                            ⭐⭐⭐⭐⭐
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        친절하고 빠른 거래 감사합니다!
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 연관 상품 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">연관 상품</h3>
            <Link
              to="/marketplace"
              className="text-primary-600 hover:underline"
            >
              더보기
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedItems.map((relatedItem) => (
              <Link
                key={relatedItem.id}
                to={`/marketplace/${relatedItem.id}`}
                className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary-500 transition-all cursor-pointer"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={relatedItem.image}
                    alt={relatedItem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <div className="mb-1.5">
                    <span className="inline-block px-1.5 py-0.5 text-[10px] font-medium bg-primary-100 text-primary-600 rounded">
                      {relatedItem.condition}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm mb-1.5 line-clamp-2 min-h-[2.5rem]">
                    {relatedItem.name}
                  </h4>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                    {relatedItem.description}
                  </p>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <p className="text-primary-600 font-bold text-lg">
                      ₩{relatedItem.price.toLocaleString()}
                    </p>
                    <div className="flex items-center justify-between mt-1.5 text-[10px] text-gray-500">
                      <span className="flex items-center gap-0.5">
                        <MapPin size={10} />
                        {relatedItem.location}
                      </span>
                      <span>❤️ {relatedItem.likes}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
