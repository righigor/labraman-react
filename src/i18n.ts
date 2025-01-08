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
          "direitos": "Todos os direitos reservados",
          "endereço": "Av. Antônio Carlos, 6627 Departamento de Física, Instituto de Ciências Exatas (ICEX). Belo Horizonte, MG, Brasil",
          "dev": "Desenvolvido por",
          "leia_mais": "Leia Mais",
          "historia_home": "Fundado em [ano], o LabRaman é pioneiro em pesquisas sobre espectroscopia Raman. Nossa equipe combina tradição e tecnologia para avançar a ciência.",
          "nossa_equipe": "Nossa Equipe",
          "nossa_equipe_completa": "Nossa equipe completa",
          "nossos_equipamentos": "Nossos Equipamentos",
          "equipamentos_home": "Nossa infraestrutura conta com equipamentos modernos e avançados, essenciais para conduzir pesquisas científicas de ponta.",
          "not_found": "Não conseguimos encontrar essa página."
        }
      },
      en: {
        translation: {
          "nossa_historia": "Our Story",
          "equipe": "Team",
          "equipamentos": "Equipment",
          "artigos": "Articles",
          "contato": "Contact",
          "saiba_mais": "Learn More",
          "lab_raman": "Raman Spectroscopy Laboratory of UFMG",
          "direitos": "All rights reserved",
          "endereço": "Av. Antônio Carlos, 6627, Department of Physics, Institute of Exact Sciences (ICEX). Belo Horizonte, MG, Brazil",
          "dev": "Developed by",
          "leia_mais": "Read More",
          "historia_home": "Founded in [ano], LabRaman is a pioneer in Raman spectroscopy research. Our team combines tradition and technology to advance science.",
          "nossa_equipe": "Our Team",
          "nossa_equipe_completa": "Our complete team",
          "nossos_equipamentos": "Our Equipment",
          "equipamentos_home": "Our infrastructure features modern and advanced equipment, essential for conducting cutting-edge scientific research.",
          "not_found": "We can't find that page."
        }
      },
    },
    lng: "pt",
    fallbackLng: "pt", 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
