import React from "react";

export default function Footer() {
  return (
    <div className="max-lg:col-span-1  max-lg:row-span-1 col-span-6 items-center text-center">
      <p className="text-spotify-light-gray">
        &copy; Michael&apos;s Portfolio {new Date().getFullYear()}, Design By{" "}
        <a
          href="https://www.michaelbullet.com/"
          className="text-spotify-green font-semibold underline"
        >
          Bullet
        </a>
      </p>
    </div>
  );
}
