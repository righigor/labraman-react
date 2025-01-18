import { useTranslation } from "react-i18next";
import MembersSection from "@/components/equipe/MembersSection";
import SkeletonEquipe from "@/components/equipe/SkeletonEquipe";
import { Equipe } from "@/types/equipe";
import { useQuery } from "@tanstack/react-query";
import { fetchEquipes } from "@/api/fetch-equipes";
import NotFound from "../not-found/NotFound";

export default function EquipePage() {
  const { t } = useTranslation();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["equipes"],
    queryFn: fetchEquipes,
  });

  if (isLoading) {
    return <SkeletonEquipe />;
  }
  if (!data) {
    return <NotFound />;
  }

  if (isError) {
    console.error("Error fetching data: ", error);
  }

  const professorConvidado = data?.data.filter(
    (member: Equipe) => member.cargo === "professor_convidado"
  );
  const estudante = data?.data.filter(
    (member: Equipe) => member.cargo === "estudante"
  );

  return (
    <div className="bg-black w-full text-text flex flex-col items-center space-y-4">
      <div className="relative w-full flex flex-col h-36 md:h-48 justify-center items-center bg-teambg bg-cover bg-center bg-no-repeat p-4">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-black"></div>

        <h1 className="text-4xl md:text-6xl font-semibold  font-title text-center mb-8 relative inline-block tracking-wider drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
          {t("nossa_equipe")}
        </h1>
      </div>
      <div className="p-4 w-full">
        <div>
          <MembersSection members={data.data} title={t("professores")} />
          {professorConvidado.length > 0 && (
            <MembersSection
              members={professorConvidado}
              title={t("professores_convidados")}
            />
          )}
          {estudante.length > 0 && (
            <MembersSection members={estudante} title={t("estudantes")} />
          )}
        </div>
      </div>
    </div>
  );
}
