import { Artigo } from "@/types/artigos";
import placeholderImg from "@/assets/imgs/placeholder-artigo.svg"
import { useCorrectLanguage } from "@/hooks/useCorrectLanguage";
import { Link2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import Sublinhado from "@/utils/sublinhado";

interface ArtigosCardProps {
  artigo: Artigo;
}

export default function ArtigosCard({ artigo }: ArtigosCardProps) {
  const {t} = useTranslation();
  const getCorrectLanguage = useCorrectLanguage();

  return (
    <div className="w-full flex items-start justify-center gap-4 py-6 px-8 border-backgroundLight border rounded-lg">
      <div
        className="w-1/3"
      >
        {
          artigo.fotos?.url ? (
            <img src={artigo.fotos.url} alt="" />
          ) : (
            <img src={placeholderImg} alt="" />
          )
        }
      </div>
      <div className="w-2/3 flex flex-col space-y-4">
      <div>

        <h3 className="text-xl md:text-2xl font-semibold font-title text-right">{getCorrectLanguage(artigo.titulo, artigo.tituloEN)}</h3>
        <p className="text-right text-sm text-text">
          {artigo.autores?.map((autor, index) => (
            <span key={index}>{autor.nome}{
              index < artigo.autores.length - 1 ? " - " : ""
            } </span>
          ))}
        </p>
      </div>
        <p className=" mt-2 text-text text-justify ">{artigo.resumo}</p>
        <div
          className="flex justify-center items-center space-x-4"
        >

          <a href={ artigo.linkPublicacao } className="flex items-center gap-2 text-text text-md group relative">
            <Link2 size={18} />
            {t('link_artigo')}
            <Sublinhado />
          </a>
        </div>
      </div>
    </div>
  );
}