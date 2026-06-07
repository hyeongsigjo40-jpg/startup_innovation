"use client";

import Link from "next/link";
import { useState } from "react";
import { ResultData } from "@/data/results";

type Props = {
  result: ResultData;
};

export default function GiftPackageCard({ result }: Props) {
  const [src, setSrc] = useState(`/gifts/${result.type}.png`);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (src.endsWith(".png")) {
      setSrc(`/gifts/${result.type}.webp`);
    } else {
      setFailed(true);
    }
  };

  return (
    <div id="package" className="bg-white rounded-3xl shadow-md border border-[#E8D8C4] max-w-lg mx-auto overflow-hidden">

      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${result.typeName} 패키지`}
          className="w-full h-auto"
          onError={handleError}
        />
      )}

      <div className="p-8">
        <h2 className="text-xl font-bold text-[#3D2E1E] mb-2 text-center">🎁 {result.packageName}</h2>
        <p className="text-[#9C8B7A] text-sm text-center mb-6">이런 선물이 지금의 당신에게 잘 어울려요</p>
        <ul className="flex flex-col gap-3 mb-6">
          {result.packageItems.map((item, i) => (
            <li key={i} className="flex items-center gap-3 bg-[#F5EDD8] rounded-2xl px-4 py-3">
              <span className="text-[#C8845A] font-bold text-lg">✦</span>
              <span className="text-[#3D2E1E] text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/gift/${result.type}`}
          className="block w-full text-center bg-[#F5EDD8] text-[#C8845A] font-semibold py-3 rounded-3xl hover:bg-[#EDE0CA] transition-colors text-sm"
        >
          선물 패키지 자세히 보기 →
        </Link>
      </div>
    </div>
  );
}
