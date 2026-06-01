import { NextRequest, NextResponse } from "next/server";
import { results } from "@/data/results";
import { GiftType } from "@/data/questions";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") as GiftType | null;
  const resolvedType = type && results[type] ? type : "retriever";

  const filePath = path.join(process.cwd(), "public/og", `${resolvedType}.png`);
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
