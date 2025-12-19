# ToiToi — 중고 장난감 거래 & 수리 서비스 플랫폼

## 1. 프로젝트 개요

**ToiToi**는 중고 장난감 거래, 수리 전문가 매칭, AI 기반 추천 및 가격 예측 기능을 하나로 통합한 웹 플랫폼입니다.

> **"이 장난감에 다시 한 번 새로운 즐거움을!"**

장난감은 더 이상 아이들만의 물건이 아닙니다.  
인형, 건담 프라모델, 수집용 피규어까지 세대를 넘어 사랑받고 있습니다.

ToiToi는 사용자가 중고 장난감을 거래하고, 고장 나거나 손상된 장난감을 숙련된 수리 전문가에게 맡길 수 있도록 돕습니다.  
전문적인 복원을 통해 장난감은 다시 새 생명을 얻게 됩니다.

---

## 2. 개발 목표

### 핵심 목표

장난감을 중심으로 한 중고 거래와 수리 서비스를 통합 제공하는 플랫폼 구축

### 타겟 사용자

부모, 수집가, 추억이 담긴 장난감을 소유한 사용자 등 전 연령층

### 주요 목표

- 장난감 특화 중고 거래 플랫폼 및 최적화된 UI/UX 구현
- 손상된 장난감을 위한 수리 전문가 매칭 시스템 구축
- 사용자 관심사 및 연령대 기반 AI 추천 시스템 개발
- 거래 데이터를 활용한 AI 기반 가격 예측 기능 구현
- 인증, 채팅, 알림 기능을 포함한 안전한 거래 환경 조성

---

## 3. 기술 스택

| 구성 요소            | 기술                               | 역할                                      |
| -------------------- | ---------------------------------- | ----------------------------------------- |
| **프론트엔드**       | React.js, TypeScript, Tailwind CSS | SPA 기반 UI 구현 및 라우팅                |
| **백엔드**           | Node.js, Express                   | REST API 서버, 인증, DB 연동              |
| **데이터베이스**     | MongoDB                            | 사용자, 상품, 수리 요청, 가격 데이터 저장 |
| **AI 모듈**          | Flask, Python                      | 장난감 추천 및 가격 예측                  |
| **배포 & 개발 환경** | VS Code / GitHub Pages             | 로컬 개발 및 배포                         |

---

## 4. 기능별 개발 계획

### 프론트엔드 (React.js + TypeScript + Tailwind CSS)

| 기능             | 구현 내용                                            |
| ---------------- | ---------------------------------------------------- |
| **UI 구조**      | 메인, 마켓, 수리, 마이페이지 등 SPA 구조             |
| **라우팅**       | react-router-dom을 활용한 페이지 이동                |
| **API 통신**     | Axios를 이용한 로그인, 상품 등록·검색 등             |
| **상태 관리**    | Context API 또는 Zustand (인증, 알림, 거래 상태)     |
| **UI/UX 디자인** | Tailwind CSS 기반 반응형 레이아웃 및 재사용 컴포넌트 |
| **알림 & 채팅**  | Socket.IO-client를 활용한 실시간 기능                |
| **결제**         | QR 코드 생성 API 연동 및 결제 확인 UI                |

### 백엔드 (Node.js + Express)

| 기능                | 구현 내용                                   |
| ------------------- | ------------------------------------------- |
| **사용자 인증**     | JWT 기반 로그인·회원가입 (bcrypt 암호화)    |
| **상품 관리**       | 상품 등록, 검색, 필터링, 상태 변경 CRUD API |
| **수리 매칭**       | 수리 요청 → 전문가 견적 → 상태 업데이트     |
| **리뷰 시스템**     | 거래·수리 후 리뷰 및 평점 API               |
| **장난감 히스토리** | itemId 기준 거래·수리 이력 누적             |
| **알림 시스템**     | Socket.IO 기반 실시간 알림                  |
| **QR 결제**         | 외부 결제 API 연동 및 콜백 처리             |

### AI 모듈 (Flask + Python)

| 기능            | 구현 내용                                   |
| --------------- | ------------------------------------------- |
| **장난감 추천** | 사용자 관심사, 연령, 활동 이력 기반 추천    |
| **가격 예측**   | 거래 데이터를 활용한 가격 추세 분석 및 예측 |
| **연동 방식**   | Node.js 서버가 Flask API 호출 후 결과 전달  |

### 기타 시스템 & 개발 환경

| 항목             | 내용                                                   |
| ---------------- | ------------------------------------------------------ |
| **데이터베이스** | MongoDB Atlas (Users, Items, Repairs, Reviews, Prices) |
| **실시간 통신**  | Socket.IO (거래 및 수리 상태 실시간 업데이트)          |
| **개발 환경**    | VS Code, GitHub 버전 관리, Pages/Netlify 배포          |
| **보안**         | HTTPS, JWT 만료 정책, 입력값 검증(express-validator)   |

---

## 5. 기능 명세

### 핵심 기능

#### 중고 장난감 마켓

장난감 등록, 검색, 필터링, 거래 상태 관리

#### 수리 전문가 매칭

수리 요청, 전문가 추천, 수리 진행 상황 추적

#### AI 추천 시스템

관심사·연령대 기반 개인화 추천

#### 가격 예측

거래 데이터 기반 합리적인 가격 제안

#### 안전한 거래 환경

사용자 인증, 실시간 채팅, 알림 제공

### 추가 기능

- **리뷰 시스템**: 거래 및 수리 전문가 리뷰
- **장난감 히스토리**: 장난감별 거래·수리 이력 조회
- **고급 알림**: 거래 상태 및 수리 진행 알림
- **고도화된 추천**: 시즌·트렌드 기반 추천
- **QR 결제**: QR 코드 기반 간편 결제

---

## 6. 리스크 및 대응 방안

| 리스크           | 대응 방안                             |
| ---------------- | ------------------------------------- |
| 거래 실패        | 사용자 리뷰 시스템을 통한 신뢰도 강화 |
| 수리 전문가 부족 | 초기 전문가 풀 확보 및 홍보           |
| AI 정확도 문제   | 사용자 피드백을 통한 지속적 모델 개선 |

---

## 7. 기대 효과

- 중고 장난감 시장의 지속 가능한 순환 구조 형성
- AI 기반 개인화 추천으로 사용자 만족도 향상
- 전문 수리를 통한 장난감 재사용 및 가치 재창출

---

## 8. 프로토타입 개요

### 전체 사용자 흐름

#### (1) 메인 페이지

**구성 요소**

- **헤더**: 로고, 검색창, 로그인/회원가입, 메인 메뉴
  - 마우스 오버 시 드롭다운 메뉴
- **메인 배너 슬라이더**: 인기 상품 & 추천 수리 전문가
- **빠른 접근 버튼**
  - 중고 마켓
  - 수리 요청
- **플로팅 채팅 버튼**

**사용자 흐름**

- "중고 거래 시작" 클릭 → 마켓 페이지 이동
- "수리 요청" 클릭 → 수리 전문가 목록 표시
- "가격 확인" 클릭 → 장난감 가격 트렌드 조회

#### (2) 중고 마켓 페이지

**구성 요소**

- **장난감 카드**: 이미지, 제목, 가격, 상태
- **필터**: 카테고리, 가격대, 상태
- **검색창**
- **상세 페이지**: 설명, 판매자 정보, 채팅 버튼, 연관 상품

**사용자 흐름**

- 장난감 선택 → 상세 정보 확인
- 판매자와 채팅 시작
- 거래 완료 시 상태 "완료"로 변경

#### (3) 수리 요청 페이지

**구성 요소**

- **수리 전문가 목록**
- **전문가 상세 페이지**: 프로필, 리뷰, 예상 비용
- **수리 진행 페이지**: 접수 → 수리 중 → 완료

**사용자 흐름**

- 전문가 선택 후 수리 요청 제출
- 플랫폼이 적합한 전문가 추천
- 수리 진행 상황 실시간 확인

#### (4) 채팅 페이지

**구성 요소**

- **채팅창 및 대화 내역**
- **채팅 목록**: 등록된 장난감 & 수리 요청
- **연결된 거래·수리 게시물**

**사용자 흐름**

- 사용자 프로필 클릭 → 마이페이지 이동
- 게시물 클릭 → 상품 상세 페이지 이동

#### (5) 가격 예측 페이지

**구성 요소**

- **장난감 카드**: 이미지, 제목, 최소 예상가
- **필터**: 카테고리, 가격 범위
- **가격 추세 그래프**
- **검색창**

#### (6) 프로필 페이지

**구성 요소**

- **사용자 프로필**: 닉네임, 가입일, 자기소개, 리뷰, 판매 이력
- **마이페이지**: 등록한 장난감 & 수리 요청

**사용자 흐름**

- 거래 상태 관리
- 필요 시 수리 요청 취소

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
