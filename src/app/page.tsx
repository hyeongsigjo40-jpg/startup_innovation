import Link from "next/link";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TypePreview from "@/components/TypePreview";

const situations = [
  { emoji: "🤔", text: "뭘 좋아하는지 모르겠어서 기프티콘만 보냈을 때" },
  { emoji: "💸", text: "선물 받고 감사해하는데 정작 안 쓰는 것 같을 때" },
  { emoji: "🥺", text: "요즘 힘들어 보이는 친구에게 뭔가 해주고 싶을 때" },
  { emoji: "🎁", text: "기념일인데 의미 있는 선물이 떠오르지 않을 때" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5EDD8]">
      <Hero />

      {/* Problem empathy */}
      <section className="px-6 py-16 bg-white">
        <h2 className="text-2xl font-bold text-[#3D2E1E] text-center mb-3">
          기프티콘 하나로는 마음이 조금 부족할 때가 있어요
        </h2>
        <p className="text-[#9C8B7A] text-center mb-10 text-sm">
          상대방의 요즘 마음을 알면, 선물이 달라져요
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {situations.map((s, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-[#F5EDD8] rounded-3xl px-5 py-4"
            >
              <span className="text-2xl">{s.emoji}</span>
              <p className="text-[#3D2E1E] text-sm leading-snug">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <HowItWorks />
      <TypePreview />

      {/* Final CTA */}
      <section className="px-6 py-20 bg-white text-center">
        <div className="text-5xl mb-4">💭</div>
        <h2 className="text-2xl font-bold text-[#3D2E1E] mb-3">
          지금 떠오르는 사람이 있나요?
        </h2>
        <p className="text-[#9C8B7A] mb-8 text-sm">
          먼저 나의 유형을 알아보고, 친구에게도 공유해봐요
        </p>
        <Link
          href="/test"
          className="inline-block bg-[#C8845A] text-white text-lg font-semibold px-8 py-4 rounded-3xl shadow-md hover:bg-[#B5704A] transition-colors"
        >
          테스트 시작하기
        </Link>
      </section>
    </main>
  );
}
