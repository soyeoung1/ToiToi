"""
장난감 가격 예측 알고리즘

카테고리, 상태, 원가 등을 기반으로 적정 중고 가격을 예측합니다.
"""

import random

# 카테고리별 감가율
DEPRECIATION_RATES = {
    'doll': 0.6,      # 인형: 40% 감가
    'figure': 0.5,    # 피규어: 50% 감가
    'gundam': 0.55,   # 건담: 45% 감가
    'lego': 0.7,      # 레고: 30% 감가 (보존가치 높음)
    'car': 0.5,       # 자동차: 50% 감가
    'other': 0.6      # 기타: 40% 감가
}

# 상태별 가격 비율
CONDITION_RATES = {
    'excellent': 1.0,   # 최상: 100%
    'good': 0.85,       # 양호: 85%
    'fair': 0.65,       # 보통: 65%
    'poor': 0.40        # 나쁨: 40%
}

def predict_toy_price(toy_name, category, condition, original_price=None):
    """
    장난감 중고 가격 예측
    
    Args:
        toy_name: 장난감 이름
        category: 카테고리
        condition: 상태
        original_price: 원가 (선택사항)
        
    Returns:
        dict: 예측 정보
    """
    # 기본 감가율
    base_rate = DEPRECIATION_RATES.get(category, 0.6)
    
    # 상태별 비율
    condition_rate = CONDITION_RATES.get(condition, 0.85)
    
    # 최종 비율 계산
    final_rate = base_rate * condition_rate
    
    # 원가가 제공된 경우
    if original_price and original_price > 0:
        predicted_price = int(original_price * final_rate)
    else:
        # 원가가 없는 경우 카테고리 기반 평균 예측
        predicted_price = estimate_price_by_category(category, condition)
    
    # 가격 범위 계산 (±15%)
    min_price = int(predicted_price * 0.85)
    max_price = int(predicted_price * 1.15)
    
    # 트렌드 분석 (단순 랜덤, 실제로는 DB에서 최근 거래 분석)
    trend = random.choice(['up', 'down', 'stable'])
    trend_percentage = random.uniform(-5.0, 8.0) if trend != 'stable' else random.uniform(-1.0, 1.0)
    
    return {
        'predictedPrice': predicted_price,
        'priceRange': {
            'min': min_price,
            'max': max_price
        },
        'trend': trend,
        'trendPercentage': round(trend_percentage, 1),
        'confidence': calculate_confidence(original_price, category, condition),
        'factors': {
            'category': category,
            'condition': condition,
            'depreciationRate': base_rate,
            'conditionRate': condition_rate
        }
    }

def estimate_price_by_category(category, condition):
    """카테고리 기반 평균 가격 추정"""
    base_prices = {
        'doll': 30000,
        'figure': 25000,
        'gundam': 40000,
        'lego': 50000,
        'car': 20000,
        'other': 25000
    }
    
    base_price = base_prices.get(category, 25000)
    condition_rate = CONDITION_RATES.get(condition, 0.85)
    
    return int(base_price * condition_rate)

def calculate_confidence(original_price, category, condition):
    """예측 신뢰도 계산 (0-100)"""
    confidence = 70.0  # 기본 신뢰도
    
    # 원가 정보가 있으면 신뢰도 증가
    if original_price and original_price > 0:
        confidence += 15
    
    # 일반적인 카테고리면 신뢰도 증가
    if category in DEPRECIATION_RATES:
        confidence += 10
    
    # 상태 정보가 명확하면 신뢰도 증가
    if condition in CONDITION_RATES:
        confidence += 5
    
    return min(confidence, 100)
