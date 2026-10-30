import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "radial-gradient(circle at 15% 20%, #3b1f6e 0%, #07070d 55%)",
          color: "#ececf4",
        }}
      >
        <div style={{ fontSize: 30, color: "#ec4899", letterSpacing: 6, textTransform: "uppercase" }}>{profile.title}</div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 16 }}>{profile.name}</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#b9b9d0", maxWidth: 900 }}>{profile.headline}</div>
        <div style={{ display: "flex", marginTop: 48, height: 10, width: 360, borderRadius: 10, background: "linear-gradient(90deg,#8b5cf6,#ec4899,#22d3ee)" }} />
      </div>
    ),
    size,
  );
}
