import { BadgeDollarSign } from "lucide-react";

export default function PricePredictionPage() {
  const priceData = [
    {
      id: 1,
      name: "레고 스타워즈 밀레니엄 팔콘",
      minPrice: 180000,
      category: "블록",
      condition: "양호",
      image: "🧱",
    },
    {
      id: 2,
      name: "건담 RX-93 뉴건담",
      minPrice: 42000,
      category: "피규어",
      condition: "최상",
      image: "🤖",
    },
    {
      id: 3,
      name: "바비 드림하우스",
      minPrice: 95000,
      category: "인형",
      condition: "최상",
      image: "🏠",
    },
    {
      id: 4,
      name: "타요 버스 세트",
      minPrice: 35000,
      category: "차량",
      condition: "보통",
      image: "🚌",
    },
  ];

  const chartBlocks = ["시세 그래프", "최근 거래 요약", "예측 분포"];

  const categories = ["인형", "피규어", "블록", "차량", "기타"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <BadgeDollarSign className="text-primary-600" size={28} />
          <h1 className="text-3xl font-bold">AI 가격 예측</h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-sm text-gray-600">카테고리</span>
          <div className="flex gap-2">
            {categories.map((c) => (
              <button
                key={c}
                className="px-3 py-1 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-primary-400 hover:text-primary-600"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[360px,1fr] gap-6">
          {/* Left column: cards + inputs */}
          <div className="space-y-5">
            {priceData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden"
              >
                <div className="grid grid-cols-[140px,1fr] gap-4 p-4 items-center">
                  <div className="aspect-[4/5] rounded-xl bg-gray-100 flex items-center justify-center text-4xl">
                    {item.image}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold leading-tight line-clamp-2">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                      <span className="px-2 py-1 rounded-full bg-gray-100">
                        {item.category}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-gray-100">
                        상태 {item.condition}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold text-primary-600">
                        ₩{item.minPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-400">예상가</span>
                    </div>
                    <div className="grid gap-2">
                      <input
                        type="text"
                        placeholder="상품명"
                        className="w-full h-9 px-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <input
                        type="text"
                        placeholder="세부 옵션"
                        className="w-full h-9 px-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column: chart-style blocks */}
          <div className="space-y-5">
            {chartBlocks.map((label) => (
              <div
                key={label}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6"
              >
                <div className="h-56 md:h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
