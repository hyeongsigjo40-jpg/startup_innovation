import { ResultData } from "@/data/results";

type Props = {
  result: ResultData;
};

export default function ResultCard({ result }: Props) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md text-center max-w-lg mx-auto">
      <div className="text-7xl mb-4">{result.emoji}</div>
      <p className="text-[#C8845A] font-semibold text-sm mb-1">{result.typeName}</p>
      <h1 className="text-2xl font-bold text-[#3D2E1E] mb-4">{result.title}</h1>
      <p className="text-[#9C8B7A] text-sm mb-6 leading-relaxed">{result.oneLiner}</p>
      <p className="text-[#3D2E1E] text-sm leading-relaxed">{result.description}</p>
      <div className="mt-6 bg-[#F5EDD8] rounded-3xl px-6 py-4">
        <p className="text-[#C8845A] font-bold text-lg">💬 {result.comfort}</p>
      </div>
    </div>
  );
}
