export default function Footer() {
    return (
      <footer
        style={{
          background: "#1a1208",
          color: "#ccc",
          padding: "48px 40px 28px",
          marginTop: 80,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div>
            <h3 style={{ color: "#fff", fontWeight: 900, fontSize: 20, margin: "0 0 12px" }}>
              KAYU<span style={{ color: "#c8a96e" }}>NUSANTARA</span>
            </h3>
            <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              Furnitur premium berkualitas tinggi dari tangan pengrajin lokal terbaik Indonesia.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#fff", margin: "0 0 12px" }}>Kategori</h4>
            {["Living Room", "Bedroom", "Dining", "Office"].map((c) => (
              <p key={c} style={{ margin: "0 0 6px", fontSize: 13 }}>{c}</p>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#fff", margin: "0 0 12px" }}>Kontak</h4>
            <p style={{ margin: "0 0 6px", fontSize: 13 }}>📍 Bandung, Jawa Barat</p>
            <p style={{ margin: "0 0 6px", fontSize: 13 }}>📞 (022) 1234-5678</p>
            <p style={{ margin: 0, fontSize: 13 }}>✉️ hello@kayunusantara.id</p>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 20,
            textAlign: "center",
            fontSize: 12,
            color: "#666",
          }}
        >
          © 2026 KayuNusantara. Dibuat dengan ❤️ di Indonesia.
        </div>
      </footer>
    );
  }