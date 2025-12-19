import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Image, Smile, MoreVertical } from "lucide-react";
import { items, getUserById } from "../data/mockData";

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  // 샘플 데이터 - 첫 번째 아이템 사용
  const chatItem = items[0];
  const chatItemSeller = getUserById(chatItem.sellerId);

  const chatList = [
    {
      id: 1,
      user: getUserById("user1").name,
      lastMessage: "네, 거래 가능합니다!",
      time: "오후 3:24",
      unread: 2,
      avatar: getUserById("user1").avatar,
    },
    {
      id: 2,
      user: getUserById("user2").name,
      lastMessage: "안녕하세요",
      time: "오전 11:15",
      unread: 0,
      avatar: getUserById("user2").avatar,
    },
    {
      id: 3,
      user: getUserById("user3").name,
      lastMessage: "감사합니다~",
      time: "어제",
      unread: 0,
      avatar: getUserById("user3").avatar,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "other",
      text: "안녕하세요! 레고 크리에이터 세트 구매하고 싶습니다.",
      time: "오후 3:20",
    },
    {
      id: 2,
      sender: "me",
      text: "네, 환영합니다! 상태는 매우 좋습니다.",
      time: "오후 3:21",
    },
    {
      id: 3,
      sender: "other",
      text: "가격 조정 가능한가요?",
      time: "오후 3:22",
    },
    {
      id: 4,
      sender: "me",
      text: "네, 거래 가능합니다!",
      time: "오후 3:24",
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("메시지 전송:", message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 채팅 목록 */}
          <div className="lg:col-span-4 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold">채팅 목록</h2>
            </div>
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 300px)" }}
            >
              {chatList.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition ${
                    selectedChat === chat.id ? "bg-primary-50" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{chat.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold truncate">{chat.user}</h3>
                        <span className="text-xs text-gray-500 ml-2">
                          {chat.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {chat.lastMessage}
                      </p>
                    </div>
                    {chat.unread > 0 && (
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 채팅방 */}
          <div
            className="lg:col-span-8 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            style={{ height: "calc(100vh - 200px)" }}
          >
            {/* 상대방 판매글 */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">
                채팅 중인 상대방 판매글
              </h3>
              <Link
                to={`/marketplace/${chatItem.id}`}
                className="flex items-center gap-3 hover:bg-white p-3 rounded-lg transition"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={chatItem.image}
                    alt={chatItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1 truncate">
                    {chatItem.name}
                  </h4>
                  <p className="text-primary-600 font-bold">
                    ₩{chatItem.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            </div>

            {/* 채팅 헤더 */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xl">{chatItemSeller.avatar}</span>
                </div>
                <div>
                  <h3 className="font-semibold">{chatItemSeller.name}</h3>
                  <p className="text-xs text-gray-500">온라인</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* 메시지 영역 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] ${
                      msg.sender === "me" ? "order-2" : "order-1"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        msg.sender === "me"
                          ? "bg-primary-600 text-white"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-1">
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 메시지 입력 */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Image size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Smile size={20} className="text-gray-600" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
