import { useTranslation } from "react-i18next";
import logo from "../../assets/logo-sem-fundo.png";
import MenuList from "./MenuList";
import SocialList from "./SocialList";
import Direitos from "./Direitos";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col justify-between items-center bg-primary text-white">
      <div className="flex justify-between items-center w-full px-4">
        <div className="flex flex-col items-center gap-4 w-1/3">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo Lab Raman" className="w-36" />
            <div className="h-16 w-[1px] bg-slate-400/80" />
            <img
              src="https://ufmg.br/static/logo-ufmg.svg"
              alt="Logo UFMG"
              className="w-28"
            />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2982858480027!2d-43.964572700000005!3d-19.8696227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690f4847329c5%3A0xac57002aecee9c51!2sInstituto%20de%20Ci%C3%AAncias%20Exatas!5e0!3m2!1spt-BR!2sbr!4v1736172166418!5m2!1spt-BR!2sbr"
            width="300"
            height="200"
            loading="lazy"
          ></iframe>
          <p className="text-center px-8">
            {t("endereço")}
          </p>
        </div>
        <div className="flex justify-end items-center w-2/3">
          <MenuList />
          <SocialList />
        </div>
      </div>
      <Direitos />
    </footer>
  );
}
