import { ImageResponse } from "next/og";

export const alt =
  "Business Manager — shop and business software for sales, stock, customers, purchases and reports, works with no internet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bullets = [
  "Sales & billing",
  "Stock & expiry tracking",
  "Suppliers & purchases",
  "Customers & sales team",
  "Profit & loss reports"
];

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          padding: 72,
          color: "#0f172a"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)"
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#0f172a" }}>
              Business Manager
            </div>
            <div style={{ fontSize: 20, color: "#475569" }}>
              Shop &amp; Business Software
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -1,
              color: "#0f172a"
            }}
          >
            Run your shop faster — even without internet.
          </div>
          <div style={{ fontSize: 28, color: "#475569" }}>
            Sales, stock, purchases, customers and reports — kept together on
            your own computer.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {bullets.map((b) => (
            <div
              key={b}
              style={{
                display: "flex",
                padding: "12px 22px",
                borderRadius: 999,
                border: "1px solid #bfdbfe",
                background: "#ffffff",
                fontSize: 22,
                color: "#1e40af"
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
