"""
Módulo que define la clase Card y sus funcionalidades.
"""

class Card:
    """
    Representa una carta de juego con palo y valor.
    
    Atributos:
        suit (str): Palo de la carta (hearts, diamonds, clubs, spades)
        rank (str): Valor de la carta (A, 2-10, J, Q, K)
        face_up (bool): Si la carta está boca arriba o no
        _color (str): Color de la carta (rojo o negro) - encapsulado
    """
    
    def __init__(self, suit, rank, face_up=False):
        """
        Inicializa una nueva carta.
        
        Args:
            suit (str): Palo de la carta
            rank (str): Valor de la carta
            face_up (bool): Estado inicial de la carta
        """
        self.suit = suit
        self.rank = rank
        self.face_up = face_up
        self._color = self._calculate_color()
    
    def _calculate_color(self):
        """
        Calcula el color de la carta basado en su palo.
        
        Returns:
            str: 'red' para corazones y diamantes, 'black' para tréboles y picas
        """
        if self.suit in ['hearts', 'diamonds']:
            return 'red'
        return 'black'
    
    def flip(self):
        """Voltea la carta (cambia su estado face_up)."""
        self.face_up = not self.face_up
    
    def get_color(self):
        """
        Getter para el color de la carta (atributo encapsulado).
        
        Returns:
            str: Color de la carta
        """
        return self._color
    
    def get_value(self):
        """
        Obtiene el valor numérico de la carta.
        
        Returns:
            int: Valor numérico (1 para A, 11 para J, 12 para Q, 13 para K)
        """
        values = {'A': 1, 'J': 11, 'Q': 12, 'K': 13}
        return values.get(self.rank, int(self.rank))
    
    def __str__(self):
        """Representación en string de la carta."""
        if self.face_up:
            return f"{self.rank}{self.suit[0].upper()}"
        return "XX"
    
    def __repr__(self):
        """Representación oficial de la carta."""
        return f"Card({self.suit}, {self.rank}, {self.face_up})"