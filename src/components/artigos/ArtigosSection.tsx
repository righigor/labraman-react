import { Artigo } from "@/types/artigos";
import ArtigosCard from "./ArtigosCard";

interface ArtigosSectionProps {
  artigos: Artigo[];
}

export default function ArtigosSection({ artigos }: ArtigosSectionProps) {
  return (
    <div>
      {artigos.map((artigo) => (
        <ArtigosCard key={artigo.id} artigo={artigo} />
      ))}
    </div>
  );
}