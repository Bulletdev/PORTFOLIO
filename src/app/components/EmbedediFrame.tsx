"use client";

import React, { useState, useEffect, useRef } from "react";

// Extend the Window interface to include `onSpotifyIframeApiReady`
declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: any) => void;
  }
}

export default function EmbedediFrame() {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed-podcast/iframe-api/v1";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (playerRef.current) {
        window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
          const element = playerRef.current;
          const options = {
            uri: "spotify:playlist/3GmqDtsw56JmFY6cRHChKi?si=5aba683bb5db4e5c",
            width: "90%",
            height: "90",
            theme: "black",
          };
          IFrameAPI.createController(
            element,
            options,
            (EmbedController: any) => {
              // EmbedController is the Spotify embed controller
            }
          );
        };
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-spotify-black rounded-2xl flex items-center justify-center p-4 fixed bottom-0 w-full">
      <div ref={playerRef} className="" style={{ background: "black" }}></div>
    </section>
  );
}
