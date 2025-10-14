"""
Módulo principal del motor del juego de Solitario.
"""

import json
from collections import deque
from .deck import Deck
from .foundation import Foundation
from .tableau import TableauPile
from .card import Card

class SolitaireGame:
    """
    Clase principal que maneja la lógica del juego de Solitario.
    
    Atributos:
        deck (Deck): Mazo de cartas
        foundations (dict): Fundaciones por palo
        tableau (list): Columnas del tableau
        stock (deque): Stock de cartas
        waste (deque): Descarte
        _game_id (str): ID único del juego - encapsulado
        moves (list): Historial de movimientos
        game_won (bool): Estado de victoria
    """
    
    def __init__(self, game_id):
        """
        Inicializa un nuevo juego de solitario.
        
        Args:
            game_id (str): Identificador único del juego
        """
        self.deck = Deck()
        self.foundations = {
            'hearts': Foundation('hearts'),
            'diamonds': Foundation('diamonds'),
            'clubs': Foundation('clubs'),
            'spades': Foundation('spades')
        }
        self.tableau = [TableauPile() for _ in range(7)]
        self.stock = deque()
        self.waste = deque()
        self._game_id = game_id
        self.moves = []
        self.game_won = False
        self._setup_game()
    
    def _setup_game(self):
        """Configura el juego inicial repartiendo las cartas."""
        # Mezclar el mazo
        self.deck.shuffle()
        
        # Repartir cartas en el tableau
        for i in range(7):
            for j in range(i + 1):
                card = self.deck.draw()
                if j == i:  # La última carta de cada columna boca arriba
                    card.face_up = True
                self.tableau[i].cards.append(card)
        
        # El resto de las cartas van al stock
        while not self.deck.is_empty():
            card = self.deck.draw()
            card.face_up = False
            self.stock.append(card)
    
    def draw_from_stock(self):
        """Roba cartas del stock al descarte."""
        if self.stock:
            # En este solitario, robamos 3 cartas a la vez
            for _ in range(min(3, len(self.stock))):
                card = self.stock.popleft()
                card.face_up = True
                self.waste.appendleft(card)
        else:
            # Si el stock está vacío, reciclamos el descarte
            while self.waste:
                card = self.waste.popleft()
                card.face_up = False
                self.stock.append(card)
    
    def move_card(self, from_pile, to_pile, card_index=0):
        """
        Intenta mover una carta entre pilas.
        
        Args:
            from_pile (str): Pila de origen
            to_pile (str): Pila de destino
            card_index (int): Índice de la carta a mover
            
        Returns:
            bool: True si el movimiento fue exitoso
        """
        # Implementar lógica de movimiento
        # Esto es una simplificación - en un juego real sería más complejo
        if from_pile.startswith('tableau') and to_pile.startswith('foundation'):
            tableau_index = int(from_pile.split('_')[1])
            foundation_suit = to_pile.split('_')[1]
            
            tableau_pile = self.tableau[tableau_index]
            foundation = self.foundations[foundation_suit]
            
            if tableau_pile.cards and tableau_pile.cards[-1].face_up:
                card = tableau_pile.cards[-1]
                if foundation.can_add_card(card):
                    moved_card = tableau_pile.remove_top_card()
                    foundation.add_card(moved_card)
                    # Voltear la nueva carta superior del tableau si es necesario
                    if tableau_pile.cards and not tableau_pile.cards[-1].face_up:
                        tableau_pile.cards[-1].face_up = True
                    
                    self.moves.append(f"Moved {card} to {foundation_suit} foundation")
                    self._check_game_won()
                    return True
        
        return False
    
    def _check_game_won(self):
        """Verifica si el juego ha sido ganado."""
        self.game_won = all(foundation.is_complete() for foundation in self.foundations.values())
    
    def is_game_won(self):
        """
        Retorna si el juego ha sido ganado.
        
        Returns:
            bool: True si el juego está ganado
        """
        return self.game_won
    
    def get_game_id(self):
        """
        Getter para el ID del juego (atributo encapsulado).
        
        Returns:
            str: ID del juego
        """
        return self._game_id
    
    def get_tableau_state(self):
        """Obtiene el estado actual del tableau."""
        state = []
        for i, pile in enumerate(self.tableau):
            state.append({
                'index': i,
                'cards': [{'suit': card.suit, 'rank': card.rank, 'face_up': card.face_up} 
                         for card in pile.cards]
            })
        return state
    
    def get_foundation_state(self):
        """Obtiene el estado actual de las fundaciones."""
        state = {}
        for suit, foundation in self.foundations.items():
            top_card = foundation.get_top_card()
            state[suit] = {
                'top_card': {
                    'suit': top_card.suit, 
                    'rank': top_card.rank
                } if top_card else None,
                'complete': foundation.is_complete()
            }
        return state
    
    def get_stock_state(self):
        """Obtiene el estado actual del stock."""
        return len(self.stock)
    
    def get_waste_state(self):
        """Obtiene el estado actual del descarte."""
        return [{'suit': card.suit, 'rank': card.rank} for card in self.waste]
    
    def save_game(self, filename):
        """
        Guarda el estado del juego en un archivo JSON.
        
        Args:
            filename (str): Nombre del archivo
        """
        game_state = {
            'game_id': self._game_id,
            'tableau': self.get_tableau_state(),
            'foundations': self.get_foundation_state(),
            'stock_count': self.get_stock_state(),
            'waste': self.get_waste_state(),
            'moves': self.moves,
            'game_won': self.game_won
        }
        
        with open(filename, 'w') as f:
            json.dump(game_state, f, indent=2)
    
    def load_game(self, filename):
        """
        Carga el estado del juego desde un archivo JSON.
        
        Args:
            filename (str): Nombre del archivo
        """
        try:
            with open(filename, 'r') as f:
                game_state = json.load(f)
            
            # Implementar lógica de carga
            # Esto sería más complejo en una implementación completa
            self._game_id = game_state['game_id']
            self.moves = game_state['moves']
            self.game_won = game_state['game_won']
            
        except (FileNotFoundError, json.JSONDecodeError) as e:
            print(f"Error loading game: {e}")