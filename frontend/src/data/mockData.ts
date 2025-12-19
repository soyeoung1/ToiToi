// 사용자 데이터
export const users = {
  user1: {
    id: "user1",
    name: "장난감마스터",
    rating: 4.8,
    location: "서울 강남구",
    joinDate: "2024.01",
    sales: 23,
    reviews: 18,
    avatar: "👨",
  },
  user2: {
    id: "user2",
    name: "토이셀러",
    rating: 4.9,
    location: "서울 송파구",
    joinDate: "2024.03",
    sales: 45,
    reviews: 38,
    avatar: "👩",
  },
  user3: {
    id: "user3",
    name: "건프라매니아",
    rating: 5.0,
    location: "서울 마포구",
    joinDate: "2023.11",
    sales: 67,
    reviews: 52,
    avatar: "🧑",
  },
  user4: {
    id: "user4",
    name: "레고수집가",
    rating: 4.7,
    location: "서울 서초구",
    joinDate: "2024.05",
    sales: 34,
    reviews: 29,
    avatar: "👴",
  },
  user5: {
    id: "user5",
    name: "인형애호가",
    rating: 4.6,
    location: "서울 노원구",
    joinDate: "2024.02",
    sales: 28,
    reviews: 24,
    avatar: "👧",
  },
};

// 상품 이미지 - toy 검색 결과로 각각 다른 이미지
const productImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop&q=80&auto=format", // 레고 세트
  2: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=400&fit=crop&q=80&auto=format", // 바비 인형
  3: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop&q=80&auto=format", // 건담 프라모델
  4: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80&auto=format", // 타요 버스
  5: "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=400&h=400&fit=crop&q=80&auto=format", // 포켓몬 피규어
  6: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&h=400&fit=crop&q=80&auto=format", // 실바니안 패밀리
  7: "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?w=400&h=400&fit=crop&q=80&auto=format", // 레고 테크닉
  8: "https://images.unsplash.com/photo-1580870069867-74c57ee60d19?w=400&h=400&fit=crop&q=80&auto=format", // 레고 호그와트
  9: "https://picsum.photos/seed/woody-toy/400/400", // 우디 인형
  10: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=400&fit=crop&q=80&auto=format", // 건담 자쿠
};

// 상품 데이터
export const items = [
  {
    id: 1,
    name: "레고 크리에이터 세트",
    price: 45000,
    condition: "양호",
    category: "lego",
    image: productImages[1],
    sellerId: "user1",
    location: "서울 강남구",
    postedAt: "3일 전",
    views: 142,
    likes: 28,
    description:
      "레고 크리에이터 세트입니다. 거의 사용하지 않아 상태가 매우 좋습니다. 박스와 설명서 모두 포함되어 있습니다. 직거래 또는 택배 모두 가능합니다.",
    status: "판매중",
  },
  {
    id: 2,
    name: "바비 인형 세트",
    price: 25000,
    condition: "최상",
    category: "doll",
    image: productImages[2],
    sellerId: "user2",
    location: "서울 송파구",
    postedAt: "1일 전",
    views: 89,
    likes: 15,
    description:
      "바비 인형 세트입니다. 옷과 액세서리 포함되어 있습니다. 아이가 잘 갖고 놀아서 상태 매우 좋습니다.",
    status: "판매중",
  },
  {
    id: 3,
    name: "건담 프라모델 RX-78",
    price: 35000,
    condition: "양호",
    category: "gundam",
    image: productImages[3],
    sellerId: "user3",
    location: "서울 마포구",
    postedAt: "5일 전",
    views: 234,
    likes: 42,
    description:
      "건담 RX-78 프라모델입니다. 조립 완료된 상태이며 상태 양호합니다. 관절 움직임 매끄럽고 도색도 깔끔하게 완료되었습니다.",
    status: "거래완료",
  },
  {
    id: 4,
    name: "타요 버스 장난감",
    price: 18000,
    condition: "보통",
    category: "car",
    image: productImages[4],
    sellerId: "user1",
    location: "서울 강남구",
    postedAt: "2일 전",
    views: 67,
    likes: 12,
    description: "타요 버스 장난감입니다. 사용감 있지만 작동은 정상입니다.",
    status: "판매중",
  },
  {
    id: 5,
    name: "포켓몬 피규어 세트",
    price: 30000,
    condition: "최상",
    category: "figure",
    image: productImages[5],
    sellerId: "user2",
    location: "서울 송파구",
    postedAt: "4일 전",
    views: 156,
    likes: 33,
    description:
      "포켓몬 피규어 세트입니다. 피카츄, 파이리, 이상해씨 등 인기 캐릭터 포함.",
    status: "판매중",
  },
  {
    id: 6,
    name: "실바니안 패밀리",
    price: 55000,
    condition: "양호",
    category: "doll",
    image: productImages[6],
    sellerId: "user5",
    location: "서울 노원구",
    postedAt: "1주일 전",
    views: 203,
    likes: 47,
    description:
      "실바니안 패밀리 세트입니다. 집과 가구, 인형 포함된 풀세트입니다.",
    status: "판매중",
  },
  {
    id: 7,
    name: "레고 테크닉 자동차",
    price: 65000,
    condition: "최상",
    category: "lego",
    image: productImages[7],
    sellerId: "user4",
    location: "서울 서초구",
    postedAt: "1주일 전",
    views: 178,
    likes: 35,
    description: "레고 테크닉 시리즈 자동차 모델입니다. 미개봉 새제품입니다.",
    status: "판매중",
  },
  {
    id: 8,
    name: "레고 해리포터 호그와트",
    price: 120000,
    condition: "양호",
    category: "lego",
    image: productImages[8],
    sellerId: "user4",
    location: "서울 서초구",
    postedAt: "2일 전",
    views: 312,
    likes: 89,
    description:
      "레고 해리포터 호그와트 성입니다. 완벽한 상태로 보관되었습니다.",
    status: "판매중",
  },
  {
    id: 9,
    name: "토이스토리 우디 인형",
    price: 32000,
    condition: "최상",
    category: "doll",
    image: productImages[9],
    sellerId: "user5",
    location: "서울 노원구",
    postedAt: "3일 전",
    views: 95,
    likes: 22,
    description:
      "토이스토리 우디 정품 인형입니다. 소리도 나고 상태 매우 좋습니다.",
    status: "판매중",
  },
  {
    id: 10,
    name: "건담 자쿠 프라모델",
    price: 28000,
    condition: "양호",
    category: "gundam",
    image: productImages[10],
    sellerId: "user3",
    location: "서울 마포구",
    postedAt: "6일 전",
    views: 187,
    likes: 38,
    description:
      "건담 자쿠 프라모델입니다. 조립 완료 상태이며 디테일 도색 완료.",
    status: "판매중",
  },
];

// 수리 요청 데이터
export const repairRequests = {
  user1: [
    {
      id: 1,
      toyName: "레고 세트 부품 누락",
      status: "대기중",
      date: "2024.12.15",
    },
    { id: 2, toyName: "건담 관절 수리", status: "진행중", date: "2024.12.10" },
  ],
  user2: [
    { id: 3, toyName: "인형 옷 수선", status: "완료", date: "2024.12.08" },
  ],
  user3: [
    { id: 4, toyName: "프라모델 도색", status: "진행중", date: "2024.12.12" },
    { id: 5, toyName: "건담 부품 교체", status: "완료", date: "2024.12.05" },
  ],
};

// 사용자별 찜한 상품
export const userLikes = {
  user1: [5, 6, 3, 2, 7],
  user2: [1, 3, 7, 8],
  user3: [1, 2, 5, 9],
  user4: [3, 5, 6, 10],
  user5: [1, 2, 4, 7],
};

// 헬퍼 함수들
export const getUserById = (userId: string) => {
  return users[userId as keyof typeof users];
};

export const getItemById = (itemId: number) => {
  return items.find((item) => item.id === itemId);
};

export const getItemsBySeller = (sellerId: string) => {
  return items.filter((item) => item.sellerId === sellerId);
};

export const getLikedItemsByUser = (userId: string) => {
  const likedIds = userLikes[userId as keyof typeof userLikes] || [];
  return items.filter((item) => likedIds.includes(item.id));
};

export const getRepairRequestsByUser = (userId: string) => {
  return repairRequests[userId as keyof typeof repairRequests] || [];
};
