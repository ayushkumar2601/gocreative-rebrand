import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const manifestPath = path.join(process.cwd(), "src/data/galleryManifest.json");
    if (fs.existsSync(manifestPath)) {
      const fileData = fs.readFileSync(manifestPath, "utf8");
      const jsonData = JSON.parse(fileData);
      return NextResponse.json(jsonData);
    }
    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json({ error: "Failed to read gallery manifest" }, { status: 500 });
  }
}
