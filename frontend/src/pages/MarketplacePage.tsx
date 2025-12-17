import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { items } from "../data/mockData";

export default function MarketplacePage() {
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [condition, setCondition] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  // 필터링 및 정렬된 아이템
  const filteredItems = useMemo(() => {
    let result = items;

    // 검색어 필터
    if (searchQuery) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 카테고리 필터
    if (category !== "all") {
      result = result.filter((item) => item.category === category);
    }

    // 가격 필터
    result = result.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    // 상태 필터
    if (condition !== "all") {
      const conditionMap: { [key: string]: string } = {
        excellent: "최상",
        good: "양호",
        fair: "보통",
      };
      result = result.filter(
        (item) => item.condition === conditionMap[condition]
      );
    }

    // 정렬
    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "latest":
      default:
        // 기본 순서 유지
        break;
    }

    return result;
  }, [items, searchQuery, category, priceRange, condition, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">중고 장난감 마켓</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="장난감 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search
                className="absolute right-3 top-3.5 text-gray-400"
                size={20}
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <SlidersHorizontal size={20} />
              <span>필터</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-4">카테고리</h3>
              <div className="space-y-2">
                {[
                  { value: "all", label: "전체" },
                  { value: "doll", label: "인형" },
                  { value: "figure", label: "피규어" },
                  { value: "gundam", label: "건담/프라모델" },
                  { value: "lego", label: "레고/블록" },
                  { value: "car", label: "자동차" },
                ].map((cat) => (
                  <label key={cat.value} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={cat.value}
                      checked={category === cat.value}
                      onChange={(e) => setCategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-4">가격대</h3>
              <div className="space-y-3">
                <div>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>₩0</span>
                    <span>₩{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-4">상태</h3>
              <div className="space-y-2">
                {[
                  { value: "all", label: "전체" },
                  { value: "excellent", label: "최상" },
                  { value: "good", label: "양호" },
                  { value: "fair", label: "보통" },
                ].map((cond) => (
                  <label key={cond.value} className="flex items-center">
                    <input
                      type="radio"
                      name="condition"
                      value={cond.value}
                      checked={condition === cond.value}
                      onChange={(e) => setCondition(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">{cond.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Items Grid */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">{filteredItems.length}개의 상품</p>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">최신순</option>
                <option value="price-low">낮은 가격순</option>
                <option value="price-high">높은 가격순</option>
              </select>
            </div>

            {filteredItems.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/marketplace/${item.id}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="aspect-square bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {item.name}
                      </h3>
                      <p className="text-primary-600 font-bold text-xl mb-2">
                        ₩{item.price.toLocaleString()}
                      </p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>상태: {item.condition}</span>
                        <span>❤️ 23</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
