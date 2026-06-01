import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { results } from "@/data/results";
import { GiftType } from "@/data/questions";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url);
  const type = searchParams.get("type") as GiftType | null;
  const result = type && results[type] ? results[type] : results["retriever"];

  const fontData = await fetch(`${origin}/NotoSansKR-Bold.woff2`).then((r) =>
    r.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFF8EF",
          padding: "60px",
          gap: "24px",
          fontFamily: "Noto Sans KR",
        }}
      >
        <div style={{ fontSize: 120 }}>{result.emoji}</div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#2F2A26",
            textAlign: "center",
          }}
        >
          {result.title}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#7A6F66",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          {result.oneLiner}
        </div>
        <div
          style={{
            marginTop: 16,
            background: "#FF9F6E",
            color: "white",
            fontSize: 26,
            fontWeight: 600,
            padding: "14px 40px",
            borderRadius: 20,
          }}
        >
          요즘 마음 테스트
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans KR",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
