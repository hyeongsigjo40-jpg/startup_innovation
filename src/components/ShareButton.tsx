"use client";

import { useState } from "react";
import { ResultData } from "@/data/results";

type Props = {
  result: ResultData;
};

export default function ShareButton({ result }: Props) {
  const [copied, setCopied] = useState(false);

  const resultUrl = typeof window !== "undefined"
    ? `${window.location.origin}/result?type=${result.type}`
    : `/result?type=${result.type}`;

  const shareText = `${result.shareText}\n${result.oneLiner}\n\n내 결과 보기:\n${resultUrl}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleShare}
        className="bg-[#C8845A] text-white font-semibold px-8 py-4 rounded-3xl shadow-md hover:bg-[#B5704A] transition-colors text-lg"
      >
        💌 친구에게 공유하기
      </button>
      {copied && (
        <p className="text-[#9C8B7A] text-sm bg-[#EDE0CA] px-4 py-2 rounded-2xl">
          링크가 복사됐어요!
        </p>
      )}
    </div>
  );
}
