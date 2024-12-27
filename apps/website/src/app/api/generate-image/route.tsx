import { ImageResponse } from "@vercel/og";
import { headers } from "next/headers";

export const runtime = "edge";

const getHost = () => {
  const currentHost = headers().get("host");
  const protocol = currentHost?.startsWith("localhost") ? "http" : "https";

  if (!currentHost) {
    throw new Error("Host unavailable");
  }

  return `${protocol}://${currentHost}`;
};

const fetchFont = async () => {
  const fontUrl = new URL("/fonts/BowlbyOne.ttf", getHost());
  const res = await fetch(fontUrl.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch font: ${res.statusText}`);
  }
  return res.arrayBuffer();
};

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

  if (!mainColor) {
    return new Response(JSON.stringify({ error: "Missing mainColor" }), {
      status: 400,
    });
  }

  if (!projectName) {
    return new Response(JSON.stringify({ error: "Missing projectName" }), {
      status: 400,
    });
  }

  try {
    const bowlbyOne = await fetchFont();

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
                src={imageUrl}
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
                    color: mainColor,
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
