import { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";

interface WallpaperProps {
  src: string;
}

export default function Wallpaper({ src }: WallpaperProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {/* Loading placeholder */}
      <div
        aria-hidden={loaded}
        className={`
          wallpaper-skeleton absolute inset-0
          flex items-center justify-center
          transition-opacity duration-700
          ${loaded ? "opacity-0" : "opacity-100"}
        `}
      >
        <div className="flex flex-col items-center gap-3 text-black/70 dark:text-white animate-pulse">
          <FaApple size={120} />
          <p className="text-sm">
            {failed ? "Wallpaper unavailable!" : "Loading wallpaper…"}
          </p>
        </div>
      </div>

      {/* Full-resolution wallpaper */}
      <img
        key={src}
        src={src}
        alt="Desktop Wallpaper"
        aria-hidden="true"
        draggable="false"
        onLoad={() => {
          setLoaded(true);
          setFailed(false);
        }}
        onError={() => setFailed(true)}
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
        className={`
          absolute inset-0 h-full w-full object-cover
          transition-opacity duration-1000 ease-out
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />
    </div>
  );
}
