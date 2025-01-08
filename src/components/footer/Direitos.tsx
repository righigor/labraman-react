import { useTranslation } from "react-i18next";

export default function Direitos() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center gap-2 items-center h-16 font-body text-text border-t border-slate-400/20 w-full mt-10 pt-2">
      <p className="text-sm">{`© 2025 Lab Raman. ${t('direitos')}`}</p>
      <a target="_blank" href="https://righigor.dev" className="text-sm">{`${t('dev')} @righigor`}</a>
    </div>
  );
}