"""
장난감 추천 알고리즘

사용자의 나이, 관심사, 거래 이력을 기반으로 장난감을 추천합니다.
"""

import random

# 샘플 장난감 데이터베이스
TOY_DATABASE = [
    {'id': 1, 'name': '레고 크리에이터 세트', 'category': 'lego', 'ageRange': [7, 14], 'tags': ['building', 'creative']},
    {'id': 2, 'name': '바비 인형', 'category': 'doll', 'ageRange': [3, 10], 'tags': ['roleplay', 'fashion']},
    {'id': 3, 'name': '건담 RX-78', 'category': 'gundam', 'ageRange': [12, 99], 'tags': ['model', 'anime']},
    {'id': 4, 'name': '타요 버스', 'category': 'car', 'ageRange': [2, 6], 'tags': ['vehicle', 'educational']},
    {'id': 5, 'name': '포켓몬 피규어', 'category': 'figure', 'ageRange': [5, 99], 'tags': ['collectible', 'anime']},
    {'id': 6, 'name': '실바니안 패밀리', 'category': 'doll', 'ageRange': [3, 12], 'tags': ['roleplay', 'cute']},
]

def calculate_toy_score(toy, age, interests, history):
    """
    장난감 점수 계산
    
    Args:
        toy: 장난감 정보
        age: 사용자 나이
        interests: 사용자 관심사 리스트
        history: 거래 이력
        
    Returns:
        float: 점수 (0-100)
    """
    score = 50.0  # 기본 점수
    
    # 나이 매칭 점수
    if toy['ageRange'][0] <= age <= toy['ageRange'][1]:
        score += 20
    elif abs(age - toy['ageRange'][0]) <= 3 or abs(age - toy['ageRange'][1]) <= 3:
        score += 10
    
    # 관심사 매칭 점수
    matching_tags = set(toy['tags']) & set(interests)
    score += len(matching_tags) * 15
    
    # 카테고리 선호도 점수 (거래 이력 기반)
    if toy['category'] in history:
        score += 10
    
    return min(score, 100)

def get_toy_recommendations(user_id, age, interests, history, limit=10):
    """
    사용자에게 장난감 추천
    
    Args:
        user_id: 사용자 ID
        age: 사용자 나이
        interests: 관심사 리스트
        history: 거래 이력
        limit: 추천 개수
        
    Returns:
        list: 추천 장난감 리스트
    """
    # 각 장난감에 대해 점수 계산
    scored_toys = []
    for toy in TOY_DATABASE:
        score = calculate_toy_score(toy, age, interests, history)
        scored_toys.append({
            **toy,
            'score': score,
            'reason': generate_recommendation_reason(toy, age, interests)
        })
    
    # 점수순 정렬
    scored_toys.sort(key=lambda x: x['score'], reverse=True)
    
    # 상위 N개 반환
    return scored_toys[:limit]

def generate_recommendation_reason(toy, age, interests):
    """추천 이유 생성"""
    reasons = []
    
    if toy['ageRange'][0] <= age <= toy['ageRange'][1]:
        reasons.append(f"{age}세에 적합한 장난감입니다")
    
    matching_tags = set(toy['tags']) & set(interests)
    if matching_tags:
        reasons.append(f"{', '.join(matching_tags)} 관심사와 맞습니다")
    
    if not reasons:
        reasons.append("인기 있는 장난감입니다")
    
    return ' | '.join(reasons)
