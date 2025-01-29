import { Skeleton } from "../ui/skeleton";

export default function SkeletonArtigos() {
  return (
    <div className="bg-black w-full text-text flex flex-col items-center space-y-4 h-screen">
      <Skeleton className="w-4/5 h-1/3 bg-backgroundLight/70" />
      <Skeleton className="w-4/5 h-1/3 bg-backgroundLight/70" />
      <Skeleton className="w-4/5 h-1/3 bg-backgroundLight/70" />
    </div>
  )
}