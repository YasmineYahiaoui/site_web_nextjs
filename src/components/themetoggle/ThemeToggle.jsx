'use client';

import { useTheme } from '@/src/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-200 
                transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label={isDark ? "Passer au mode clair" : "Passer au mode sombre"}
    >
      {isDark ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
    </button>
  );
} 