import { Link } from "react-router-dom";
import Sublinhado from "../../utils/sublinhado";
// import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../utils/toggleLanguages";

export default function NavList() {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className="hidden md:flex items-center space-x-8 text-text">
        <li className="group relative">
          <Link to="/nossa-historia">
            {t('nossa_historia')}
          </Link>
          <Sublinhado />
        </li>
        <li className="group relative">
          <Link to="/equipe">
            {t('equipe')}
          </Link>
          <Sublinhado />
        </li>
        <li className="group relative">
          <Link to="/equipamentos">
            {t('equipamentos')}
          </Link>
          <Sublinhado />
        </li>
        <li className="group relative">
          <Link to="/artigos">
            {t('artigos')}
          </Link>
          <Sublinhado />
        </li>
        <li className="group relative">
          <Link to="/contato">
            {t('contato')}
          </Link>
          <Sublinhado />
        </li>
        <LanguageToggle />
      </ul>
    </nav>
  );
}
