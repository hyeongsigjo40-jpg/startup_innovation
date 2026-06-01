import { results } from "@/data/results";
import { GiftType } from "@/data/questions";

const order: GiftType[] = ["cheetah", "rabbit", "cat", "hedgehog", "deer", "retriever"];

export default function TypePreview() {
  return (
    <section className="px-6 py-16 bg-[#FFF8EF]">
      <h2 className="text-2xl font-bold text-[#2F2A26] text-center mb-10">6가지 선물 유형</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {order.map((key) => {
          const r = results[key];
          return (
            <div
              key={key}
              className="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center text-center gap-2"
            >
              <span className="text-4xl">{r.emoji}</span>
              <p className="font-bold text-[#2F2A26]">{r.typeName}</p>
              <p className="text-[#7A6F66] text-xs leading-snug">{r.oneLiner}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
