"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { results } from "@/data/results";
import { GiftType } from "@/data/questions";
import ResultCard from "@/components/ResultCard";
import GiftPackageCard from "@/components/GiftPackageCard";
import ShareButton from "@/components/ShareButton";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const typeParam = searchParams.get("type") as GiftType | null;
  const result = typeParam && results[typeParam] ? results[typeParam] : results["retriever"];

  const scrollToPackage = () => {
    document.getElementById("package")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#F5EDD8] px-6 py-10">
      <div className="max-w-lg mx-auto flex flex-col gap-6">
        <ResultCard result={result} />

        <div className="flex flex-col gap-3 items-center">
          <button
            onClick={scrollToPackage}
            className="w-full max-w-xs bg-white border-2 border-[#C8845A] text-[#C8845A] font-semibold px-6 py-3 rounded-3xl hover:bg-[#EDE0CA] transition-colors"
          >
            🎁 추천 선물 보기
          </button>
          <ShareButton result={result} />
          <button
            onClick={() => router.push("/test")}
            className="text-[#9C8B7A] text-sm underline mt-1"
          >
            다시 테스트하기
          </button>
        </div>

        <GiftPackageCard result={result} />

        <div className="text-center pb-6">
          <button
            onClick={() => router.push("/")}
            className="text-[#9C8B7A] text-sm"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </main>
  );
}

export default function ResultClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5EDD8] flex items-center justify-center text-[#9C8B7A]">로딩 중...</div>}>
      <ResultContent />
    </Suspense>
  );
}
