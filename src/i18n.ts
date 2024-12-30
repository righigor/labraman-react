// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          "nossa_historia": "Nossa História",
          "equipe": "Equipe",
          "equipamentos": "Equipamentos",
          "artigos": "Artigos",
          "contato": "Contato",
          "saiba_mais": "Saiba Mais",
          "lab_raman": "Laboratório de Espectroscopia Raman da UFMG",
        }
      },
      en: {
        translation: {
          "nossa_historia": "Our History",
          "equipe": "Team",
          "equipamentos": "Equipment",
          "artigos": "Articles",
          "contato": "Contact",
          "saiba_mais": "Learn More",
          "lab_raman": "Raman Spectroscopy Laboratory of UFMG",
        }
      },
    },
    lng: "pt", // idioma padrão
    fallbackLng: "pt", // idioma de fallback
    interpolation: {
      escapeValue: false, // React já faz o escaping
    },
  });

export default i18n;
