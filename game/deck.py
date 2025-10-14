"""
Módulo que define la clase Deck para manejar el mazo de cartas.
"""

import random
from collections import deque
from .card import Card

class Deck:
    """
    Representa un mazo de cartas de solitario.
    
    Atributos:
        cards (deque): Cola de cartas en el mazo
    """
    
    def __init__(self):
        """Inicializa un mazo completo de 52 cartas."""
        self.cards = deque()
        self._initialize_deck()
    
    def _initialize_deck(self):
        """Inicializa el mazo con todas las cartas."""
        suits = ['hearts', 'diamonds', 'clubs', 'spades']
        ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        
        for suit in suits:
            for rank in ranks:
                self.cards.append(Card(suit, rank))
    
    def shuffle(self):
        """Mezcla el mazo de cartas."""
        random.shuffle(self.cards)
    
    def draw(self):
        """
        Roba una carta del mazo.
        
        Returns:
            Card: La carta robada, o None si el mazo está vacío
        """
        if self.cards:
            return self.cards.popleft()
        return None
    
    def is_empty(self):
        """
        Verifica si el mazo está vacío.
        
        Returns:
            bool: True si el mazo está vacío, False en caso contrario
        """
        return len(self.cards) == 0
    
    def __len__(self):
        """Retorna la cantidad de cartas en el mazo."""
        return len(self.cards)