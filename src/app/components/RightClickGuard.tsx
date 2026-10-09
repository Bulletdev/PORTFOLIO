"use client";

import { useEffect, useState } from "react";

const DIALOG_W = 300;
const DIALOG_H = 148;

export function RightClickGuard() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    function onContextMenu(e: MouseEvent) {
      e.preventDefault();
      const x = Math.min(e.clientX, window.innerWidth - DIALOG_W - 12);
      const y = Math.min(e.clientY, window.innerHeight - DIALOG_H - 12);
      setPos({ x: Math.max(12, x), y: Math.max(12, y) });
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setPos(null);
    }
    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (!pos) return null;

  return (
    <div className="winerr-backdrop" onMouseDown={() => setPos(null)}>
      <div
        className="winerr"
        style={{ left: pos.x, top: pos.y }}
        onMouseDown={(e) => e.stopPropagation()}
        role="alertdialog"
        aria-label="Access is denied"
      >
        <div className="winerr-title">
          <span>System Error</span>
          <button className="winerr-x" onClick={() => setPos(null)} aria-label="Close">
            ×
          </button>
        </div>
        <div className="winerr-body">
          <div className="winerr-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="30" height="30">
              <circle cx="12" cy="12" r="11" fill="#d92b2b" />
              <path
                d="M8 8L16 16M16 8L8 16"
                stroke="#fff"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p>
            Access is denied.
            <br />
            This action has been logged.
          </p>
        </div>
        <div className="winerr-actions">
          <button className="winerr-ok" onClick={() => setPos(null)}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
