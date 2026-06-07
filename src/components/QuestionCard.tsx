"use client";

import { Question, GiftType } from "@/data/questions";

type Props = {
  question: Question;
  onSelect: (type: GiftType) => void;
};

const optionLabels = ["A", "B", "C", "D", "E", "F"];

export default function QuestionCard({ question, onSelect }: Props) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-[#3D2E1E] mb-6 leading-snug">{question.title}</h2>
      <div className="flex flex-col gap-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(opt.type)}
            className="w-full text-left bg-white border-2 border-transparent rounded-2xl px-5 py-4 text-[#3D2E1E] text-sm font-medium shadow-sm hover:border-[#C8845A] hover:bg-[#F5EDD8] transition-all"
          >
            <span className="text-[#C8845A] font-bold mr-2">{optionLabels[i]}.</span>
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
