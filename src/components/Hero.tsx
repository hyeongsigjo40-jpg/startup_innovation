import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-[#FFF8EF]">
      <div className="text-6xl mb-6">🎁</div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#2F2A26] mb-4 leading-tight max-w-lg">
        상대의 요즘 마음을 물어보는<br />가장 귀여운 방법
      </h1>
      <p className="text-[#7A6F66] text-lg mb-8 max-w-md">
        7가지 질문으로 찾아내는 지금 나에게 꼭 맞는 선물 유형
      </p>
      <Link
        href="/test"
        className="bg-[#FF9F6E] text-white text-lg font-semibold px-8 py-4 rounded-2xl shadow-md hover:bg-[#ff8a50] transition-colors"
      >
        테스트 시작하기
      </Link>
    </section>
  );
}
