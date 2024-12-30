import { Link } from "react-router-dom";
import Sublinhado from "../../utils/sublinhado";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../utils/toggleLanguages";

interface SideMenuProps {
  isOpen: boolean;
  handleClick: () => void;
}

export default function NavSideBar({ handleClick, isOpen }: SideMenuProps) {
  const { t } = useTranslation();
  return (
    <div
      className={ `fixed top-16 right-0 h-full bg-slate-500 text-white p-5 w-64 transition-transform duration-700 ease-in-out transform z-10 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }` }
    >
      <nav>
        <ul className="flex flex-col items-center space-y-3">
          <li className="group relative">
            <Link
              to="/"
              onClick={ handleClick }
              className="block py-2 px-4"
            >
              Home
            </Link>
            <Sublinhado />
          </li>
          <li className="group relative">
            <Link
              to="nossa-historia"
              onClick={ handleClick }
              className="block py-2 px-4"
            >
              {t('nossa_historia')}
            </Link>
            <Sublinhado />
          </li>
          <li className="group relative">
            <Link
              to="equipe"
              onClick={ handleClick }
              className="block py-2 px-4"
            >
              {t('equipe')}
            </Link>
            <Sublinhado />
          </li>
          <li className="group relative">
            <Link
              to="equipamentos"
              onClick={ handleClick }
              className="block py-2 px-4"
            >
              {t('equipamentos')}
            </Link>
            <Sublinhado />
          </li>
          <li className="group relative">
            <Link
              to="contato"
              onClick={ handleClick }
              className="block py-2 px-4"
            >
              {t('contato')}
            </Link>
            <Sublinhado />
          </li>
          <li>
            <LanguageToggle />
          </li>
        </ul>
      </nav>
    </div>
  );
}
