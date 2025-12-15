"use client";
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #0f172a, #2563eb)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
       <i>shareEKart</i> - Pick My Donation
      </h1>

      <p>This acts like a matchmaker between donors and causes.</p>
      <p>.</p>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
       <p>
      A simple platform concept built using React and Next.js to demonstrate
       clean UI, component structure, and deployment.
       </p>
        It explains what my product or idea does in short.
      </p>
      <div style={{ marginTop: "2rem", maxWidth: "700px" }}>
  <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
    Why this project?
  </h2>

  <ul style={{ listStyle: "none", padding: 0, fontSize: "1.05rem" }}>
    <li>✔ Clean and beginner-friendly structure</li>
    <li>✔ Deployed on Vercel</li>
  </ul>
</div>


     <button
  style={{
    marginTop: "2rem",
    padding: "0.8rem 1.5rem",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#facc15",
    color: "#000",
    fontSize: "1rem",
    cursor: "pointer",
  }}
>
  Get Started
</button>

<footer
  style={{
    marginTop: "3rem",
    fontSize: "0.9rem",
    opacity: 0.8,
  }}
>
  © 2025 • Built with React & Next.js • SoniG
</footer>

    </main>
  );
}
