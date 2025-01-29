import { Artigo } from "@/types/artigos";
import ArtigosCard from "./ArtigosCard";

interface ArtigosSectionProps {
  artigos: Artigo[];
}

export default function ArtigosSection({ artigos }: ArtigosSectionProps) {
  return (
    <div className="px-2 md:px-8 gap-4 flex flex-col mt-10">
      {artigos.map((artigo) => (
        <ArtigosCard key={artigo.id} artigo={artigo} />
      ))}
    </div>
  );
}