import { useTranslation } from "react-i18next";
import { Skeleton } from "../ui/skeleton";

export default function SkeletonEquipe() {
  const { t } = useTranslation();
  return (
    <section className="w-full p-4 flex flex-col items-center bg-black h-screen text-text">
      <h2 className="text-2xl md:text-4xl font-title text-center mb-8 relative inline-block">
        {t('professores')}
        <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-blue-500 to-red-500 rounded"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        <Skeleton className="h-[80vh]" />
        <Skeleton className="h-[80vh]" />
        <Skeleton className="h-[80vh]" />
      </div>
    </section>
  )
}