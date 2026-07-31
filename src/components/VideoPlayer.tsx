import thumbnail from "@/assets/gallery/foto9.jpeg";

// TODO: trocar pelo video oficial do IDM PSI assim que estiver pronto.
// Ate la fica so a thumbnail, sem reproduzir nada (nao mostrar video de NPA/Numerologia).
export const VideoPlayer = () => {
  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden border-2 border-primary/40 shadow-2xl relative bg-card">
      <img
        src={thumbnail}
        alt="Video em breve"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4">
        <div className="text-center mt-1">
          <p className="text-white font-bold text-sm md:text-2xl drop-shadow-lg leading-tight">
            Video em breve
          </p>
          <p className="text-white/80 text-xs md:text-base mt-1 font-medium">
            Estamos preparando o video oficial dessa imersao
          </p>
        </div>
      </div>
    </div>
  );
};
