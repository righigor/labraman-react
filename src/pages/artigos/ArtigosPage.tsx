import { fetchArtigos } from "@/api/fetch-artigos";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import NotFound from "../not-found/NotFound";
import SkeletonArtigos from "@/components/artigos/SkeletonArtigos";
import ArtigosSection from "@/components/artigos/ArtigosSection";

export default function ArtigosPage() {
  const { t } = useTranslation();

  const { data, isError, isFetching, error } = useQuery({
    queryKey: ["artigos"],
    queryFn: fetchArtigos,
  })

  if (isError) {
    console.error("Error fetching data: ", error);
  }

  if (!data) {
    return <NotFound />;
  }

  return (
    <div className="bg-black w-full text-text flex flex-col items-center space-y-4">
      <div className="relative w-full flex flex-col h-36 md:h-48 justify-center items-center bg-teambg bg-cover bg-center bg-no-repeat p-4">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-black"></div>

        <h1 className="text-4xl md:text-6xl font-semibold  font-title text-center mb-8 relative inline-block tracking-wider drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
          {t("artigos")}
        </h1>
      </div>

      <div className="p-4 w-full">
        {
          isFetching ? (
            <SkeletonArtigos />
            
          ) : (
            <div className="text-text">
              <ArtigosSection artigos={data.data} />
            </div>
          )
        }
      </div>
    </div>
  );
}