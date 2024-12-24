import { createCanvas, loadImage, registerFont } from "canvas";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("imageUrl");
  const mainColor = searchParams.get("mainColor");
  const projectName = searchParams.get("projectName");

  if (!imageUrl) {
    return new Response(JSON.stringify({ error: "Missing imageUrl" }), {
      status: 400,
    });
  }

  try {
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Failed to get 2D context");
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, canvas.height * 0.4, 0, 0);
    gradient.addColorStop(0, mainColor || "#000");
    gradient.addColorStop(1, "black");

    ctx.fillStyle = gradient;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const image = await loadImage(imageUrl);

    const logoSize = 93;

    const gap = 10;

    ctx.drawImage(
      image,
      canvas.width / 2 - logoSize / 2,
      canvas.height / 2 - logoSize - gap / 2,
      logoSize,
      logoSize
    );

    registerFont(
      path.join(__dirname, "./../../../../../public/fonts/", "BowlbyOne.ttf"),
      { family: "BowlbyOne" }
    );

    ctx.font = '3rem "BowlbyOne, sans-serif"';
    ctx.fillStyle = "white";

    ctx.textAlign = "center";
    ctx.fillText(
      projectName || "Burneeble",
      canvas.width / 2,
      canvas.height / 2 + 60 + gap / 2
    );

    const buffer = canvas.toBuffer("image/png");

    return new Response(buffer, {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": "inline",
      },
    });
  } catch (error) {
    console.error("Error generating image:", error);
    return new Response(JSON.stringify({ error: "Error processing image" }), {
      status: 500,
    });
  }
}
