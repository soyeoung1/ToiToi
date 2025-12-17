/**
 * 날짜를 상대적 시간으로 포맷
 * @param dateString ISO 날짜 문자열
 * @returns 상대적 시간 문자열 (예: "5분 전", "3일 전")
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "방금 전";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays}일 전`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}개월 전`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}년 전`;
}

/**
 * 날짜를 포맷
 * @param dateString ISO 날짜 문자열
 * @returns 포맷된 날짜 문자열 (예: "2025.12.18")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

/**
 * 가격을 포맷
 * @param price 가격 숫자
 * @returns 포맷된 가격 문자열 (예: "₩50,000")
 */
export function formatPrice(price: number): string {
  return `₩${price.toLocaleString("ko-KR")}`;
}

/**
 * 카테고리 영문을 한글로 변환
 */
export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    doll: "인형",
    figure: "피규어",
    gundam: "건담/프라모델",
    lego: "레고/블록",
    car: "자동차",
    other: "기타",
  };
  return labels[category] || category;
}

/**
 * 상태 영문을 한글로 변환
 */
export function getConditionLabel(condition: string): string {
  const labels: Record<string, string> = {
    excellent: "최상",
    good: "양호",
    fair: "보통",
    poor: "나쁨",
  };
  return labels[condition] || condition;
}

/**
 * 거래 상태 영문을 한글로 변환
 */
export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    available: "판매중",
    reserved: "예약중",
    sold: "판매완료",
  };
  return labels[status] || status;
}

/**
 * 수리 상태 영문을 한글로 변환
 */
export function getRepairStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    pending: "대기중",
    quoted: "견적완료",
    accepted: "수락됨",
    "in-progress": "수리중",
    completed: "완료",
    cancelled: "취소됨",
  };
  return labels[status] || status;
}
