// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import fetch from "node-fetch";

// export async function middleware(request: NextRequest) {
//   const url = request.nextUrl.clone();
//   const hostname = "test01.local";
//   const requestHeaders = new Headers(request.headers);

//   requestHeaders.set("host", hostname);

//   url.protocol = "http";
//   url.hostname = hostname;
//   url.port = "80";
//   url.pathname = request.nextUrl.pathname.replace(/^\/blog/, "");

//   // Convert Headers object to plain object
//   const headersInit: { [key: string]: string } = {
//     // @ts-ignore
//     getSetCookie: () => undefined,
//   };
//   // requestHeaders.forEach((value, key) => {
//   //   headersInit[key] = value;
//   // });

//   console.log("Forwarding request to", url.toString());
//   // Fetch the target server
//   try {
//     console.log(headersInit);
//     process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Ignore DEPTH_ZERO_SELF_SIGNED_CERT error
//     const res = await fetch(url.toString(), {
//       headers: headersInit,
//       method: request.method,
//       body: request.method === "POST" ? await request.text() : undefined,
//     });

//     const body = await res.text();

//     // Forward the response from the target server to the client
//     return new NextResponse(body, {
//       status: res.status,
//       statusText: res.statusText,
//       headers: res.headers,
//     });
//   } catch (e) {
//     console.error(e);
//     return new NextResponse("Internal Server Error", {
//       status: 500,
//     });
//   }
// }

// export const config = {
//   // Match all /blog/* paths
//   matcher: "/blog/:path*",
// };
