import { equipe } from "@/utils/data";
import { useTranslation } from "react-i18next";
import MembersSection from "@/components/equipe/MembersSection";

export default function EquipePage() {
  const { t } = useTranslation();
  const professores = equipe.filter((membro) => membro.cargo === "professor");
  const convidados = equipe.filter((membro) => membro.cargo === "professor_convidado");
  const estudantes = equipe.filter((membro) => membro.cargo === "estudante");

  return (
    <div className="bg-black w-full text-text p-4 flex flex-col items-center">
      <MembersSection members={professores} title={t('professores')} />
      <MembersSection members={convidados} title={t('professores_convidados')} />
      <MembersSection members={estudantes} title={t('estudantes')} />
    </div>
  );
}
