import { BadgeDollarSign } from "lucide-react";

export default function PricePredictionPage() {
  const priceData = [
    {
      id: 1,
      name: "?àÍ≥† ?§Ì??åÏ¶à Î∞Ä?àÎãà???îÏΩò",
      minPrice: 180000,
      category: "Î∏îÎ°ù",
      condition: "?ëÌò∏",
      image: "?ß±",
      trend: [
        { label: "1Ï£???, value: 180 },
        { label: "6??, value: 182 },
        { label: "5??, value: 184 },
        { label: "4??, value: 188 },
        { label: "3??, value: 192 },
        { label: "2??, value: 195 },
        { label: "?§Îäò", value: 198 },
      ],
    },
    {
      id: 2,
      name: "Í±¥Îã¥ RX-93 ?¥Í±¥??,
      minPrice: 42000,
      category: "?ºÍ∑ú??,
      condition: "ÏµúÏÉÅ",
      image: "?§ñ",
      trend: [
        { label: "1Ï£???, value: 40 },
        { label: "6??, value: 41 },
        { label: "5??, value: 41 },
        { label: "4??, value: 42 },
        { label: "3??, value: 43 },
        { label: "2??, value: 44 },
        { label: "?§Îäò", value: 45 },
      ],
    },
    {
      id: 3,
      name: "Î∞îÎπÑ ?úÎ¶º?òÏö∞??,
      minPrice: 95000,
      category: "?∏Ìòï",
      condition: "ÏµúÏÉÅ",
      image: "?è†",
      trend: [
        { label: "1Ï£???, value: 90 },
        { label: "6??, value: 91 },
        { label: "5??, value: 92 },
        { label: "4??, value: 94 },
        { label: "3??, value: 95 },
        { label: "2??, value: 97 },
        { label: "?§Îäò", value: 99 },
      ],
    },
    {
      id: 4,
      name: "?Ä??Î≤ÑÏä§ ?∏Ìä∏",
      minPrice: 35000,
      category: "Ï∞®Îüâ",
      condition: "Î≥¥ÌÜµ",
      image: "?öå",
      trend: [
        { label: "1Ï£???, value: 32 },
        { label: "6??, value: 33 },
        { label: "5??, value: 34 },
        { label: "4??, value: 34 },
        { label: "3??, value: 35 },
        { label: "2??, value: 36 },
        { label: "?§Îäò", value: 37 },
      ],
    },
  ];

  const categories = ["?∏Ìòï", "?ºÍ∑ú??, "Î∏îÎ°ù", "Ï∞®Îüâ", "Í∏∞Ì?"];

  const recentDeals = [
    { title: "?àÍ≥† ?îÏΩò ÎØ∏Í∞úÎ¥?, price: 185000, diff: "+3.1%" },
    { title: "Í±¥Îã¥ ?¥Í±¥??Ï§ëÍ≥†", price: 41000, diff: "+1.5%" },
    { title: "Î∞îÎπÑ ?òÏö∞??AÍ∏?, price: 94000, diff: "-0.8%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <BadgeDollarSign className="text-primary-600" size={28} />
          <h1 className="text-3xl font-bold">AI Í∞ÄÍ≤??àÏ∏°</h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-sm text-gray-600">Ïπ¥ÌÖåÍ≥†Î¶¨</span>
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
                        ?ÅÌÉú {item.condition}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold text-primary-600">
                        ??item.minPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-400">?àÏÉÅÍ∞Ä</span>
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs text-gray-500">?∏Î? ?µÏÖò</label>
                      <select
                        className="w-full h-10 px-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          ?âÏÉÅ???†ÌÉù?òÏÑ∏??
                        </option>
                        <option value="red">?àÎìú</option>
                        <option value="blue">Î∏îÎ£®</option>
                        <option value="yellow">?êÎ°ú??/option>
                        <option value="green">Í∑∏Î¶∞</option>
                        <option value="black">Î∏îÎûô</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 px-4 pb-4 pt-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-800">
                      Í∞ÄÍ≤?Ï∂îÏù¥
                    </span>
                    <span className="text-xs text-gray-500">ÏµúÍ∑º 7??/span>
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
                            title={`${point.label} ¬∑ ${point.value}Îß???}
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
            <h3 className="font-semibold mb-3">ÏµúÍ∑º Í±∞Îûò ?îÏïΩ</h3>
            <div className="space-y-3">
              {recentDeals.map((deal) => (
                <div
                  key={deal.title}
                  className="flex items-center justify-between text-sm text-gray-700"
                >
                  <span className="truncate mr-2">{deal.title}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-primary-600">
                      ??deal.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">{deal.diff}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
            <h3 className="font-semibold mb-3">?àÏ∏° Î∂ÑÌè¨</h3>
            <div className="h-48 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500">
              ?àÏ∏° Î∂ÑÌè¨(Í≥?Ï∂îÍ?)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
