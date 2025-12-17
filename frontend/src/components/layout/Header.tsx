import { Link } from "react-router-dom";
import { Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../../store/authStore";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuthStore();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-600">🧸</div>
            <span className="text-2xl font-bold text-gray-800">ToiToi</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="장난감을 검색해보세요..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <Link
                to="/marketplace"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                중고거래
              </Link>
            </div>
            <div className="relative group">
              <Link
                to="/repair"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                수리서비스
              </Link>
            </div>
            <Link
              to="/price"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              가격확인
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/chat"
                  className="text-gray-700 hover:text-primary-600"
                >
                  💬
                </Link>
                <Link to="/profile" className="flex items-center space-x-2">
                  <User size={20} className="text-gray-700" />
                  <span className="text-gray-700">{user?.nickname}</span>
                </Link>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                로그인
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/marketplace"
                className="text-gray-700 hover:text-primary-600"
              >
                중고거래
              </Link>
              <Link
                to="/repair"
                className="text-gray-700 hover:text-primary-600"
              >
                수리서비스
              </Link>
              <Link
                to="/price"
                className="text-gray-700 hover:text-primary-600"
              >
                가격확인
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    to="/chat"
                    className="text-gray-700 hover:text-primary-600"
                  >
                    채팅
                  </Link>
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:text-primary-600"
                  >
                    프로필
                  </Link>
                </>
              ) : (
                <Link to="/login" className="text-primary-600 font-medium">
                  로그인
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
