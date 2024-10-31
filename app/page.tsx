"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchParamsComponent() {
  const params = useSearchParams();
  return (
    <>
      <Button variant="success" className="w-48" asChild>
        <Link href={params.get("successUrl") || ""}>Success</Link>
      </Button>
      <Button variant="destructive" className="w-48" asChild>
        <Link href={params.get("failureUrl") || ""}>Failure</Link>
      </Button>
    </>
  );
}

export default function Home() {
  const params = useSearchParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
          <h1 className="text-2xl font-bold text-center sm:text-left">
            This is a test website for testing a redirect page
          </h1>
          <SearchParamsComponent />
        </main>
      </div>
    </Suspense>
  );
}
