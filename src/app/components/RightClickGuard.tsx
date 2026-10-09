"use client";

import { useEffect, useState } from "react";

function ClippySVG() {
  return (
    <svg width="72" height="112" viewBox="0 0 72 112" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* outer paperclip loop */}
      <path
        d="M58 98 Q68 98 68 82 L68 24 Q68 7 50 7 Q32 7 32 24 L32 76 Q32 87 41 87 Q50 87 50 76 L50 27"
        stroke="#d4a017"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      {/* eye whites */}
      <ellipse cx="40" cy="48" rx="7" ry="8" fill="white" />
      <ellipse cx="57" cy="48" rx="7" ry="8" fill="white" />
      {/* pupils */}
      <circle cx="41" cy="49" r="3.5" fill="#1a1a1a" />
      <circle cx="58" cy="49" r="3.5" fill="#1a1a1a" />
      {/* eye shine */}
      <circle cx="42.5" cy="47" r="1.3" fill="white" />
      <circle cx="59.5" cy="47" r="1.3" fill="white" />
      {/* eyebrows */}
      <path d="M34 40 Q40 36 46 40" stroke="#d4a017" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M51 40 Q57 36 63 40" stroke="#d4a017" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* smile */}
      <path d="M35 61 Q48 71 62 61" stroke="#d4a017" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function RightClickGuard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onContextMenu(e: MouseEvent) {
      e.preventDefault();
      setVisible(true);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setVisible(false);
    }
    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] cursor-default"
      onMouseDown={() => setVisible(false)}
    >
      <div
        className="absolute bottom-5 right-5 flex items-end gap-2"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* speech bubble */}
        <div className="clippy-bubble">
          It looks like you&apos;re trying to inspect the page!
          <br />
          Have you tried <strong>F12</strong>?&nbsp; I didn&apos;t see anything&nbsp;🤫
          <button
            className="clippy-bubble-close"
            onClick={() => setVisible(false)}
            aria-label="Close"
          >
            ×
          </button>
          {/* tail pointing right toward clippy */}
          <span className="clippy-bubble-tail" />
        </div>

        {/* Clippy */}
        <div className="clippy-bounce">
          <ClippySVG />
        </div>
      </div>
    </div>
  );
}
