import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function LoadingMateriasPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <Skeleton className="h-10 w-3/4 max-w-md" />
          <Skeleton className="h-4 w-1/2 max-w-sm mt-2" />
        </div>

        <div className="flex gap-4 mb-6">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-1/3 mb-2" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-[180px]" />
              <Skeleton className="h-10 w-[120px]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-4">
              <div className="space-y-4">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-40" />
                        <Skeleton className="h-6 w-10 hidden md:block" />
                        <Skeleton className="h-6 w-24 hidden md:block" />
                        <Skeleton className="h-6 w-20 hidden md:block" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                      <div className="flex gap-2">
                        <Skeleton className="h-8 w-8" />
                        <Skeleton className="h-8 w-8" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
