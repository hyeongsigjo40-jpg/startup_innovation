import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-[#F5EDD8]">
      <div className="text-6xl mb-6">🎁</div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#3D2E1E] mb-4 leading-tight max-w-lg">
        상대의 요즘 마음을 물어보는<br />가장 귀여운 방법
      </h1>
      <p className="text-[#9C8B7A] text-lg mb-8 max-w-md">
        7가지 질문으로 찾아내는 지금 나에게 꼭 맞는 선물 유형
      </p>
      <Link
        href="/test"
        className="bg-[#C8845A] text-white text-lg font-semibold px-8 py-4 rounded-3xl shadow-md hover:bg-[#B5704A] transition-colors"
      >
        테스트 시작하기
      </Link>
    </section>
  );
}
