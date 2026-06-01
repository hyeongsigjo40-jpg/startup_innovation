import { ResultData } from "@/data/results";

type Props = {
  result: ResultData;
};

export default function GiftPackageCard({ result }: Props) {
  return (
    <div id="package" className="bg-white rounded-3xl p-8 shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-[#2F2A26] mb-2 text-center">🎁 {result.packageName}</h2>
      <p className="text-[#7A6F66] text-sm text-center mb-6">이런 선물이 지금의 당신에게 잘 어울려요</p>
      <ul className="flex flex-col gap-3">
        {result.packageItems.map((item, i) => (
          <li key={i} className="flex items-center gap-3 bg-[#FFF8EF] rounded-xl px-4 py-3">
            <span className="text-[#FF9F6E] font-bold text-lg">✦</span>
            <span className="text-[#2F2A26] text-sm font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
