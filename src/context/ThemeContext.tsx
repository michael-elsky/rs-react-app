import { createContext, useState } from 'react';

import type { ChildrenProp } from '../types/types';
import type { Theme, ThemeContextType } from './ThemeContext.types';

const initialValue: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialValue);

const ThemeContextProvider = ({ children }: ChildrenProp) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));

    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
