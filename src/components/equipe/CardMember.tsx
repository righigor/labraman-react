import { Equipe } from "@/types/equipe";
import ftPerfil from "@/assets/icons/profile-picture.png";
import { motion } from "framer-motion";
import { File, Mail, Microscope, Phone } from "lucide-react";
import useAnimationScroll from "@/hooks/useAnimationScroll";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCorrectLanguage } from "@/hooks/useCorrectLanguage";
import { API_URL } from "@/utils/constants";

interface CardMemberProps {
  member: Equipe;
  index: number;
}

export default function CardMember({ member, index }: CardMemberProps) {
  const isVisible = useAnimationScroll({
    selector: '#CardsMember',
    threshold: 0.3,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const { t } = useTranslation();
  const getCorrectLanguage = useCorrectLanguage();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    if (bioRef.current) {
      const isOverflowing =
        bioRef.current.scrollHeight > bioRef.current.clientHeight;
      setIsClamped(isOverflowing);
    }
  }, [member.bio]);

  return (
    <motion.div
      layout="preserve-aspect"
      id="CardsMember"
      initial={{ opacity: 0, y: 100 + index * 25 }}
      animate={
        isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 * (index * 25) }
      }
      transition={{ duration: 1 + index * 0.5 }}
      key={member.nome}
      className="bg-backgroundLight rounded-lg p-4 flex flex-col gap-4 shadow-white shadow-sm text-textDark overflow-hidden"
    >
      <div className="flex gap-4">
        <img
          src={member.photo?.url ? `${API_URL}${member.photo.url}` : ftPerfil}
          alt={member.nome}
          className="w-36 h-48 object-cover rounded-lg"
          loading="lazy"
        />
        <div>
          <h3 className="text-2xl font-title font-bold">{member.nome}</h3>
          <p className=" text-md">
            {getCorrectLanguage(member.tituloCargo, member.tituloCargoEN)}
          </p>
          {member.areaAtuacao && (
            <div className="mt-4">
              <p className="font-semibold">{t("area_atuacao")}:</p>
              <p className="text-sm">
                {getCorrectLanguage(member.areaAtuacao, member.areaAtuacaoEN)}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 align-top justify-start items-start">
        <div>
          <p
            ref={bioRef}
            className={`text-sm text-justify ${
              isExpanded ? "" : "line-clamp-6"
            }`}
          >
            {getCorrectLanguage(member.bio, member.bioEN)}
          </p>
          {isClamped && (
            <div className="flex justify-end text-sm">
              <button
                onClick={toggleExpand}
                className="mt-1 text-blue-600 hover:underline focus:outline-none"
              >
                {isExpanded ? t("mostrar_menos") : t("expandir")}
              </button>
            </div>
          )}
        </div>
        {/* {member.pesquisaAtual && member.pesquisaAtualEN && (
          <div>
            <p className="font-semibold">{t("pesquisa_atual")}:</p>
            <p className="text-sm">
              {getCorrectLanguage(member.pesquisaAtual, member.pesquisaAtualEN)}
            </p>
          </div>
        )} */}
        <div className="flex gap-2 justify-center w-full ">
          {member.lattes && (
            <a
              href={member.lattes}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:text-blue-900 flex gap-1 items-center"
            >
              <File size={16} />
              Lattes
            </a>
          )}
          {member.lattes && member.orcid && <div className="h-full border" />}
          {member.orcid && (
            <a
              href={member.orcid}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:text-blue-900 flex gap-1 items-center"
            >
              <Microscope size={16} />
              ORCID
            </a>
          )}
        </div>

        {member.telefone && (
          <div className="flex gap-1 items-center">
            <Phone size={16} />
            <p className="text-sm">{member.telefone}</p>
          </div>
        )}

        {member.email && (
          <div className="flex flex-col gap-1">
            {member.email.map((email, i) => (
              <div className="flex gap-1 items-center" key={i}>
                <Mail size={16} />
                <a href={`mailto:${email}`} className="text-sm">
                  {email.email}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
