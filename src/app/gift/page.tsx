import Link from "next/link";
import { results } from "@/data/results";
import { GiftType } from "@/data/questions";

const order: GiftType[] = ["cheetah", "rabbit", "cat", "hedgehog", "deer", "retriever"];

export default function GiftPage() {
  return (
    <main className="min-h-screen bg-[#F5EDD8]">
      <div className="max-w-2xl mx-auto px-6 py-12">

        {/* 헤더 */}
        <div className="text-center mb-12">
          <Link href="/" className="text-[#9C8B7A] text-sm mb-6 inline-block">← 홈으로</Link>
          <div className="text-5xl mb-4">🎁</div>
          <h1 className="text-2xl font-bold text-[#3D2E1E] mb-3">
            친구의 유형에 맞는 선물을 찾아보세요
          </h1>
          <p className="text-[#9C8B7A] text-sm leading-relaxed">
            친구가 테스트 결과를 공유했다면,<br />
            아래에서 해당 유형을 골라 선물 패키지를 확인해보세요.
          </p>
        </div>

        {/* 유형 카드 목록 */}
        <div className="flex flex-col gap-4">
          {order.map((key) => {
            const r = results[key];
            return (
              <Link
                key={key}
                href={`/gift/${key}`}
                className="bg-white rounded-3xl px-6 py-5 shadow-sm border border-[#E8D8C4] flex items-center gap-5 hover:shadow-md transition-shadow"
              >
                <span className="text-5xl flex-shrink-0">{r.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#3D2E1E] mb-1">{r.typeName}</p>
                  <p className="text-[#9C8B7A] text-sm leading-snug line-clamp-2">{r.oneLiner}</p>
                </div>
                <span className="text-[#C8845A] text-lg flex-shrink-0">→</span>
              </Link>
            );
          })}
        </div>

        {/* 테스트 유도 */}
        <div className="mt-12 bg-white rounded-3xl p-6 text-center shadow-sm border border-[#E8D8C4]">
          <p className="text-[#3D2E1E] font-semibold mb-2">아직 결과를 모른다면?</p>
          <p className="text-[#9C8B7A] text-sm mb-5">친구에게 테스트 링크를 보내보세요</p>
          <Link
            href="/test"
            className="inline-block bg-[#C8845A] text-white font-semibold px-7 py-3 rounded-3xl hover:bg-[#B5704A] transition-colors"
          >
            테스트 시작하기
          </Link>
        </div>

      </div>
    </main>
  );
}
