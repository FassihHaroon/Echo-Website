import { ImageResponse } from "next/og";

export const alt = "Cosecant — Industrial AI Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          backgroundColor: "#090909",
          color: "#f5f5f3",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 600,
            letterSpacing: -2,
          }}
        >
          Cosecant
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            color: "#b8b8b8",
          }}
        >
          Industrial AI software for real businesses.
        </div>
      </div>
    ),
    { ...size }
  );
}
