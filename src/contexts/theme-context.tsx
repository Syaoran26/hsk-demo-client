import { createContext, ReactNode, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  activeTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getSystemTheme = (): 'light' | 'dark' => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  storageKey = 'hsk-theme',
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    return storedTheme || defaultTheme;
  });
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>(() => {
    return theme === 'system' ? getSystemTheme() : theme;
  });

  useEffect(() => {
    if (activeTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [activeTheme]);

  useEffect(() => {
    setActiveTheme(theme === 'system' ? getSystemTheme() : theme);
    localStorage.setItem(storageKey, theme);
  }, [theme]);

  useEffect(() => {
    if (theme === 'system') {
      const listener = (_: MediaQueryListEvent) => {
        setActiveTheme(theme === 'system' ? getSystemTheme() : theme);
      };
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, activeTheme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
