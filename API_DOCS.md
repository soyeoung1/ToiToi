# ToiToi API Documentation

## Base URL

```
Development: http://localhost:5000/api
Production: https://api.toitoi.com
```

## Authentication

대부분의 API는 JWT 토큰 인증이 필요합니다.

### Headers

```
Authorization: Bearer <your_jwt_token>
```

## API Endpoints

### 1. Authentication

#### POST /auth/signup

회원가입

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123",
  "nickname": "홍길동"
}
```

**Response:** `201 Created`

```json
{
  "message": "회원가입 성공",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "nickname": "홍길동",
    "joinDate": "2025-12-18T00:00:00.000Z"
  }
}
```

#### POST /auth/login

로그인

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:** `200 OK`

```json
{
  "message": "로그인 성공",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "nickname": "홍길동",
    "joinDate": "2025-12-18T00:00:00.000Z"
  }
}
```

---

### 2. Items (장난감)

#### GET /items

장난감 목록 조회

**Query Parameters:**

- `category` (optional): 카테고리 필터 (doll, figure, gundam, lego, car, other)
- `condition` (optional): 상태 필터 (excellent, good, fair, poor)
- `minPrice` (optional): 최소 가격
- `maxPrice` (optional): 최대 가격
- `search` (optional): 검색어
- `sort` (optional): 정렬 (-createdAt, price, -price)

**Response:** `200 OK`

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "레고 크리에이터 세트",
    "description": "거의 새것입니다",
    "price": 45000,
    "category": "lego",
    "condition": "excellent",
    "images": ["url1", "url2"],
    "seller": {
      "_id": "507f191e810c19729de860ea",
      "nickname": "판매자",
      "rating": 4.5
    },
    "status": "available",
    "views": 123,
    "likes": [],
    "createdAt": "2025-12-18T00:00:00.000Z"
  }
]
```

#### GET /items/:id

장난감 상세 조회

**Response:** `200 OK`

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "레고 크리에이터 세트",
  "description": "거의 새것입니다",
  "price": 45000,
  "category": "lego",
  "condition": "excellent",
  "images": ["url1", "url2"],
  "seller": {
    "_id": "507f191e810c19729de860ea",
    "nickname": "판매자",
    "rating": 4.5,
    "salesCount": 15
  },
  "status": "available",
  "views": 124,
  "likes": [],
  "createdAt": "2025-12-18T00:00:00.000Z"
}
```

#### POST /items

장난감 등록 (인증 필요)

**Request Body:**

```json
{
  "title": "레고 크리에이터 세트",
  "description": "거의 새것입니다",
  "price": 45000,
  "category": "lego",
  "condition": "excellent",
  "images": ["url1", "url2"]
}
```

**Response:** `201 Created`

#### PUT /items/:id

장난감 수정 (인증 필요, 본인만 가능)

**Request Body:**

```json
{
  "title": "수정된 제목",
  "price": 40000
}
```

**Response:** `200 OK`

#### DELETE /items/:id

장난감 삭제 (인증 필요, 본인만 가능)

**Response:** `200 OK`

---

### 3. Repairs (수리)

#### GET /repairs

내 수리 요청 목록 (인증 필요)

**Response:** `200 OK`

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "toyName": "건담 RX-78",
    "toyCategory": "gundam",
    "description": "팔이 부러짐",
    "images": ["url1"],
    "status": "pending",
    "user": "507f191e810c19729de860ea",
    "createdAt": "2025-12-18T00:00:00.000Z"
  }
]
```

#### POST /repairs

수리 요청 등록 (인증 필요)

**Request Body:**

```json
{
  "toyName": "건담 RX-78",
  "toyCategory": "gundam",
  "description": "팔이 부러짐",
  "images": ["url1"]
}
```

**Response:** `201 Created`

#### PUT /repairs/:id/status

수리 상태 업데이트 (인증 필요)

**Request Body:**

```json
{
  "status": "in-progress"
}
```

**Status values:** pending, quoted, accepted, in-progress, completed, cancelled

---

### 4. Users (사용자)

#### GET /users/:id

사용자 프로필 조회

**Response:** `200 OK`

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "nickname": "홍길동",
  "bio": "장난감 수집가입니다",
  "joinDate": "2025-12-18T00:00:00.000Z",
  "rating": 4.5,
  "salesCount": 10,
  "purchaseCount": 5
}
```

#### GET /users/me

현재 사용자 정보 (인증 필요)

#### PUT /users/me

프로필 수정 (인증 필요)

**Request Body:**

```json
{
  "nickname": "새닉네임",
  "bio": "수정된 소개"
}
```

---

### 5. Prices (가격)

#### GET /prices/predict

AI 가격 예측 (AI 모듈 연동)

**Query Parameters:**

- `toyName`: 장난감 이름
- `category`: 카테고리
- `condition`: 상태

**Response:** `200 OK`

```json
{
  "predictedPrice": 45000,
  "priceRange": {
    "min": 38250,
    "max": 51750
  },
  "trend": "up",
  "trendPercentage": 3.5,
  "confidence": 85
}
```

---

## Error Responses

### 400 Bad Request

```json
{
  "message": "잘못된 요청입니다",
  "errors": [
    {
      "field": "email",
      "message": "유효한 이메일을 입력하세요"
    }
  ]
}
```

### 401 Unauthorized

```json
{
  "message": "인증 토큰이 필요합니다"
}
```

### 403 Forbidden

```json
{
  "message": "권한이 없습니다"
}
```

### 404 Not Found

```json
{
  "message": "리소스를 찾을 수 없습니다"
}
```

### 500 Internal Server Error

```json
{
  "message": "서버 오류가 발생했습니다"
}
```

## Rate Limiting

- **개발 환경**: 제한 없음
- **프로덕션**: IP당 분당 100회 요청

## WebSocket Events (Socket.IO)

### Client → Server

#### join-chat

채팅방 참가

```javascript
socket.emit("join-chat", chatId);
```

#### send-message

메시지 전송

```javascript
socket.emit("send-message", {
  chatId: "chat123",
  message: "안녕하세요",
  senderId: "user123",
});
```

### Server → Client

#### receive-message

메시지 수신

```javascript
socket.on("receive-message", (data) => {
  console.log(data);
});
```

## 추가 정보

- 모든 날짜는 ISO 8601 형식
- 가격은 원화(KRW) 단위
- 이미지 URL은 절대 경로
