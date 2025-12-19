import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function RepairPage() {
  const experts = [
    {
      id: 1,
      name: "김수리 장인",
      specialty: "인형 수선 전문",
      rating: 4.9,
      reviews: 234,
      location: "서울 강남구",
      avgPrice: "15,000원",
      image: "👨‍🔧",
    },
    {
      id: 2,
      name: "박복원 전문가",
      specialty: "건담/프라모델",
      rating: 4.8,
      reviews: 189,
      location: "서울 송파구",
      avgPrice: "20,000원",
      image: "👩‍🔧",
    },
    {
      id: 3,
      name: "이재생 기술자",
      specialty: "레고/블록 조립",
      rating: 4.7,
      reviews: 156,
      location: "경기 성남시",
      avgPrice: "12,000원",
      image: "👨‍🔧",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">장난감 수리 서비스</h1>
          <p className="text-gray-600">고장난 장난감을 전문가에게 맡겨보세요</p>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">이용 방법</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-semibold mb-2">1. 수리 요청</h3>
              <p className="text-sm text-gray-600">
                장난감 사진과 함께 수리 요청서를 작성합니다
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2">2. 견적 확인</h3>
              <p className="text-sm text-gray-600">
                전문가의 견적을 확인하고 선택합니다
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold mb-2">3. 수리 완료</h3>
              <p className="text-sm text-gray-600">
                수리가 완료되면 새것처럼 돌려받습니다
              </p>
            </div>
          </div>
        </div>

        {/* Experts List */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">추천 수리 전문가</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert) => (
              <div
                key={expert.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-6xl">{expert.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{expert.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {expert.specialty}
                      </p>
                      <div className="flex items-center gap-1 text-sm">
                        <Star
                          className="text-yellow-400 fill-yellow-400"
                          size={16}
                        />
                        <span className="font-semibold">{expert.rating}</span>
                        <span className="text-gray-500">
                          ({expert.reviews})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      {expert.location}
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">평균 수리비: </span>
                      <span className="font-semibold text-primary-600">
                        {expert.avgPrice}
                      </span>
                    </div>
                  </div>

                  <Link to="/repair/request" className="w-full inline-flex justify-center py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    수리 요청하기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request Form CTA */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            원하는 전문가가 없으신가요?
          </h2>
          <p className="mb-6">
            수리 요청서를 작성하시면 적합한 전문가를 추천해드립니다
          </p>
          <Link to="/repair/request" className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            수리 요청서 작성하기
          </Link>
        </div>
      </div>
    </div>
  );
}
