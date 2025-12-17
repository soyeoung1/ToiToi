# 빠른 시작 가이드

ToiToi 프로젝트를 빠르게 시작하는 방법입니다.

## 1단계: 의존성 설치

```bash
# 루트 디렉토리에서
npm install

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

# AI Module
cd ../ai-module
pip install -r requirements.txt
```

## 2단계: 환경 변수 설정

### Backend

```bash
cd backend
copy .env.example .env
```

`.env` 파일 수정:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/toitoi
JWT_SECRET=your-secret-key-here
```

### Frontend

```bash
cd frontend
copy .env.example .env
```

### AI Module

```bash
cd ai-module
copy .env.example .env
```

## 3단계: MongoDB 실행

### 로컬 MongoDB

```bash
mongod
```

### MongoDB Atlas (클라우드)

1. https://www.mongodb.com/cloud/atlas 가입
2. 무료 클러스터 생성
3. 연결 문자열 복사
4. backend/.env의 MONGODB_URI에 붙여넣기

## 4단계: 개발 서버 실행

### 방법 1: 모든 서비스 동시 실행

```bash
# 루트 디렉토리에서
npm run dev
```

### 방법 2: 개별 실행

```bash
# Terminal 1: Frontend
cd frontend
npm run dev

# Terminal 2: Backend
cd backend
npm run dev

# Terminal 3: AI Module
cd ai-module
python app.py
```

## 5단계: 브라우저에서 확인

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- AI Module: http://localhost:8000

## 테스트 계정 생성

1. http://localhost:3000/signup 접속
2. 회원가입
3. 로그인하여 서비스 이용

## 문제 해결

### MongoDB 연결 오류

- MongoDB가 실행 중인지 확인
- MongoDB Atlas 사용 시 IP 허용 목록 확인

### 포트 충돌

```bash
# 포트 3000이 사용중인 경우
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### 의존성 오류

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
npm install
```

## 다음 단계

- [API 문서](API_DOCS.md) 확인
- [개발 가이드](DEVELOPMENT.md) 읽기
- [프로젝트 구조](README.md#프로젝트-구조) 이해

## 도움이 필요하신가요?

GitHub Issues에 질문을 올려주세요!
