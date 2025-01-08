import { useTranslation } from "react-i18next";
import logo from "../../assets/logo-sem-fundo.png";
import MenuList from "./MenuList";
import SocialList from "./SocialList";
import Direitos from "./Direitos";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col justify-between items-center bg-black text-white border-t border-slate-400/20 w-full ">
      <div className="flex justify-center items-center w-full space-x-16 mt-4">
        <div className="flex flex-col items-center w-1/3">
          <img src={logo} alt="Logo Lab Raman" className="w-48" />
          <img
            src="https://ufmg.br/static/logo-ufmg.svg"
            alt="Logo UFMG"
            className="w-36"
          />
        </div>
        <div className="flex flex-col gap-4 w-1/3">
          <SocialList />
          <p className=" text-center text-sm">{t("endereço")}</p>
        </div>
        <div className="flex flex-col gap-4 w-1/3">
          <MenuList />
        </div>
      </div>
      <Direitos />
    </footer>
  );
}
