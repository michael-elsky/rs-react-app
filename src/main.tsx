import './global.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary/';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import ThemeContextProvider from './context/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
