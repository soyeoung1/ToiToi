import { TrendingUp, TrendingDown } from "lucide-react";

export default function PricePredictionPage() {
  const priceData = [
    {
      id: 1,
      name: "레고 스타워즈 밀레니엄 팔콘",
      minPrice: 180000,
      trend: "up",
      change: 5.2,
      image: "🧱",
    },
    {
      id: 2,
      name: "건담 RX-93 뉴건담",
      minPrice: 42000,
      trend: "up",
      change: 3.1,
      image: "🤖",
    },
    {
      id: 3,
      name: "바비 드림하우스",
      minPrice: 95000,
      trend: "down",
      change: -2.5,
      image: "🏠",
    },
    {
      id: 4,
      name: "포켓몬 피카츄 피규어",
      minPrice: 28000,
      trend: "up",
      change: 8.7,
      image: "⚡",
    },
    {
      id: 5,
      name: "타요 버스 세트",
      minPrice: 35000,
      trend: "stable",
      change: 0.5,
      image: "🚌",
    },
    {
      id: 6,
      name: "실바니안 패밀리 하우스",
      minPrice: 68000,
      trend: "up",
      change: 4.2,
      image: "🏡",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI 가격 예측</h1>
          <p className="text-gray-600">
            실시간 거래 데이터를 기반으로 한 합리적인 가격을 확인하세요
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">
                AI 가격 예측이란?
              </h3>
              <p className="text-sm text-blue-800">
                최근 거래 데이터, 상품 상태, 시장 트렌드 등을 AI가 분석하여 적정
                가격을 제시합니다. 구매나 판매 시 참고하세요!
              </p>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">가격 확인하기</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="장난감 이름을 입력하세요..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              검색
            </button>
          </div>
        </div>

        {/* Trending Prices */}
        <div>
          <h2 className="text-2xl font-bold mb-6">실시간 인기 장난감 시세</h2>
          <div className="grid gap-4">
            {priceData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-6">
                  <div className="text-6xl">{item.image}</div>

                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-gray-500">AI 예측 가격</p>
                        <p className="text-2xl font-bold text-primary-600">
                          ₩{item.minPrice.toLocaleString()}
                        </p>
                      </div>
                      <div
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                          item.trend === "up"
                            ? "bg-red-100 text-red-600"
                            : item.trend === "down"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.trend === "up" ? (
                          <TrendingUp size={16} />
                        ) : item.trend === "down" ? (
                          <TrendingDown size={16} />
                        ) : (
                          <span>→</span>
                        )}
                        <span>
                          {item.change > 0 ? "+" : ""}
                          {item.change}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors mb-2">
                      상세 보기
                    </button>
                    <p className="text-xs text-gray-500">최근 30일 거래 기준</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart Section Placeholder */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">가격 트렌드 차트</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              차트 영역 (Chart.js 또는 Recharts 연동)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
