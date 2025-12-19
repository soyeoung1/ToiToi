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
      trend: [
        { label: "1주 전", value: 180 },
        { label: "6일", value: 182 },
        { label: "5일", value: 184 },
        { label: "4일", value: 188 },
        { label: "3일", value: 192 },
        { label: "2일", value: 195 },
        { label: "오늘", value: 198 },
      ],
    },
    {
      id: 2,
      name: "건담 RX-93 뉴건담",
      minPrice: 42000,
      category: "피규어",
      condition: "최상",
      image: "🤖",
      trend: [
        { label: "1주 전", value: 40 },
        { label: "6일", value: 41 },
        { label: "5일", value: 41 },
        { label: "4일", value: 42 },
        { label: "3일", value: 43 },
        { label: "2일", value: 44 },
        { label: "오늘", value: 45 },
      ],
    },
    {
      id: 3,
      name: "바비 드림하우스",
      minPrice: 95000,
      category: "인형",
      condition: "최상",
      image: "🏠",
      trend: [
        { label: "1주 전", value: 90 },
        { label: "6일", value: 91 },
        { label: "5일", value: 92 },
        { label: "4일", value: 94 },
        { label: "3일", value: 95 },
        { label: "2일", value: 97 },
        { label: "오늘", value: 99 },
      ],
    },
    {
      id: 4,
      name: "타요 버스 세트",
      minPrice: 35000,
      category: "차량",
      condition: "보통",
      image: "🚌",
      trend: [
        { label: "1주 전", value: 32 },
        { label: "6일", value: 33 },
        { label: "5일", value: 34 },
        { label: "4일", value: 34 },
        { label: "3일", value: 35 },
        { label: "2일", value: 36 },
        { label: "오늘", value: 37 },
      ],
    },
  ];

  const categories = ["인형", "피규어", "블록", "차량", "기타"];

  const recentDeals = [
    { title: "레고 팔콘 미개봉", price: 185000, diff: "+3.1%" },
    { title: "건담 뉴건담 중고", price: 41000, diff: "+1.5%" },
    { title: "바비 하우스 A급", price: 94000, diff: "-0.8%" },
  ];

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

        <div className="grid gap-6 lg:grid-cols-2">
          {priceData.map((item) => {
            const maxValue = Math.max(
              ...item.trend.map((point) => point.value)
            );

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden flex flex-col"
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
                      <label className="text-xs text-gray-500">세부 옵션</label>
                      <select
                        className="w-full h-10 px-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          색상을 선택하세요
                        </option>
                        <option value="red">레드</option>
                        <option value="blue">블루</option>
                        <option value="yellow">옐로우</option>
                        <option value="green">그린</option>
                        <option value="black">블랙</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 px-4 pb-4 pt-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-800">
                      가격 추이
                    </span>
                    <span className="text-xs text-gray-500">최근 7일</span>
                  </div>
                  <div className="h-44 flex items-end gap-3">
                    {item.trend.map((point) => {
                      const height = (point.value / maxValue) * 100;
                      return (
                        <div
                          key={point.label}
                          className="flex flex-col items-center gap-2 text-xs text-gray-500"
                        >
                          <div
                            className="w-10 rounded-lg bg-gradient-to-t from-primary-200 to-primary-500"
                            style={{ height: `${height}%` }}
                            title={`${point.label} · ${point.value}만 원`}
                          />
                          <span>{point.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-8">
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
            <h3 className="font-semibold mb-3">최근 거래 요약</h3>
            <div className="space-y-3">
              {recentDeals.map((deal) => (
                <div
                  key={deal.title}
                  className="flex items-center justify-between text-sm text-gray-700"
                >
                  <span className="truncate mr-2">{deal.title}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-primary-600">
                      ₩{deal.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">{deal.diff}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
            <h3 className="font-semibold mb-3">예측 분포</h3>
            <div className="h-48 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500">
              예측 분포(곧 추가)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
