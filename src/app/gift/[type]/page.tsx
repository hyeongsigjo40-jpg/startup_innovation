import Link from "next/link";
import { notFound } from "next/navigation";
import { results } from "@/data/results";
import { GiftType } from "@/data/questions";

const order: GiftType[] = ["cheetah", "rabbit", "cat", "hedgehog", "deer", "retriever"];

type Props = {
  params: Promise<{ type: string }>;
};

export function generateStaticParams() {
  return order.map((type) => ({ type }));
}

export async function generateMetadata({ params }: Props) {
  const { type } = await params;
  const result = results[type as GiftType];
  if (!result) return {};
  return {
    title: `${result.typeName} 선물 패키지 | 요즘 마음 테스트`,
    description: result.packageName,
  };
}

export default async function GiftDetailPage({ params }: Props) {
  const { type } = await params;
  const result = results[type as GiftType];
  if (!result) notFound();

  const currentIndex = order.indexOf(type as GiftType);
  const prevType = currentIndex > 0 ? order[currentIndex - 1] : null;
  const nextType = currentIndex < order.length - 1 ? order[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#FFF8EF]">
      <div className="max-w-lg mx-auto px-6 py-12">

        {/* 뒤로가기 */}
        <Link href="/gift" className="text-[#7A6F66] text-sm mb-8 inline-block">
          ← 유형 목록으로
        </Link>

        {/* 유형 헤더 */}
        <div className="text-center mb-8">
          <div className="text-7xl mb-3">{result.emoji}</div>
          <p className="text-[#FF9F6E] font-semibold text-sm mb-1">{result.typeName}</p>
          <h1 className="text-2xl font-bold text-[#2F2A26] mb-3">{result.title}</h1>
          <p className="text-[#7A6F66] text-sm leading-relaxed">{result.oneLiner}</p>
        </div>

        {/* 이미지 영역 */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
          <div className="w-full aspect-square bg-[#FFF0E6] flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[#FFD0B0]">
            <span className="text-5xl opacity-40">{result.emoji}</span>
            <p className="text-[#FFB08A] text-sm font-medium">패키지 이미지</p>
            <p className="text-[#FFB08A] text-xs">이미지를 추가해주세요</p>
          </div>
        </div>

        {/* 위로 문구 */}
        <div className="bg-[#FFF0E6] rounded-2xl px-6 py-5 mb-6 text-center">
          <p className="text-[#7A6F66] text-xs mb-2">지금 필요한 위로</p>
          <p className="text-[#2F2A26] font-semibold text-lg leading-snug">
            💬 {result.comfort}
          </p>
        </div>

        {/* 패키지 구성 */}
        <div className="bg-white rounded-2xl shadow-sm px-6 py-6 mb-6">
          <h2 className="font-bold text-[#2F2A26] text-lg mb-1">🎁 {result.packageName}</h2>
          <p className="text-[#7A6F66] text-xs mb-5">이런 선물이 지금의 친구에게 잘 어울려요</p>
          <div className="flex flex-col gap-3">
            {result.packageItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#FFF8EF] rounded-xl px-4 py-3"
              >
                <span className="text-[#FF9F6E]">✦</span>
                <span className="text-[#2F2A26] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 유형 설명 */}
        <div className="bg-white rounded-2xl shadow-sm px-6 py-6 mb-8">
          <h2 className="font-bold text-[#2F2A26] mb-3">지금 친구의 상태는</h2>
          <p className="text-[#7A6F66] text-sm leading-relaxed">{result.description}</p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 items-center">
          <Link
            href="/test"
            className="w-full bg-[#FF9F6E] text-white font-semibold px-6 py-4 rounded-2xl text-center shadow-md hover:bg-[#ff8a50] transition-colors"
          >
            💌 친구에게 테스트 링크 보내기
          </Link>
          <Link href="/gift" className="text-[#7A6F66] text-sm underline">
            다른 유형 선물 보기
          </Link>
        </div>

        {/* 이전/다음 유형 네비게이션 */}
        <div className="flex justify-between mt-10 pt-6 border-t border-[#F0E8DF]">
          {prevType ? (
            <Link href={`/gift/${prevType}`} className="flex items-center gap-2 text-[#7A6F66] text-sm hover:text-[#2F2A26]">
              <span>←</span>
              <span>{results[prevType].emoji} {results[prevType].typeName}</span>
            </Link>
          ) : <div />}
          {nextType ? (
            <Link href={`/gift/${nextType}`} className="flex items-center gap-2 text-[#7A6F66] text-sm hover:text-[#2F2A26]">
              <span>{results[nextType].emoji} {results[nextType].typeName}</span>
              <span>→</span>
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  );
}
