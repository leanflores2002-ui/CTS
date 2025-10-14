"""
Módulo para gestionar múltiples juegos de solitario (CRUD).
"""

import re
from collections import deque
from game.game_engine import SolitaireGame

class GameManager:
    """
    Gestiona múltiples instancias del juego de solitario.
    Implementa operaciones CRUD completas.
    
    Atributos:
        games (dict): Diccionario de juegos activos
        game_queue (deque): Cola de juegos recientes
    """
    
    def __init__(self):
        """Inicializa el gestor de juegos."""
        self.games = {}
        self.game_queue = deque(maxlen=10)  # Mantener solo los 10 juegos más recientes
    
    def create_game(self):
        """
        Crea un nuevo juego de solitario.
        
        Returns:
            str: ID del juego creado
        """
        import uuid
        game_id = str(uuid.uuid4())[:8]
        self.games[game_id] = SolitaireGame(game_id)
        self.game_queue.append(game_id)
        return game_id
    
    def get_game(self, game_id):
        """
        Obtiene un juego por su ID.
        
        Args:
            game_id (str): ID del juego
            
        Returns:
            SolitaireGame: Instancia del juego o None si no existe
        """
        return self.games.get(game_id)
    
    def read_all_games(self):
        """
        Obtiene información de todos los juegos activos.
        
        Returns:
            dict: Información de todos los juegos
        """
        game_info = {}
        for game_id, game in self.games.items():
            game_info[game_id] = {
                'moves_count': len(game.moves),
                'game_won': game.is_game_won(),
                'foundations_complete': sum(1 for f in game.foundations.values() if f.is_complete())
            }
        return game_info
    
    def update_game(self, game_id, **kwargs):
        """
        Actualiza propiedades de un juego (operación no típica en este contexto).
        
        Args:
            game_id (str): ID del juego
            **kwargs: Propiedades a actualizar
            
        Returns:
            bool: True si la actualización fue exitosa
        """
        if game_id in self.games:
            # En un juego real, aquí podríamos actualizar propiedades específicas
            return True
        return False
    
    def delete_game(self, game_id):
        """
        Elimina un juego.
        
        Args:
            game_id (str): ID del juego a eliminar
            
        Returns:
            bool: True si el juego fue eliminado
        """
        if game_id in self.games:
            del self.games[game_id]
            # Remover de la cola también
            if game_id in self.game_queue:
                self.game_queue.remove(game_id)
            return True
        return False
    
    def search_games(self, pattern):
        """
        Busca juegos cuyo ID coincida con un patrón regex.
        
        Args:
            pattern (str): Patrón de búsqueda regex
            
        Returns:
            list: Lista de IDs de juegos que coinciden
        """
        try:
            regex = re.compile(pattern)
            return [game_id for game_id in self.games.keys() if regex.search(game_id)]
        except re.error:
            return []
    
    def get_recent_games(self, count=5):
        """
        Obtiene los juegos más recientes.
        
        Args:
            count (int): Número de juegos a retornar
            
        Returns:
            list: Lista de IDs de juegos recientes
        """
        return list(self.game_queue)[-count:]