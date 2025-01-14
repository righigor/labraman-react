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
          "art_dis_teses": "Artigos, Dissertações e Teses",
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
          "not_found": "Não conseguimos encontrar essa página.",
          "todos_artigos_btn": "Todos os nossos artigos publicados",
          "entre_em_contato": "Entre em contato",
          "seu_nome": "Seu Nome",
          "seu_email": "Seu Email",
          "sua_mensagem": "Sua Mensagem",
          "telefone": "Seu Telefone",
          "enviar": "Enviar",
          "enviada": "Mensagem enviada com sucesso!",
          "text_enviado": "Em breve entraremos em contato.",
          "professores": "Professores",
          "estudantes": "Estudantes",
          "professores_convidados": "Professores Convidados",
          "area_atuacao": "Área de Atuação",
        }
      },
      en: {
        translation: {
          "nossa_historia": "Our Story",
          "equipe": "Team",
          "equipamentos": "Equipment",
          "artigos": "Articles",
          "art_dis_teses": "Articles, Dissertations and Theses",
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
          "not_found": "We can't find that page.",
          "todos_artigos_btn": "All our published articles",
          "entre_em_contato": "Get in touch",
          "seu_nome": "Your Name",
          "seu_email": "Your Email",
          "sua_mensagem": "Your Message",
          "telefone": "Your Phone Number",
          "enviar": "Send",
          "enviada": "Message sent successfully!",
          "text_enviado": "We will get back to you shortly",
          "professores": "Professors",
          "estudantes": "Students",
          "professores_convidados": "Guest Professors",
          "area_atuacao": "Field of Study",
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
