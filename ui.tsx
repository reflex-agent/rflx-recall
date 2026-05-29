/**
 * Recall Engine is a mostly-headless utility — its value is delivered through
 * the /recall slash command, the morning "Loose Ends" workflow, and the
 * dashboard card. This page is a light landing/help surface.
 */
export default function App() {
  return (
    <div
      style={{
        padding: 24,
        fontFamily: "system-ui, sans-serif",
        lineHeight: 1.55,
        maxWidth: 560,
      }}
    >
      <h2 style={{ margin: "0 0 8px", fontSize: 20 }}>🧠 Recall Engine</h2>
      <p style={{ margin: "0 0 12px" }}>
        Your whole past, queryable from chat.
      </p>
      <p style={{ margin: "0 0 6px" }}>
        Ask anything you&apos;ve discussed before:
      </p>
      <pre
        style={{
          background: "rgba(127,127,127,0.12)",
          padding: "8px 10px",
          borderRadius: 8,
          fontSize: 13,
          margin: "0 0 16px",
          whiteSpace: "pre-wrap",
        }}
      >
        /recall what did we decide about pricing?
      </pre>
      <p style={{ margin: 0, color: "#6b7280", fontSize: 14 }}>
        Every morning at 06:00 it scans your journals and conversations for
        threads you left open and posts them to the <b>Loose Ends</b> card on
        your dashboard.
      </p>
    </div>
  );
}
