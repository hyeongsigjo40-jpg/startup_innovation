export type GiftType = "cheetah" | "rabbit" | "cat" | "hedgehog" | "deer" | "retriever";

export type QuestionOption = { label: string; type: GiftType };
export type Question = { id: number; title: string; options: QuestionOption[]; weight?: number };

export const questions: Question[] = [
  {
    id: 1,
    title: "아침에 눈을 떴을 때, 가장 가까운 생각은?",
    options: [
      { label: "오늘도 할 일이 많다. 일단 빨리 움직여야 할 것 같다.", type: "cheetah" },
      { label: "오늘 별일 없었으면 좋겠다. 시작 전부터 괜히 긴장된다.", type: "rabbit" },
      { label: "몸이 무겁고, 조금만 더 누워 있고 싶다.", type: "cat" },
      { label: "또 비슷한 하루구나. 누가 먼저 연락해줬으면 좋겠다.", type: "hedgehog" },
      { label: "오늘도 내가 잘 해낼 수 있을지 모르겠다.", type: "deer" },
      { label: "오늘도 무사히 잘 시작해봐야겠다.", type: "retriever" },
    ],
  },
  {
    id: 2,
    title: "처리해야 할 일이 갑자기 몰려올 때 나는?",
    options: [
      { label: "일단 다 끝내버리려고 몰아붙인다. 쉬는 건 나중 일이다.", type: "cheetah" },
      { label: "뭐부터 해야 할지 몰라 머릿속이 복잡해진다.", type: "rabbit" },
      { label: "에너지가 뚝 떨어져서 일단 미루고 싶어진다.", type: "cat" },
      { label: "이걸 나 혼자 감당해야 하나 싶어진다.", type: "hedgehog" },
      { label: "실수할까 봐 시작하기 전부터 망설인다.", type: "deer" },
      { label: "우선순위를 정하고 하나씩 처리하려고 한다.", type: "retriever" },
    ],
  },
  {
    id: 3,
    title: "온전히 나를 위해 쓸 수 있는 주말, 나는 주로?",
    options: [
      { label: "쉬어야 하는데도 밀린 일이나 계획을 먼저 떠올린다.", type: "cheetah" },
      { label: "쉬는 중에도 내일 걱정이나 해야 할 일이 계속 생각난다.", type: "rabbit" },
      { label: "침대에 누워 쇼츠나 SNS를 보며 시간을 흘려보낸다.", type: "cat" },
      { label: "누군가 만나고 싶지만 막상 연락하기는 망설여진다.", type: "hedgehog" },
      { label: "남들은 잘 사는 것 같은데 나만 제자리인 것 같아 비교하게 된다.", type: "deer" },
      { label: "맛있는 걸 먹거나 푹 쉬면서 가볍게 충전한다.", type: "retriever" },
    ],
  },
  {
    id: 4,
    title: "친한 사람이 '요즘 어떻게 지내?'라고 물으면, 내 속마음은?",
    options: [
      { label: "바쁘게 지내는데, 사실 꽤 지쳐 있다.", type: "cheetah" },
      { label: "괜찮다고 말하지만 속으로는 계속 불안하다.", type: "rabbit" },
      { label: "그냥 다 귀찮고 별 재미가 없다.", type: "cat" },
      { label: "나만 혼자 떨어져 있는 느낌이 든다.", type: "hedgehog" },
      { label: "내가 잘하고 있는 건지 확신이 없다.", type: "deer" },
      { label: "나름 괜찮게 지내고 있다.", type: "retriever" },
    ],
  },
  {
    id: 5,
    title: "스트레스를 받을 때 가장 먼저 나타나는 신호는?",
    options: [
      { label: "어깨나 목이 굳고, 피로가 잘 풀리지 않는다.", type: "cheetah" },
      { label: "작은 자극에도 예민해지고 잠이 잘 오지 않는다.", type: "rabbit" },
      { label: "몸에 힘이 빠지고 아무것도 하기 싫어진다.", type: "cat" },
      { label: "마음이 허전해서 괜히 뭔가를 먹거나 찾게 된다.", type: "hedgehog" },
      { label: "눈치를 보게 되고, 말이나 표정이 조심스러워진다.", type: "deer" },
      { label: "조금 쉬거나 자고 나면 금방 회복되는 편이다.", type: "retriever" },
    ],
  },
  {
    id: 6,
    title: "중요한 선택을 해야 할 때 나를 가장 지배하는 생각은?",
    options: [
      { label: "완벽하게 골라야 한다. 실패하면 안 된다.", type: "cheetah" },
      { label: "잘못되면 어떡하지, 최악의 상황부터 떠오른다.", type: "rabbit" },
      { label: "고르는 것조차 귀찮고 에너지가 든다.", type: "cat" },
      { label: "어차피 내가 뭘 고르든 크게 관심 없을 것 같다.", type: "hedgehog" },
      { label: "내 선택이 틀릴까 봐 다른 사람 의견을 계속 찾아본다.", type: "deer" },
      { label: "해보고 아니면 고치면 된다고 생각한다.", type: "retriever" },
    ],
  },
  {
    id: 7,
    title: "지금 나에게 가장 필요한 위로는?",
    weight: 2,
    options: [
      { label: "잠시 모든 짐을 내려놓고 쉬어도 된다는 위로", type: "cheetah" },
      { label: "복잡한 생각과 긴장을 가라앉혀주는 위로", type: "rabbit" },
      { label: "멈춘 일상에 작은 재미를 더해주는 위로", type: "cat" },
      { label: "혼자가 아니라는 느낌을 주는 위로", type: "hedgehog" },
      { label: "나를 다시 믿게 해주는 위로", type: "deer" },
      { label: "가볍게 기분 좋아지는 위로", type: "retriever" },
    ],
  },
];
