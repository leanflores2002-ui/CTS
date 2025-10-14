#!/usr/bin/env python3
"""
Módulo principal del juego de Solitario.
Inicia el servidor Flask y maneja las rutas principales.
"""

from flask import Flask, render_template, request, jsonify
from game.game_engine import SolitaireGame
from crud.game_manager import GameManager
import json
import re
from collections import deque

app = Flask(__name__)
game_manager = GameManager()

@app.route('/')
def index():
    """Ruta principal que renderiza la interfaz del juego."""
    return render_template('index.html')

@app.route('/new_game', methods=['POST'])
def new_game():
    """Crea un nuevo juego de solitario."""
    game_id = game_manager.create_game()
    game = game_manager.get_game(game_id)
    return jsonify({
        'game_id': game_id,
        'tableau': game.get_tableau_state(),
        'foundations': game.get_foundation_state(),
        'stock': game.get_stock_state(),
        'waste': game.get_waste_state()
    })

@app.route('/move_card', methods=['POST'])
def move_card():
    """Realiza un movimiento de carta en el juego."""
    data = request.json
    game_id = data.get('game_id')
    from_pile = data.get('from_pile')
    to_pile = data.get('to_pile')
    card_index = data.get('card_index', 0)
    
    game = game_manager.get_game(game_id)
    if game:
        success = game.move_card(from_pile, to_pile, card_index)
        return jsonify({
            'success': success,
            'tableau': game.get_tableau_state(),
            'foundations': game.get_foundation_state(),
            'stock': game.get_stock_state(),
            'waste': game.get_waste_state(),
            'game_won': game.is_game_won()
        })
    return jsonify({'success': False})

@app.route('/draw_card', methods=['POST'])
def draw_card():
    """Roba una carta del stock."""
    data = request.json
    game_id = data.get('game_id')
    
    game = game_manager.get_game(game_id)
    if game:
        game.draw_from_stock()
        return jsonify({
            'stock': game.get_stock_state(),
            'waste': game.get_waste_state()
        })
    return jsonify({'success': False})

@app.route('/get_game_state', methods=['POST'])
def get_game_state():
    """Obtiene el estado actual del juego."""
    data = request.json
    game_id = data.get('game_id')
    
    game = game_manager.get_game(game_id)
    if game:
        return jsonify({
            'tableau': game.get_tableau_state(),
            'foundations': game.get_foundation_state(),
            'stock': game.get_stock_state(),
            'waste': game.get_waste_state(),
            'game_won': game.is_game_won()
        })
    return jsonify({'success': False})

if __name__ == '__main__':
    app.run(debug=True)