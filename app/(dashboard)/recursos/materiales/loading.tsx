import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-5 w-96 mt-2" />
          </div>
          <Skeleton className="h-10 w-24" />
        </div>

        <div className="w-full">
          <Skeleton className="h-10 w-64 mb-6" />
          <Skeleton className="h-[500px] w-full rounded-md" />
        </div>
      </div>
    </div>
  )
}
