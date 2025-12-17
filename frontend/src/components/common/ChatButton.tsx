import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChatButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/chat")}
      className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all hover:scale-110 z-40"
      aria-label="채팅하기"
    >
      <MessageCircle size={24} />
    </button>
  );
}
