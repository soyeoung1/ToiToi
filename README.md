# 🧸 ToiToi — 중고 장난감 거래 & 수리 서비스 플랫폼

> **"이 장난감으로 다시 한번, 새로운 기쁨을!"**

## 📋 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [개발 목표](#2-개발-목표)
3. [기술 스택](#3-기술-스택)
4. [프로젝트 구조](#4-프로젝트-구조)
5. [기능 명세](#5-기능-명세)
6. [프로토타입 & 코드 구현](#6-프로토타입--코드-구현)
7. [설치 및 실행](#7-설치-및-실행)
8. [배포](#8-배포)

---

## 1. 프로젝트 개요

**ToiToi**는 중고 장난감 거래, 수리 전문가 매칭, AI 기반 가격 예측 기능을 하나로 통합한 웹 플랫폼입니다.

장난감은 더 이상 아이들만의 물건이 아닙니다.  
인형, 건담 프라모델, 수집용 피규어까지 세대를 넘어 사랑받고 있습니다.

ToiToi는 사용자가 중고 장난감을 거래하고, 고장 나거나 손상된 장난감을 숙련된 수리 전문가에게 맡길 수 있도록 돕습니다.

---

## 2. 개발 목표

### 핵심 목표

장난감을 중심으로 한 중고 거래와 수리 서비스를 통합 제공하는 플랫폼 구축

### 타겟 사용자

부모, 수집가, 추억이 담긴 장난감을 소유한 사용자 등 전 연령층

### 주요 목표

- ✅ 장난감 특화 중고 거래 플랫폼 및 최적화된 UI/UX 구현
- ✅ 손상된 장난감을 위한 수리 요청 시스템 구축
- ✅ AI 기반 가격 예측 기능 구현
- ✅ 실시간 채팅 기능을 통한 안전한 거래 환경 조성
- ⬜ 사용자 관심사 기반 AI 추천 시스템 (예정)

---

## 3. 기술 스택

### 현재 구현된 기술 스택

| 구성 요소      | 기술                       | 역할                       |
| -------------- | -------------------------- | -------------------------- |
| **프론트엔드** | React 18, TypeScript, Vite | SPA 기반 UI 구현           |
| **스타일링**   | Tailwind CSS               | 반응형 UI 디자인           |
| **라우팅**     | React Router v6            | 클라이언트 사이드 라우팅   |
| **상태관리**   | Zustand + localStorage     | 인증 상태 및 데이터 영속화 |
| **아이콘**     | Lucide React               | UI 아이콘                  |
| **HTTP**       | Axios                      | API 통신 (준비됨)          |
| **실시간**     | Socket.IO Client           | 채팅 기능 (준비됨)         |
| **배포**       | GitHub Pages               | 정적 사이트 호스팅         |

### 의존성 목록

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.0",
    "axios": "^1.6.2",
    "socket.io-client": "^4.5.4",
    "zustand": "^4.4.7",
    "lucide-react": "^0.300.0",
    "date-fns": "^3.0.6"
  }
}
```

---

## 4. 프로젝트 구조

```
ToiToi/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx      # 헤더 (검색, 네비게이션)
│   │   │   │   ├── Footer.tsx      # 푸터
│   │   │   │   └── Layout.tsx      # 레이아웃 래퍼
│   │   │   └── common/             # 공통 컴포넌트
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.tsx        # 메인 페이지
│   │   │   ├── MarketplacePage.tsx # 중고 마켓
│   │   │   ├── ItemDetailPage.tsx  # 상품 상세
│   │   │   ├── RepairPage.tsx      # 수리 서비스
│   │   │   ├── RepairRequestPage.tsx # 수리 요청
│   │   │   ├── PricePredictionPage.tsx # AI 가격 예측
│   │   │   ├── ChatPage.tsx        # 채팅
│   │   │   ├── ProfilePage.tsx     # 프로필/마이페이지
│   │   │   ├── LoginPage.tsx       # 로그인
│   │   │   └── SignupPage.tsx      # 회원가입
│   │   │
│   │   ├── data/
│   │   │   └── mockData.ts         # 목업 데이터
│   │   │
│   │   ├── store/
│   │   │   └── authStore.ts        # Zustand 인증 스토어
│   │   │
│   │   ├── types/
│   │   │   └── index.ts            # TypeScript 타입 정의
│   │   │
│   │   ├── App.tsx                 # 라우터 설정
│   │   ├── main.tsx                # 엔트리 포인트
│   │   └── index.css               # 글로벌 스타일
│   │
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── docs/                           # GitHub Pages 배포 폴더
└── README.md
```

---

## 5. 기능 명세

### ✅ 구현 완료

| 기능             | 설명                                        | 파일                              |
| ---------------- | ------------------------------------------- | --------------------------------- |
| **메인 페이지**  | 히어로 섹션, 서비스 소개, 인기 상품         | `HomePage.tsx`                    |
| **중고 마켓**    | 상품 목록, 검색, 필터링(카테고리/가격/상태) | `MarketplacePage.tsx`             |
| **상품 상세**    | 상품 정보, 판매자 정보, 채팅 연결           | `ItemDetailPage.tsx`              |
| **수리 서비스**  | 수리 전문가 목록, 서비스 소개               | `RepairPage.tsx`                  |
| **수리 요청**    | 사진 업로드, 증상 설명 폼                   | `RepairRequestPage.tsx`           |
| **AI 가격 예측** | 카테고리별 예측가, 추세 그래프              | `PricePredictionPage.tsx`         |
| **채팅**         | 실시간 메시지, localStorage 영속화          | `ChatPage.tsx`                    |
| **프로필**       | 사용자 정보, 판매 상품, 수리 요청           | `ProfilePage.tsx`                 |
| **인증**         | 로그인/회원가입, Zustand 상태관리           | `LoginPage.tsx`, `SignupPage.tsx` |
| **검색**         | 헤더 검색 → 마켓 필터 연동                  | `Header.tsx`                      |

### ⬜ 개발 예정

| 기능         | 설명                       |
| ------------ | -------------------------- |
| 백엔드 API   | Node.js + Express REST API |
| 데이터베이스 | MongoDB 연동               |
| AI 추천      | 사용자 맞춤 상품 추천      |
| 실시간 알림  | Socket.IO 알림 시스템      |
| QR 결제      | 간편 결제 시스템           |

---

## 6. 프로토타입 & 코드 구현

### (1) 라우팅 구조

```tsx
// App.tsx - 전체 라우트 구조
<Router basename="/ToiToi">
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="marketplace" element={<MarketplacePage />} />
      <Route path="marketplace/:id" element={<ItemDetailPage />} />
      <Route path="repair" element={<RepairPage />} />
      <Route path="repair/request" element={<RepairRequestPage />} />
      <Route path="price" element={<PricePredictionPage />} />
      <Route path="chat" element={<ChatPage />} />
      <Route path="profile/:userId" element={<ProfilePage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
  </Routes>
</Router>
```

### (2) 상태관리 (Zustand)

```tsx
// store/authStore.ts - 인증 상태 관리
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: (user, token) => set({ user, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
    }),
    { name: "auth-storage" }
  )
);
```

### (3) 데이터 타입 정의

```tsx
// types/index.ts - 주요 타입 정의
interface Item {
  id: number;
  name: string;
  price: number;
  condition: "최상" | "양호" | "보통";
  category: "doll" | "figure" | "gundam" | "lego" | "car";
  image: string;
  sellerId: string;
  status: "판매중" | "예약중" | "거래완료";
}

interface Repair {
  id: number;
  toyName: string;
  status: "대기중" | "진행중" | "완료";
  date: string;
}
```

### (4) 검색 기능 흐름

```tsx
// Header.tsx - 검색 후 마켓으로 이동
const [query, setQuery] = useState("");
const navigate = useNavigate();

const handleSearch = () => {
  navigate(`/marketplace?q=${encodeURIComponent(query)}`);
};

// MarketplacePage.tsx - URL 쿼리로 필터링
const [searchParams] = useSearchParams();
const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

const filteredItems = items.filter((item) =>
  item.name.toLowerCase().includes(searchQuery.toLowerCase())
);
```

### (5) 채팅 기능 흐름

```tsx
// ChatPage.tsx - localStorage 기반 채팅
interface Chat {
  id: string;
  itemId: number;
  userId: string;
  messages: Message[];
}

// 새 채팅방 생성 (상품 상세에서 진입 시)
useEffect(() => {
  const itemId = searchParams.get("itemId");
  if (itemId) {
    const existingChat = chats.find((c) => c.itemId === Number(itemId));
    if (!existingChat) {
      const newChat = { id: Date.now().toString(), itemId, messages: [] };
      setChats([...chats, newChat]);
      localStorage.setItem("toi_chats", JSON.stringify([...chats, newChat]));
    }
  }
}, []);

// 메시지 전송
const handleSend = (content: string) => {
  const newMessage = {
    id: Date.now(),
    content,
    sender: "me",
    time: new Date(),
  };
  const updated = [...currentChat.messages, newMessage];
  // localStorage 업데이트
};
```

### (6) 페이지별 사용자 흐름

#### 메인 페이지 → 마켓

```
[메인] "중고거래 시작하기" 클릭
  → navigate("/marketplace")
  → [마켓] 상품 목록 표시
```

#### 마켓 → 상품 상세 → 채팅

```
[마켓] 상품 카드 클릭
  → navigate("/marketplace/:id")
  → [상세] "채팅하기" 클릭
  → navigate("/chat?itemId=:id")
  → [채팅] 새 채팅방 생성 & 메시지 전송
```

#### 수리 요청 흐름

```
[수리] "수리 요청하기" 클릭
  → navigate("/repair/request")
  → [요청폼] 사진 업로드 + 증상 입력
  → 제출 → navigate(-1) (이전 페이지로)
```

---

## 7. 설치 및 실행

### 사전 요구사항

- Node.js 18+
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/soyeoung1/ToiToi.git
cd ToiToi

# 의존성 설치
cd frontend
npm install
```

### 개발 서버 실행

```bash
npm run dev
# http://localhost:5173 에서 확인
```

### 프로덕션 빌드

```bash
npm run build
# dist/ 폴더에 빌드 결과물 생성
```

---

## 8. 배포

### GitHub Pages 배포

현재 `main` 브랜치의 `/docs` 폴더로 자동 배포됩니다.

**배포 URL:** https://soyeoung1.github.io/ToiToi

### 배포 방법

```bash
# 1. 빌드
cd frontend
npm run build

# 2. docs 폴더로 복사
cd ..
Remove-Item -Recurse -Force docs
Copy-Item -Recurse frontend/dist docs

# 3. 커밋 & 푸시
git add -A
git commit -m "deploy: update site"
git push
```
