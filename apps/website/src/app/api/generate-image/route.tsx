import { ImageResponse } from "@vercel/og";
import { headers } from "next/headers";

export const runtime = "edge";

let fontCache: ArrayBuffer | null = null;

const getHost = () => {
  const currentHost = headers().get("host");
  const protocol = currentHost?.startsWith("localhost") ? "http" : "https";

  if (!currentHost) {
    throw new Error("Host unavailable");
  }

  return `${protocol}://${currentHost}`;
};

const fetchFont = async (host: string) => {
  if (fontCache) return fontCache;

  const fontUrl = `${host}/fonts/BowlbyOne.ttf`;
  const res = await fetch(fontUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch font: ${res.statusText}`);
  }

  fontCache = await res.arrayBuffer();
  return fontCache;
};
const validateParams = (params: URLSearchParams) => {
  const requiredParams = ["imageUrl", "mainColor", "projectName"];
  const missing = requiredParams.filter((param) => !params.get(param));

  if (missing.length) {
    return new Response(
      JSON.stringify({ error: `Missing parameters: ${missing.join(", ")}` }),
      { status: 400 }
    );
  }

  return null;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const validationError = validateParams(searchParams);
  if (validationError) return validationError;

  const imageUrl = searchParams.get("imageUrl");
  const mainColor = searchParams.get("mainColor");
  const projectName = searchParams.get("projectName");

  try {
    const host = getHost();
    const bowlbyOne = await fetchFont(host);

    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, ${mainColor} 65%)`,
            position: "relative",
          }}
        >
          <img
            src={`${getHost()}/img/meta/logo.png`}
            style={{
              position: "absolute",
              width: "96px",
              height: "96px",
              right: "47px",
              top: "47px",
            }}
          />
          <div
            className="wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              width: "100%",
              height: "100%",
              gap: "10px",
            }}
          >
            <div
              className="project-info"
              style={{
                display: "flex",
                gap: "50px",
                alignItems: "center",
                justifyContent: "flex-start",
                marginLeft: "50px",
              }}
            >
              <img
                src={imageUrl!}
                style={{
                  width: "188px",
                  height: "188px",
                  margin: "11.5px 0",
                }}
              />
              <div
                className="texts"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "211px",
                }}
              >
                <h1
                  style={{
                    fontSize: "70px",
                    lineHeight: "42px",
                    color: "white",
                    fontFamily: "Bowlby One",
                  }}
                >
                  Explore
                </h1>
                <h1
                  style={{
                    fontSize: "100px",
                    lineHeight: "60px",
                    color: mainColor!,
                    fontFamily: "Bowlby One",
                  }}
                >
                  {projectName}
                </h1>
              </div>
            </div>
            <img
              src={`${getHost()}/img/meta/footer.png`}
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: "Bowlby One",
            data: bowlbyOne,
          },
        ],
        headers: {
          "Content-Type": "image/png",
          "Content-Disposition": "inline",
        },
      }
    );
  } catch (error) {
    console.error("Error generating image:", error);
    return new Response(JSON.stringify({ error: "Error processing image" }), {
      status: 500,
    });
  }
}
