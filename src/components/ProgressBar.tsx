type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const percent = (current / total) * 100;
  return (
    <div className="w-full max-w-lg mx-auto mb-8">
      <div className="flex justify-between text-sm text-[#7A6F66] mb-2">
        <span>{current} / {total}</span>
      </div>
      <div className="w-full h-2 bg-[#F0E6DC] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#FF9F6E] rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
