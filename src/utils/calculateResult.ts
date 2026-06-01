import { GiftType } from "@/data/questions";

export function calculateResult(answers: GiftType[]): GiftType {
  const tiebreakPriority: GiftType[] = ["rabbit", "cheetah", "hedgehog", "deer", "cat", "retriever"];

  const counts: Record<GiftType, number> = {
    cheetah: 0,
    rabbit: 0,
    cat: 0,
    hedgehog: 0,
    deer: 0,
    retriever: 0,
  };

  // Q1-Q6: weight 1 each (answers[0..5])
  for (let i = 0; i < 6; i++) {
    counts[answers[i]] += 1;
  }

  // Q7: weight 2 (answers[6])
  if (answers[6]) {
    counts[answers[6]] += 2;
  }

  const maxCount = Math.max(...Object.values(counts));
  const tied = (Object.keys(counts) as GiftType[]).filter((k) => counts[k] === maxCount);

  if (tied.length === 1) return tied[0];

  // Tiebreak: prefer Q7 answer first
  const q7Answer = answers[6];
  if (q7Answer && tied.includes(q7Answer)) return q7Answer;

  // Then priority array
  for (const type of tiebreakPriority) {
    if (tied.includes(type)) return type;
  }

  return tied[0];
}
