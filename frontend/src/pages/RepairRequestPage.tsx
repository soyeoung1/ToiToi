import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RepairRequestPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [address, setAddress] = useState("");
  const [estimate, setEstimate] = useState<number | "">("");
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    title.trim() && body.trim() && address.trim() && estimate !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    // Mock submit: store to localStorage for demo
    const payload = {
      title,
      body,
      address,
      estimate: Number(estimate),
      createdAt: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(
        localStorage.getItem("toi_repair_requests") || "[]"
      );
      localStorage.setItem(
        "toi_repair_requests",
        JSON.stringify([payload, ...prev])
      );
    } catch {}
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-8 text-center">
            <h1 className="text-2xl font-bold mb-3">
              수리 요청이 접수되었습니다
            </h1>
            <p className="text-gray-600 mb-6">
              전문가가 검토 후 견적을 안내드릴게요.
            </p>
            <Link
              to="/repair"
              className="inline-block px-6 py-3 rounded-full bg-primary-600 text-white hover:bg-primary-700"
            >
              확인
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">수리 요청서</h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              제목
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="예: 레고 부품 분실로 조립 불가"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              본문
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="수리가 필요한 내용과 상태를 자세히 적어주세요. 예: 오른팔 관절이 헐거워서 고정이 안 됩니다."
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              주소
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="예: 서울시 강남구 테헤란로 123"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              예상결제 금액
            </label>
            <div className="relative">
              <input
                type="number"
                min={0}
                value={estimate}
                onChange={(e) =>
                  setEstimate(
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
                placeholder="예: 20000"
                className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                원
              </span>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              참고용으로 입력해 주세요. 실제 결제 금액은 견적 확정 후 달라질 수
              있습니다.
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-5 py-3 rounded-lg border border-gray-200 hover:bg-gray-50"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className={`px-6 py-3 rounded-lg text-white ${
                isValid
                  ? "bg-primary-600 hover:bg-primary-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
