import React, { createContext, useContext, useState, useEffect } from 'react';

export type FavoriteType = 'destination' | 'resort' | 'tour';

export interface FavoriteItem {
  id: string;
  type: FavoriteType;
  addedAt: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string, type: FavoriteType) => void;
  removeFavorite: (id: string) => void;
  clearFavorites: () => void;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    try {
      const saved = localStorage.getItem('nomad_favorites');
      return saved ? JSON.parse(saved) : [
        { id: 'samarkand', type: 'destination', addedAt: new Date().toISOString() },
        { id: 'resort-amirsoy-chalets', type: 'resort', addedAt: new Date().toISOString() }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nomad_favorites', JSON.stringify(favorites));
    } catch {
      // Storage unavailable or quota exceeded
    }
  }, [favorites]);

  const isFavorite = (id: string) => favorites.some(item => item.id === id);

  const toggleFavorite = (id: string, type: FavoriteType) => {
    setFavorites(prev => {
      const exists = prev.some(item => item.id === id);
      if (exists) {
        return prev.filter(item => item.id !== id);
      } else {
        return [...prev, { id, type, addedAt: new Date().toISOString() }];
      }
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
        removeFavorite,
        clearFavorites,
        favoritesCount: favorites.length
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
