import { ResultData } from "@/data/results";

type Props = {
  result: ResultData;
};

export default function GiftPackageCard({ result }: Props) {
  return (
    <div id="package" className="bg-white rounded-3xl p-8 shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-[#3D2E1E] mb-2 text-center">🎁 {result.packageName}</h2>
      <p className="text-[#9C8B7A] text-sm text-center mb-6">이런 선물이 지금의 당신에게 잘 어울려요</p>
      <ul className="flex flex-col gap-3">
        {result.packageItems.map((item, i) => (
          <li key={i} className="flex items-center gap-3 bg-[#F5EDD8] rounded-xl px-4 py-3">
            <span className="text-[#C8845A] font-bold text-lg">✦</span>
            <span className="text-[#3D2E1E] text-sm font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
