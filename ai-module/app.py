from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from services.recommendation import get_toy_recommendations
from services.price_prediction import predict_toy_price

load_dotenv()

app = Flask(__name__)
CORS(app, origins=os.getenv('CORS_ORIGINS', 'http://localhost:3000').split(','))

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        'message': 'ToiToi AI Module',
        'version': '1.0.0',
        'endpoints': [
            '/recommend',
            '/predict-price'
        ]
    })

@app.route('/recommend', methods=['POST'])
def recommend():
    """
    장난감 추천 엔드포인트
    
    Request Body:
    {
        "userId": "string",
        "age": number,
        "interests": ["string"],
        "history": ["string"]
    }
    """
    try:
        data = request.get_json()
        user_id = data.get('userId')
        age = data.get('age', 0)
        interests = data.get('interests', [])
        history = data.get('history', [])
        
        recommendations = get_toy_recommendations(user_id, age, interests, history)
        
        return jsonify({
            'success': True,
            'recommendations': recommendations
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/predict-price', methods=['POST'])
def predict_price():
    """
    가격 예측 엔드포인트
    
    Request Body:
    {
        "toyName": "string",
        "category": "string",
        "condition": "string",
        "originalPrice": number
    }
    """
    try:
        data = request.get_json()
        toy_name = data.get('toyName')
        category = data.get('category')
        condition = data.get('condition')
        original_price = data.get('originalPrice', 0)
        
        prediction = predict_toy_price(toy_name, category, condition, original_price)
        
        return jsonify({
            'success': True,
            'prediction': prediction
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    port = int(os.getenv('FLASK_PORT', 8000))
    app.run(host='0.0.0.0', port=port, debug=True)
