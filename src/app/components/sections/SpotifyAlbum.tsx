"use client";

import { useState, useEffect } from "react";

export default function SpotifyAlbum() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="max-md:hidden  max-lg:col-span-1  max-lg:row-span-1 col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-black border-t-2 rounded-xl ">
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-spotify-grey">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-md:hidden  max-lg:col-span-1  max-lg:row-span-1 col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-black border-t-2 rounded-xl ">
      <iframe
        className="w-full h-full rounded-xl"
        src="https://open.spotify.com/embed/playlist/3GmqDtsw56JmFY6cRHChKi?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ height: "72%", width: "100%" }}
      ></iframe>
    </div>
  );
}
