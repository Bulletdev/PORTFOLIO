"use client";

import Link from "next/link";

export function TryHackMeBadge() {
  return (
    <Link
      href="https://tryhackme.com/p/BulletOnRails"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "block", width: "100%", maxWidth: 450 }}
    >
      <iframe
        src="/thm-badge.html"
        scrolling="no"
        loading="lazy"
        title="TryHackMe Badge"
        tabIndex={-1}
        style={{
          border: "none",
          width: "100%",
          height: 170,
          overflow: "hidden",
          pointerEvents: "none",
          borderRadius: 12,
        }}
      />
    </Link>
  );
}
