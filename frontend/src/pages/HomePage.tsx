import { Link } from "react-router-dom";
import { ArrowRight, Package, Wrench, TrendingUp } from "lucide-react";
import { items } from "../data/mockData";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">🧸 ToiToi</h1>
          <p className="text-2xl md:text-3xl mb-4">
            이 장난감으로 다시 한번, 새로운 기쁨을!
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            중고 장난감 거래부터 전문 수리 서비스까지
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/marketplace"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              중고거래 시작하기
            </Link>
            <Link
              to="/repair"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all"
            >
              수리 의뢰하기
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ToiToi의 특별한 서비스
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Package className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">중고 장난감 거래</h3>
              <p className="text-gray-600 mb-4">
                더 이상 사용하지 않는 장난감을 판매하고, 필요한 장난감을
                저렴하게 구매하세요.
              </p>
              <Link
                to="/marketplace"
                className="text-primary-600 font-medium flex items-center hover:underline"
              >
                거래 시작하기 <ArrowRight size={20} className="ml-1" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Wrench className="text-secondary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">전문 수리 서비스</h3>
              <p className="text-gray-600 mb-4">
                고장난 장난감을 전문가에게 맡겨 새것처럼 복원하세요.
              </p>
              <Link
                to="/repair"
                className="text-primary-600 font-medium flex items-center hover:underline"
              >
                수리 의뢰하기 <ArrowRight size={20} className="ml-1" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI 가격 예측</h3>
              <p className="text-gray-600 mb-4">
                AI 기반 가격 분석으로 합리적인 거래 가격을 확인하세요.
              </p>
              <Link
                to="/price"
                className="text-primary-600 font-medium flex items-center hover:underline"
              >
                가격 확인하기 <ArrowRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">인기 장난감</h2>
            <Link
              to="/marketplace"
              className="text-primary-600 font-medium hover:underline"
            >
              전체 보기
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                to={`/marketplace/${item.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="aspect-square bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-primary-600 font-bold">
                    ₩{item.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    상태: {item.condition}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 바로 시작하세요!
          </h2>
          <p className="text-xl mb-8">
            회원가입하고 ToiToi의 모든 서비스를 이용해보세요
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            무료 회원가입
          </Link>
        </div>
      </section>
    </div>
  );
}
