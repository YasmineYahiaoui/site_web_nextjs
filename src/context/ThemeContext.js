'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Créer le contexte
const ThemeContext = createContext();

// Hook personnalisé pour utiliser le contexte du thème
export const useTheme = () => useContext(ThemeContext);

// Fournisseur du contexte
export function ThemeProvider({ children }) {
  // État pour suivre le thème actuel (light ou dark)
  const [theme, setTheme] = useState('light');
  
  // Effet pour récupérer le thème préféré à partir du localStorage lors du chargement
  useEffect(() => {
    // Vérifier si nous sommes côté client
    if (typeof window !== 'undefined') {
      // Récupérer le thème du localStorage ou utiliser le thème par défaut
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      
      // Appliquer la classe au body pour le thème
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);
  
  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Enregistrer le thème dans localStorage
    localStorage.setItem('theme', newTheme);
    
    // Appliquer/supprimer la classe dark au HTML
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Valeur du contexte
  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
} 