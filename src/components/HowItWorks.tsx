const steps = [
  { emoji: "✏️", title: "7가지 질문에 답해요", desc: "지금 내 마음과 가장 가까운 보기를 선택해요." },
  { emoji: "🔍", title: "유형을 분석해요", desc: "답변을 바탕으로 지금 나에게 맞는 동물 유형을 찾아요." },
  { emoji: "🎁", title: "선물 패키지를 추천해요", desc: "유형에 딱 맞는 위로 선물 아이디어를 알려드려요." },
  { emoji: "💌", title: "친구에게 공유해요", desc: "링크를 보내서 친구의 유형도 알아볼 수 있어요." },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-16 bg-white">
      <h2 className="text-2xl font-bold text-[#3D2E1E] text-center mb-10">이렇게 사용해요</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#EDE0CA] flex items-center justify-center text-2xl">
              {step.emoji}
            </div>
            <p className="font-semibold text-[#3D2E1E] text-sm">{step.title}</p>
            <p className="text-[#9C8B7A] text-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
