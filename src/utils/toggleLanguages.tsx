import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Flag from "react-world-flags";

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <li className="group relative flex items-center space-x-1">
      <button
        onClick={toggleLanguage}
        className={`p-2 rounded-full transition-all duration-500 ease-out  ${
          language === "en" ? "opacity-100" : "opacity-50"
        }`}
        disabled={language === "en"}
      >
        <Flag code="US" className="h-5 w-5" />
      </button>

      <div className="h-5 w-[1px] bg-slate-400/80" />
      <button
        onClick={toggleLanguage}
        className={`p-2 rounded-full transition-all duration-500 ease-out  ${
          language === "pt" ? "opacity-100" : "opacity-50"
        }`}
        disabled={language === "pt"}
      >
        <Flag code="BR" className="h-5 w-5" />
      </button>
    </li>
  );
};

export default LanguageToggle;
