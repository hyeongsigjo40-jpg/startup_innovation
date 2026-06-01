"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions, GiftType } from "@/data/questions";
import { calculateResult } from "@/utils/calculateResult";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<GiftType[]>([]);

  const handleSelect = (type: GiftType) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateResult(newAnswers);
      router.push(`/result?type=${result}`);
    }
  };

  const handleBack = () => {
    if (currentQuestion === 0) {
      router.push("/");
    } else {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const q = questions[currentQuestion];

  return (
    <main className="min-h-screen bg-[#FFF8EF] flex flex-col px-6 py-10">
      <div className="max-w-lg mx-auto w-full flex-1 flex flex-col">
        <button
          onClick={handleBack}
          className="text-[#7A6F66] text-sm mb-6 flex items-center gap-1 hover:text-[#2F2A26] transition-colors self-start"
        >
          ← 뒤로
        </button>
        <ProgressBar current={currentQuestion + 1} total={questions.length} />
        <QuestionCard question={q} onSelect={handleSelect} />
      </div>
    </main>
  );
}
