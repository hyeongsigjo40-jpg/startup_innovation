import { Metadata } from "next";
import { results } from "@/data/results";
import { GiftType } from "@/data/questions";
import ResultClient from "./ResultClient";

type Props = {
  searchParams: Promise<{ type?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { type } = await searchParams;
  const result = type && results[type as GiftType] ? results[type as GiftType] : results["retriever"];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  const ogImage = `${baseUrl}/og?type=${result.type}`;

  return {
    title: `${result.title} | 요즘 마음 테스트`,
    description: result.oneLiner,
    openGraph: {
      title: result.title,
      description: result.oneLiner,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: result.title,
      description: result.oneLiner,
      images: [ogImage],
    },
  };
}

export default function ResultPage() {
  return <ResultClient />;
}
