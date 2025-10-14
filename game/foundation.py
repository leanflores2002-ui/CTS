"""
Módulo que define las fundaciones del solitario.
"""

from .pile import Pile
from .card import Card

class Foundation(Pile):
    """
    Representa una fundación del solitario donde se apilan cartas por palo en orden ascendente.
    
    Atributos:
        suit (str): Palo de esta fundación
    """
    
    def __init__(self, suit):
        """
        Inicializa una fundación para un palo específico.
        
        Args:
            suit (str): Palo de la fundación
        """
        super().__init__()
        self.suit = suit
    
    def can_add_card(self, card):
        """
        Verifica si una carta puede ser añadida a la fundación.
        
        Args:
            card (Card): Carta a verificar
            
        Returns:
            bool: True si la carta puede ser añadida
        """
        if card.suit != self.suit:
            return False
        
        top_card = self.get_top_card()
        if top_card is None:
            return card.rank == 'A'
        
        current_values = {'A': 1, 'J': 11, 'Q': 12, 'K': 13}
        top_value = current_values.get(top_card.rank, int(top_card.rank))
        card_value = current_values.get(card.rank, int(card.rank))
        
        return card_value == top_value + 1
    
    def is_complete(self):
        """
        Verifica si la fundación está completa (tiene todas las cartas del palo).
        
        Returns:
            bool: True si la fundación está completa
        """
        return len(self.cards) == 13