export default function SpotifyAlbum() {
  // Adiciona timestamp para forçar atualização do iframe
  const timestamp = new Date().getTime();

  return (
    <div className="max-md:hidden  max-lg:col-span-1  max-lg:row-span-1 col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-black border-t-2 rounded-xl ">
      <iframe
        className="w-full h-full rounded-xl"
        src={`https://open.spotify.com/embed/playlist/3GmqDtsw56JmFY6cRHChKi?utm_source=generator&t=${timestamp}`}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ height: "72%", width: "100%" }}
      ></iframe>
    </div>
  );
}
