import { Link } from "react-router-dom";
import Sublinhado from "../../utils/sublinhado";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../utils/toggleLanguages";


export default function MenuList() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center gap-4">
          <div>
            <h2 className="font-semibold font-title text-lg">Menu</h2>
          </div>
          <div className="flex flex-col items-center gap-2 font-body text-sm">
            <div className="group relative">
              <Link to="/nossa-historia">{t("nossa_historia")}</Link>
              <Sublinhado />
            </div>
            <div className="group relative">
              <Link to="/equipe">{t("equipe")}</Link>
              <Sublinhado />
            </div>
            <div className="group relative">
              <Link to="/equipamentos">{t("equipamentos")}</Link>
              <Sublinhado />
            </div>
            <div className="group relative">
              <Link to="/artigos">{t("artigos")}</Link>
              <Sublinhado />
            </div>
            <div className="group relative">
              <Link to="/contato">{t("contato")}</Link>
              <Sublinhado />
            </div>
            <LanguageToggle />
          </div>
        </div>
  )
}