import Link from "next/link";
import { results } from "@/data/results";
import { GiftType } from "@/data/questions";

const order: GiftType[] = ["cheetah", "rabbit", "cat", "hedgehog", "deer", "retriever"];

export default function TypePreview() {
  return (
    <section className="px-6 py-16 bg-[#FFF8EF]">
      <h2 className="text-2xl font-bold text-[#2F2A26] text-center mb-2">6가지 심리 유형</h2>
      <p className="text-[#7A6F66] text-center text-sm mb-10">친구가 어떤 유형인지 알면, 선물이 달라져요</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
        {order.map((key) => {
          const r = results[key];
          return (
            <Link
              key={key}
              href={`/gift/${key}`}
              className="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow"
            >
              <span className="text-4xl">{r.emoji}</span>
              <p className="font-bold text-[#2F2A26]">{r.typeName}</p>
              <p className="text-[#7A6F66] text-xs leading-snug">{r.oneLiner}</p>
            </Link>
          );
        })}
      </div>
      <div className="text-center">
        <Link
          href="/gift"
          className="inline-block bg-[#2F2A26] text-white text-base font-semibold px-8 py-4 rounded-2xl shadow-md hover:bg-[#46403a] transition-colors"
        >
          🎁 내 친구한테 필요한 선물 확인하기
        </Link>
      </div>
    </section>
  );
}
