"use client";

import { useState, useEffect } from "react";
import { FaPlay, FaHandPointer } from "react-icons/fa";

export default function SpotifyAlbum() {
  const [mounted, setMounted] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Oculta a notificação após 5 segundos
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => clearTimeout(timer);
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
    <div className="max-md:hidden  max-lg:col-span-1  max-lg:row-span-1 col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-black border-t-2 rounded-xl relative">
      {/* Notificação flutuante */}
      {showNotification && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-spotify-green text-spotify-black px-4 py-2 rounded-full flex items-center gap-2 shadow-lg animate-bounce">
          <FaHandPointer className="text-sm" />
          <span className="text-sm font-bold">Clique no play para ouvir!</span>
          <FaPlay className="text-xs" />
        </div>
      )}

      <iframe
        className="w-full h-full rounded-xl"
        src="https://open.spotify.com/embed/playlist/3GmqDtsw56JmFY6cRHChKi?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        onClick={() => setShowNotification(false)}
      ></iframe>
    </div>
  );
}
