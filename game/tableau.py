"""
Módulo que define el tableau (mesa) del solitario.
"""

from .pile import Pile
from .card import Card

class TableauPile(Pile):
    """
    Representa una columna del tableau en el solitario.
    Las cartas se apilan en orden descendente y alternando colores.
    """
    
    def __init__(self, initial_cards=None):
        """
        Inicializa una columna del tableau.
        
        Args:
            initial_cards (list): Lista inicial de cartas (opcional)
        """
        super().__init__()
        if initial_cards:
            self.cards = initial_cards
    
    def can_add_card(self, card):
        """
        Verifica si una carta puede ser añadida al tableau.
        
        Args:
            card (Card): Carta a verificar
            
        Returns:
            bool: True si la carta puede ser añadida
        """
        top_card = self.get_top_card()
        if top_card is None:
            return card.rank == 'K'
        
        # Verificar que los colores sean alternados
        if top_card.get_color() == card.get_color():
            return False
        
        # Verificar que el valor sea descendente
        current_values = {'A': 1, 'J': 11, 'Q': 12, 'K': 13}
        top_value = current_values.get(top_card.rank, int(top_card.rank))
        card_value = current_values.get(card.rank, int(card.rank))
        
        return card_value == top_value - 1
    
    def can_remove_card(self, index):
        """
        Verifica si una carta en una posición específica puede ser removida.
        
        Args:
            index (int): Índice de la carta a verificar
            
        Returns:
            bool: True si la carta puede ser removida
        """
        if 0 <= index < len(self.cards):
            # Solo se pueden remover cartas que estén boca arriba
            # y todas las cartas debajo de ella también deben estar boca arriba
            for i in range(index, len(self.cards)):
                if not self.cards[i].face_up:
                    return False
            return True
        return False
    
    def get_visible_cards(self):
        """
        Obtiene todas las cartas visibles (boca arriba) en la columna.
        
        Returns:
            list: Lista de cartas visibles
        """
        visible = []
        for card in self.cards:
            if card.face_up:
                visible.append(card)
        return visible
    
    def flip_top_card(self):
        """Voltea la carta superior si está boca abajo."""
        if self.cards and not self.cards[-1].face_up:
            self.cards[-1].flip()
