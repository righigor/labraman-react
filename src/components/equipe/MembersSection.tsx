import { Equipe } from "@/types/equipe";
import CardMember from "./CardMember";
import { useTranslation } from "react-i18next";

interface MembersSectionProps {
  title: string;
  members: Equipe[];
}

export default function MembersSection({
  members,
  title,
}: MembersSectionProps) {
  const { t } = useTranslation();
  return (
    <section className="w-full p-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-title text-center mb-8 relative inline-block">
        {title}
        <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-blue-500 to-red-500 rounded"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {members.map((member, i) => (
          <CardMember key={member.nome} member={member} index={i} />
        ))}
      </div>
      {title !== t("estudantes") && <hr className=" mt-10 w-3/4" />}
    </section>
  );
}
