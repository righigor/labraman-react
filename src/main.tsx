import { createRoot } from 'react-dom/client'
// import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import "./i18n.js";
import { LanguageProvider } from './context/LanguageContext.tsx';

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
      <App />
  </LanguageProvider>
)
