"""
Módulo que define la clase abstracta Pile para las pilas de cartas.
"""

from abc import ABC, abstractmethod
from .card import Card

class Pile(ABC):
    """
    Clase abstracta que representa una pila genérica de cartas.
    
    Atributos:
        cards (list): Lista de cartas en la pila
    """
    
    def __init__(self):
        """Inicializa una pila vacía."""
        self.cards = []
    
    @abstractmethod
    def can_add_card(self, card):
        """
        Verifica si una carta puede ser añadida a la pila.
        
        Args:
            card (Card): Carta a verificar
            
        Returns:
            bool: True si la carta puede ser añadida, False en caso contrario
        """
        pass
    
    def add_card(self, card):
        """
        Añade una carta a la pila si es válido.
        
        Args:
            card (Card): Carta a añadir
            
        Returns:
            bool: True si la carta fue añadida, False en caso contrario
        """
        if self.can_add_card(card):
            self.cards.append(card)
            return True
        return False
    
    def get_top_card(self):
        """
        Obtiene la carta superior de la pila.
        
        Returns:
            Card: Carta superior o None si la pila está vacía
        """
        if self.cards:
            return self.cards[-1]
        return None
    
    def remove_top_card(self):
        """
        Remueve y retorna la carta superior de la pila.
        
        Returns:
            Card: Carta removida o None si la pila está vacía
        """
        if self.cards:
            return self.cards.pop()
        return None
    
    def is_empty(self):
        """
        Verifica si la pila está vacía.
        
        Returns:
            bool: True si la pila está vacía, False en caso contrario
        """
        return len(self.cards) == 0
    
    def __len__(self):
        """Retorna la cantidad de cartas en la pila."""
        return len(self.cards)