"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
          <Image src="/clippy.gif" alt="Clippy" width={100} height={120} unoptimized />
        </div>
      </div>
    </div>
  );
}
