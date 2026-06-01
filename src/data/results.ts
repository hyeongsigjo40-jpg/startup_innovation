import { GiftType } from "./questions";

export type ResultData = {
  type: GiftType;
  emoji: string;
  typeName: string;
  title: string;
  oneLiner: string;
  description: string;
  comfort: string;
  packageName: string;
  packageItems: string[];
  shareText: string;
};

export const results: Record<GiftType, ResultData> = {
  cheetah: { type: "cheetah" as const,
    emoji: "🐆",
    typeName: "치타형",
    title: "너무 오래 달려온 치타형",
    oneLiner: "계속 달려오느라, 잠시 멈추는 법을 잊어버린 상태에 가까워요.",
    description:
      "요즘의 당신은 해야 할 일과 책임을 먼저 떠올리는 시간이 많았을 수 있어요. 쉬고 있어도 마음 한쪽에서는 계속 다음 일을 생각하고, 멈추면 뒤처질 것 같은 느낌이 들었을지도 몰라요. 지금 필요한 건 더 열심히 하라는 말보다, 잠깐 꺼져도 괜찮다는 허락에 가까워요.",
    comfort: "오늘은 꺼져도 괜찮아.",
    packageName: "잠시 꺼져도 괜찮은 선물",
    packageItems: ["수면안대", "허브티", "수면양말", "따뜻한 간식", "회복 메시지 카드"],
    shareText: "나 치타형 나왔어 🐆 요즘 너무 달렸나 봄 ㅋㅋ",
  },
  rabbit: { type: "rabbit" as const,
    emoji: "🐇",
    typeName: "토끼형",
    title: "생각이 많아진 토끼형",
    oneLiner: "작은 일에도 마음이 먼저 뛰고, 머릿속이 쉽게 복잡해지는 상태에 가까워요.",
    description:
      "요즘의 당신은 아직 일어나지 않은 일까지 미리 걱정하거나, 사소한 신호에도 예민하게 반응하고 있을 수 있어요. 괜찮다고 말해도 속으로는 계속 긴장하고 있었을지도 몰라요. 지금 필요한 건 문제를 당장 해결하는 말보다, 마음의 속도를 조금 늦춰주는 위로예요.",
    comfort: "괜찮아. 지금은 마음의 조도를 낮춰도 돼.",
    packageName: "마음의 조도를 낮추는 선물",
    packageItems: ["미니 무드등", "허브티", "촉감 오브제", "미니 룸스프레이", "호흡 카드"],
    shareText: "나 토끼형 나왔어 🐇 생각 많은 거 들킨 듯 ㅋㅋ",
  },
  cat: { type: "cat" as const,
    emoji: "🐱",
    typeName: "뚱냥이형",
    title: "일상이 멈춘 것 같은 뚱냥이형",
    oneLiner: "큰일이 있는 건 아닌데, 뭔가 재미도 의욕도 잘 생기지 않는 상태에 가까워요.",
    description:
      "요즘의 당신은 뭘 해도 조금 시큰둥하고, 쉬어도 개운하지 않고, 시간을 흘려보내는 일이 많았을 수 있어요. 거창한 변화보다 필요한 건 아주 작고 귀여운 자극일지도 몰라요. 지금은 다시 열심히 살라는 말보다, 일상에 작은 재미를 하나 얹어주는 위로가 어울려요.",
    comfort: "큰 변화 말고, 작은 재미부터 다시 시작해보자.",
    packageName: "작은 재미를 깨우는 선물",
    packageItems: ["귀여운 소품", "작은 취미 키트", "간식", "노트/스티커", "기분전환 미션 카드"],
    shareText: "나 뚱냥이형 나왔어 🐱 요즘 그냥 누워있고 싶긴 함 ㅋㅋ",
  },
  hedgehog: { type: "hedgehog" as const,
    emoji: "🦔",
    typeName: "고슴도치형",
    title: "조용히 곁이 필요한 고슴도치형",
    oneLiner: "혼자 버티는 시간이 길어져, 누군가의 따뜻한 존재감이 필요한 상태에 가까워요.",
    description:
      "요즘의 당신은 누군가와 연결되고 싶지만, 먼저 기대거나 연락하기는 조금 망설여졌을 수 있어요. 혼자 있는 시간이 편한 것 같으면서도, 사실 마음 한쪽에서는 누가 조용히 곁에 있어주길 바랐을지도 몰라요. 지금 필요한 건 시끄러운 응원보다, 혼자가 아니라는 감각이에요.",
    comfort: "나는 네 곁에 있어.",
    packageName: "조용히 곁에 있는 선물",
    packageItems: ["감성 무드등", "포근한 미니 담요", "머그컵", "편지 카드", "사진/기억 오브제"],
    shareText: "나 고슴도치형 나왔어 🦔 좀 맞는 듯…ㅋㅋ",
  },
  deer: { type: "deer" as const,
    emoji: "🦌",
    typeName: "사슴형",
    title: "자기확신이 필요한 사슴형",
    oneLiner: "스스로를 조금 작게 느끼고, 내 선택을 믿기 어려운 상태에 가까워요.",
    description:
      "요즘의 당신은 내가 잘하고 있는지, 내가 충분한 사람인지 자꾸 확인하고 싶었을 수 있어요. 작은 말에도 마음이 움츠러들고, 선택 앞에서 다른 사람의 시선을 먼저 살폈을지도 몰라요. 지금 필요한 건 평가나 조언보다, 당신이 이미 괜찮은 사람이라는 조심스러운 확인이에요.",
    comfort: "너는 네가 생각하는 것보다 괜찮아.",
    packageName: "너의 고요한 빛을 위한 선물",
    packageItems: ["메시지 카드", "향", "작은 장식품", "자기돌봄 키트", "기분전환 아이템"],
    shareText: "나 사슴형 나왔어 🦌 요즘 좀 쫄아있었나 봄 ㅋㅋ",
  },
  retriever: { type: "retriever" as const,
    emoji: "🐶",
    typeName: "리트리버형",
    title: "가벼운 즐거움이 어울리는 리트리버형",
    oneLiner: "무거운 위로보다, 함께 웃을 수 있는 작은 즐거움이 잘 어울리는 상태예요.",
    description:
      "요즘의 당신은 크게 무너지기보다, 나름대로 균형을 잡으며 지내고 있는 상태에 가까워요. 깊고 무거운 위로보다는 맛있는 것, 즐거운 약속, 가볍게 웃을 수 있는 시간이 더 잘 맞을 수 있어요. 지금 필요한 건 걱정보다 즐거운 제안에 가까워요.",
    comfort: "우리 맛있는 거 먹으러 가자.",
    packageName: "같이 웃는 작은 선물",
    packageItems: ["디저트 쿠폰", "간식 세트", "카페 쿠폰", "귀여운 메시지 카드", "같이 즐길 수 있는 선물"],
    shareText: "나 리트리버형 나왔어 🐶 맛있는 거 먹으러 가자는 뜻인가 ㅋㅋ",
  },
};
