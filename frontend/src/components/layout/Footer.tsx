import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ToiToi</h3>
            <p className="text-gray-400 text-sm">
              이 장난감으로 다시 한번,
              <br />
              새로운 기쁨을!
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">서비스</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/marketplace" className="hover:text-white">
                  중고거래
                </Link>
              </li>
              <li>
                <Link to="/repair" className="hover:text-white">
                  수리서비스
                </Link>
              </li>
              <li>
                <Link to="/price" className="hover:text-white">
                  가격확인
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">고객지원</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  공지사항
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  고객센터
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">회사</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 ToiToi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
