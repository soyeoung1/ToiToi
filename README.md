# 🧸 ToiToi - 중고 장난감 거래 & 수리 서비스 플랫폼

> "이 장난감으로 다시 한번, 새로운 기쁨을!"

ToiToi는 중고 장난감 거래부터 전문 수리 서비스, AI 기반 추천 및 가격 예측까지 제공하는 통합 플랫폼입니다.

## 📋 목차

- [프로젝트 개요](#프로젝트-개요)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [설치 및 실행](#설치-및-실행)
- [환경 변수 설정](#환경-변수-설정)
- [API 문서](#api-문서)
- [개발 가이드](#개발-가이드)
- [라이선스](#라이선스)

## 🎯 프로젝트 개요

### 개발 목표

- 장난감 중심의 중고거래 및 수리 서비스 통합 플랫폼 제공
- AI 기반 개인화 추천 시스템 구현
- 안전한 거래 환경 구축 (인증, 채팅, 알림)

### 타겟 사용자

- 부모님들 (자녀의 장난감 구매 및 판매)
- 컬렉터 (피규어, 건담 등 수집가)
- 추억의 장난감을 소유한 모든 연령대

## ✨ 주요 기능

### 1. 중고 장난감 마켓

- 장난감 등록, 검색, 필터링
- 카테고리별 분류 (인형, 피규어, 건담, 레고 등)
- 상태별 거래 상태 관리

### 2. 수리 전문가 매칭

- 수리 요청서 작성
- 전문가 추천 및 견적 비교
- 수리 진행 상황 실시간 추적

### 3. AI 추천 시스템

- 사용자 관심사, 나이 기반 맞춤 추천
- 거래 이력 분석
- 시즌별, 트렌드 기반 추천

### 4. AI 가격 예측

- 거래 데이터 기반 적정 가격 제시
- 카테고리, 상태별 가격 분석
- 실시간 시세 트렌드

### 5. 안전한 거래 환경

- JWT 기반 사용자 인증
- Socket.IO 실시간 채팅
- 알림 시스템

## 🛠 기술 스택

### Frontend

- **React 18.2** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **React Router** - 라우팅
- **Zustand** - 상태 관리
- **Axios** - HTTP 클라이언트
- **Socket.IO Client** - 실시간 통신

### Backend

- **Node.js** - 런타임
- **Express** - 웹 프레임워크
- **TypeScript** - 타입 안정성
- **MongoDB & Mongoose** - 데이터베이스
- **JWT** - 인증
- **Socket.IO** - 실시간 통신
- **bcryptjs** - 비밀번호 암호화

### AI Module

- **Flask** - 웹 프레임워크
- **Python 3.10+** - 프로그래밍 언어
- **NumPy & Pandas** - 데이터 처리
- **Scikit-learn** - 머신러닝

## 📁 프로젝트 구조

```
toitoi/
├── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/      # 재사용 가능한 컴포넌트
│   │   │   ├── layout/     # 레이아웃 컴포넌트
│   │   │   └── common/     # 공통 컴포넌트
│   │   ├── pages/          # 페이지 컴포넌트
│   │   ├── store/          # Zustand 상태 관리
│   │   ├── App.tsx         # 앱 진입점
│   │   └── main.tsx        # React 진입점
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                  # Node.js Backend
│   ├── src/
│   │   ├── config/         # 설정 파일
│   │   ├── models/         # Mongoose 모델
│   │   ├── routes/         # API 라우트
│   │   ├── middleware/     # 미들웨어
│   │   └── server.ts       # 서버 진입점
│   ├── package.json
│   └── tsconfig.json
│
├── ai-module/                # Flask AI Module
│   ├── services/
│   │   ├── recommendation.py    # 추천 알고리즘
│   │   └── price_prediction.py  # 가격 예측
│   ├── app.py              # Flask 앱
│   └── requirements.txt
│
├── package.json              # 루트 package.json
└── README.md
```

## 🚀 설치 및 실행

### 사전 요구사항

- Node.js 18+
- Python 3.10+
- MongoDB (로컬 또는 MongoDB Atlas)
- Git

### 1. 저장소 클론

```bash
git clone <repository-url>
cd toitoi
```

### 2. 의존성 설치

```bash
# 루트에서 모든 패키지 설치
npm install

# 각 모듈 개별 설치
cd frontend && npm install
cd ../backend && npm install
cd ../ai-module && pip install -r requirements.txt
```

### 3. 환경 변수 설정

각 모듈의 `.env.example` 파일을 `.env`로 복사하고 설정:

```bash
# Backend
cd backend
copy .env.example .env

# AI Module
cd ../ai-module
copy .env.example .env
```

### 4. 실행

#### 개발 모드 (모든 서비스 동시 실행)

```bash
npm run dev
```

#### 개별 실행

```bash
# Frontend (포트 3000)
npm run dev:frontend

# Backend (포트 5000)
npm run dev:backend

# AI Module (포트 8000)
npm run dev:ai
```

### 5. 접속

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **AI Module**: http://localhost:8000

## ⚙️ 환경 변수 설정

### Backend (.env)

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/toitoi
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
AI_SERVICE_URL=http://localhost:8000
CORS_ORIGIN=http://localhost:3000
```

### AI Module (.env)

```env
FLASK_ENV=development
FLASK_PORT=8000
CORS_ORIGINS=http://localhost:3000,http://localhost:5000
```

## 📚 API 문서

### 인증 (Auth)

#### 회원가입

```http
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "nickname": "사용자"
}
```

#### 로그인

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### 장난감 (Items)

#### 전체 조회

```http
GET /api/items?category=lego&condition=good&minPrice=10000&maxPrice=50000
```

#### 상세 조회

```http
GET /api/items/:id
```

#### 등록 (인증 필요)

```http
POST /api/items
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "레고 세트",
  "description": "설명",
  "price": 50000,
  "category": "lego",
  "condition": "good"
}
```

### 수리 (Repairs)

#### 수리 요청 (인증 필요)

```http
POST /api/repairs
Authorization: Bearer <token>
Content-Type: application/json

{
  "toyName": "건담 RX-78",
  "toyCategory": "gundam",
  "description": "팔이 부러짐"
}
```

### AI 서비스

#### 추천

```http
POST http://localhost:8000/recommend
Content-Type: application/json

{
  "userId": "user123",
  "age": 10,
  "interests": ["lego", "building"],
  "history": ["lego"]
}
```

#### 가격 예측

```http
POST http://localhost:8000/predict-price
Content-Type: application/json

{
  "toyName": "레고 스타워즈",
  "category": "lego",
  "condition": "good",
  "originalPrice": 100000
}
```

## 💻 개발 가이드

### 코드 스타일

- **Frontend**: ESLint + Prettier
- **Backend**: ESLint + TypeScript strict mode
- **AI Module**: PEP 8

### Git 워크플로우

```bash
# 기능 브랜치 생성
git checkout -b feature/기능명

# 커밋
git commit -m "feat: 기능 추가"

# 푸시
git push origin feature/기능명
```

### 커밋 메시지 규칙

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가
- `chore`: 빌드 설정 등

## 🔧 빌드 및 배포

### 프로덕션 빌드

```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm run build
```

### 배포 옵션

- **Frontend**: Netlify, Vercel, GitHub Pages
- **Backend**: Heroku, AWS EC2, DigitalOcean
- **Database**: MongoDB Atlas
- **AI Module**: AWS Lambda, Google Cloud Functions

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

MIT License - 자세한 내용은 LICENSE 파일 참조

## 👥 팀

ToiToi Team

## 📧 문의

프로젝트 관련 문의: [이메일 주소]

---

⭐️ **ToiToi**와 함께 장난감에 새로운 생명을 불어넣으세요!
