# ToiToi 개발 가이드

## 개발 환경 설정

### 1. 필수 도구 설치

#### Node.js & npm

- Node.js 18 이상 설치
- https://nodejs.org/

#### Python

- Python 3.10 이상 설치
- https://www.python.org/

#### MongoDB

로컬 개발:

- MongoDB Community Edition 설치
- https://www.mongodb.com/try/download/community

클라우드:

- MongoDB Atlas 무료 계정 생성
- https://www.mongodb.com/cloud/atlas

### 2. 프로젝트 설정

```bash
# 저장소 클론
git clone <repository-url>
cd toitoi

# 모든 의존성 설치
npm run install:all

# 환경 변수 설정
cd backend
copy .env.example .env
# .env 파일 수정

cd ../ai-module
copy .env.example .env
# .env 파일 수정
```

### 3. 개발 서버 실행

```bash
# 루트 디렉토리에서
npm run dev
```

개별 실행:

```bash
# Frontend
cd frontend && npm run dev

# Backend
cd backend && npm run dev

# AI Module
cd ai-module && python app.py
```

## 프로젝트 구조 상세

### Frontend (React + TypeScript)

```
frontend/src/
├── components/
│   ├── layout/          # 레이아웃 컴포넌트
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── common/          # 공통 컴포넌트
│       ├── ChatButton.tsx
│       └── ...
├── pages/               # 페이지 컴포넌트
│   ├── HomePage.tsx
│   ├── MarketplacePage.tsx
│   ├── ItemDetailPage.tsx
│   ├── RepairPage.tsx
│   ├── PricePredictionPage.tsx
│   ├── ChatPage.tsx
│   ├── ProfilePage.tsx
│   ├── LoginPage.tsx
│   └── SignupPage.tsx
├── store/               # 상태 관리
│   └── authStore.ts
├── services/            # API 호출 (TODO)
├── types/               # TypeScript 타입 (TODO)
├── utils/               # 유틸리티 함수 (TODO)
├── App.tsx
├── main.tsx
└── index.css
```

### Backend (Node.js + Express)

```
backend/src/
├── config/
│   └── database.ts      # MongoDB 연결
├── models/
│   ├── User.ts          # 사용자 모델
│   ├── Item.ts          # 장난감 모델
│   ├── Repair.ts        # 수리 모델
│   └── Review.ts        # 리뷰 모델
├── routes/
│   ├── authRoutes.ts    # 인증 라우트
│   ├── itemRoutes.ts    # 장난감 라우트
│   ├── repairRoutes.ts  # 수리 라우트
│   ├── chatRoutes.ts    # 채팅 라우트
│   ├── userRoutes.ts    # 사용자 라우트
│   └── priceRoutes.ts   # 가격 라우트
├── middleware/
│   ├── auth.ts          # JWT 인증 미들웨어
│   └── errorHandler.ts  # 에러 핸들러
└── server.ts            # 서버 진입점
```

### AI Module (Flask + Python)

```
ai-module/
├── services/
│   ├── recommendation.py     # 추천 알고리즘
│   └── price_prediction.py   # 가격 예측
├── models/                   # ML 모델 저장소 (TODO)
├── app.py                    # Flask 앱
└── requirements.txt
```

## 개발 워크플로우

### 1. 새 기능 개발

```bash
# 기능 브랜치 생성
git checkout -b feature/기능명

# 개발 진행
# ... 코드 작성 ...

# 테스트 (추후 추가)
npm test

# 커밋
git add .
git commit -m "feat: 기능 설명"

# 푸시
git push origin feature/기능명

# Pull Request 생성
```

### 2. 커밋 컨벤션

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 등 (기능 변경 없음)
refactor: 코드 리팩토링
test: 테스트 코드 추가
chore: 빌드 설정, 패키지 매니저 설정 등
```

예시:

```bash
git commit -m "feat: 장난감 검색 필터 기능 추가"
git commit -m "fix: 가격 예측 API 오류 수정"
git commit -m "docs: README에 설치 가이드 추가"
```

## 코딩 스타일 가이드

### TypeScript/JavaScript

```typescript
// 함수 명명: camelCase
function getUserById(id: string) {}

// 컴포넌트/클래스: PascalCase
class UserService {}
function HomePage() {}

// 상수: UPPER_SNAKE_CASE
const API_BASE_URL = "http://localhost:5000";

// 인터페이스/타입: PascalCase with 'I' prefix
interface IUser {
  id: string;
  name: string;
}
```

### Python

```python
# 함수/변수: snake_case
def get_user_by_id(user_id):
    pass

# 클래스: PascalCase
class UserService:
    pass

# 상수: UPPER_SNAKE_CASE
API_BASE_URL = 'http://localhost:5000'
```

## 데이터베이스 스키마

### User Collection

```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  nickname: String,
  bio: String,
  avatar: String,
  joinDate: Date,
  rating: Number (0-5),
  salesCount: Number,
  purchaseCount: Number
}
```

### Item Collection

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  price: Number,
  category: String (enum),
  condition: String (enum),
  images: [String],
  seller: ObjectId (ref: User),
  status: String (enum),
  views: Number,
  likes: [ObjectId] (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### Repair Collection

```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  expert: ObjectId (ref: User),
  toyName: String,
  toyCategory: String,
  description: String,
  images: [String],
  status: String (enum),
  quotedPrice: Number,
  finalPrice: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Review Collection

```javascript
{
  _id: ObjectId,
  reviewer: ObjectId (ref: User),
  reviewee: ObjectId (ref: User),
  item: ObjectId (ref: Item),
  repair: ObjectId (ref: Repair),
  rating: Number (1-5),
  comment: String,
  type: String (enum: 'trade' | 'repair'),
  createdAt: Date
}
```

## API 개발 가이드

### 새 API 엔드포인트 추가

1. **모델 정의** (필요시)

```typescript
// backend/src/models/NewModel.ts
import { Schema, model } from "mongoose";

const newSchema = new Schema({
  // 필드 정의
});

export default model("NewModel", newSchema);
```

2. **라우트 생성**

```typescript
// backend/src/routes/newRoutes.ts
import { Router } from "express";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/", async (req, res) => {
  // 로직 구현
});

export default router;
```

3. **서버에 라우트 등록**

```typescript
// backend/src/server.ts
import newRoutes from "./routes/newRoutes";

app.use("/api/new", newRoutes);
```

## 프론트엔드 개발 가이드

### 새 페이지 추가

1. **페이지 컴포넌트 생성**

```tsx
// frontend/src/pages/NewPage.tsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
}
```

2. **라우트 추가**

```tsx
// frontend/src/App.tsx
import NewPage from "./pages/NewPage";

<Route path="/new" element={<NewPage />} />;
```

### 상태 관리 (Zustand)

```typescript
// frontend/src/store/newStore.ts
import { create } from "zustand";

interface NewState {
  data: any[];
  setData: (data: any[]) => void;
}

export const useNewStore = create<NewState>((set) => ({
  data: [],
  setData: (data) => set({ data }),
}));
```

## AI 모듈 개발 가이드

### 새 AI 기능 추가

1. **서비스 함수 작성**

```python
# ai-module/services/new_service.py
def new_ai_function(data):
    # AI 로직 구현
    return result
```

2. **엔드포인트 추가**

```python
# ai-module/app.py
@app.route('/new-endpoint', methods=['POST'])
def new_endpoint():
    data = request.get_json()
    result = new_ai_function(data)
    return jsonify(result)
```

## 디버깅 팁

### Frontend

```bash
# React DevTools 브라우저 확장 설치
# Console에서 상태 확인
console.log(state)
```

### Backend

```typescript
// 로그 추가
console.log("Debug:", variable);

// 에러 핸들링
try {
  // 코드
} catch (error) {
  console.error("Error:", error);
}
```

### MongoDB

```bash
# MongoDB Compass GUI 도구 사용
# 또는 mongo shell
mongosh
use toitoi
db.users.find()
```

## 테스트 (추후 구현 예정)

### Frontend

```bash
npm test
```

### Backend

```bash
npm test
```

## 배포 준비

### 환경 변수 설정

- 프로덕션 환경 변수 설정
- MongoDB Atlas 연결 문자열
- JWT_SECRET 변경

### 빌드

```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm run build
```

## 트러블슈팅

### MongoDB 연결 오류

```
Error: connect ECONNREFUSED
```

해결: MongoDB 서버가 실행 중인지 확인

### CORS 오류

```
Access-Control-Allow-Origin error
```

해결: backend/.env의 CORS_ORIGIN 확인

### 포트 충돌

```
Error: Port 3000 is already in use
```

해결: 다른 프로세스 종료 또는 포트 변경

## 도움말

- [React 공식 문서](https://react.dev/)
- [Express 공식 문서](https://expressjs.com/)
- [MongoDB 공식 문서](https://www.mongodb.com/docs/)
- [Flask 공식 문서](https://flask.palletsprojects.com/)

## 문의

개발 관련 질문이나 이슈는 GitHub Issues에 등록해주세요.
