import { Equipe } from "@/types/equipe";
import ftPerfil from "@/assets/icons/profile-picture.png";
import { motion } from "framer-motion";
import { File, Mail, Microscope, Phone } from "lucide-react";
import useAnimationScroll from "@/hooks/useAnimationScroll";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface CardMemberProps {
  member: Equipe;
  index: number;
}

export default function CardMember({ member, index }: CardMemberProps) {
  const isVisible = useAnimationScroll({
    selector: "#CardMember",
    threshold: 0.3,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const { t } = useTranslation();

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
      id="CardMember"
      initial={{ opacity: 0, y: 100 + index * 25 }}
      animate={
        isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 * (index * 25) }
      }
      transition={{ duration: 1 + index * 0.5 }}
      key={member.nome}
      className="bg-backgroundLight rounded-lg p-4 flex flex-col lg:flex-row gap-8 shadow-white shadow-sm text-textDark overflow-hidden"
    >
      <img
        src={member.photo ? member.photo : ftPerfil}
        alt={member.nome}
        className="w-32 h-32 object-cover rounded-full"
      />
      <div className="flex flex-col gap-4 align-top justify-start items-start">
        <div>
          <h3 className="text-2xl font-title font-bold">{member.nome}</h3>
          <p className=" text-md">{member.tituloCargo}</p>
          {member.areaAtuacao && (
            <div className="mt-4">
              <p className="font-semibold">{t("area_atuacao")}:</p>
              <p className="text-sm">{member.areaAtuacao}</p>
            </div>
          )}
        </div>
        <div>
          <p
            ref={bioRef}
            className={`text-sm text-justify ${
              isExpanded ? "" : "line-clamp-6"
            }`}
          >
            {member.bio}
          </p>
          {isClamped && (
            <div className="flex justify-end text-sm">
              <button
                onClick={toggleExpand}
                className="mt-1 text-blue-600 hover:underline focus:outline-none"
              >
                {isExpanded ? "Mostrar menos" : "Expandir"}
              </button>
            </div>
          )}
        </div>
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
        {member.pesquisaAtual && (
          <div>
            <p className="font-semibold">Pesquisa Atual:</p>
            <p className="text-sm">{member.pesquisaAtual}</p>
          </div>
        )}

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
                  {email}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
