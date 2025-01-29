import { createRoot } from "react-dom/client";
// import { StrictMode } from 'react'
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./i18n.js";
import { LanguageProvider } from "./context/LanguageContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </QueryClientProvider>
);
