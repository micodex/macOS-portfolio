import { useTheme } from "@/context/ThemeContext";
import { APPEARANCE_BUTTONS } from "@/data/settings";

export function AppearanceTab() {
  const { appearance, setAppearance } = useTheme();

  return (
    <section className="flex flex-col gap-4">
      {/* card */}
      <div className="p-2 rounded-lg bg-card text-card-foreground border ">
        <h3 className="font-semibold">Appearance</h3>
        <div className="flex gap-4 mt-4">
          {APPEARANCE_BUTTONS.map(({ id, title, icon: Icon }) => (
            <div className="flex flex-col items-center gap-1">
              <button
                key={id}
                onClick={() => setAppearance(id)}
                className={`w-20 h-20 rounded-xl border grid place-content-center cursor-pointer hover:outline
                ${appearance === id ? "outline bg-primary/20 " : ""}`}
              >
                <span className="">
                  <Icon />
                </span>
              </button>
              <h3 className="font-light text-xs">{title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="p-2 rounded-lg bg-card text-card-foreground border">
        <h3 className="font-semibold ">Colour</h3>
        <div className="flex gap-4 mt-4 rounded-md">
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-sky-500 rounded-full"></div>
            <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
            <div className="w-5 h-5 bg-amber-500 rounded-full"></div>
            <div className="w-5 h-5 bg-pink-500 rounded-full"></div>
          </div>
        </div>
        <div className="border-t pt-2 mt-2">
          <p className="text-text-secondary">text highlight colour</p>
        </div>
      </div>
    </section>
  );
}

import { useWallpaper } from "@/context/WallpaperContext";
import { wallpapers } from "@/data/wallpapers";
import ImageSkeleton from "@/components/ui/ImageSkeleton";

export function WallpaperTab() {
  const { selectedWallpaper, setWallpaper } = useWallpaper();

  return (
    <section>
      <div className="rounded-lg border bg-card p-3 text-card-foreground">
        <h3 className="font-semibold">Wallpapers</h3>

        <div className="mt-4 flex flex-wrap items-start gap-4">
          {wallpapers.map((wallpaper) => {
            const isSelected = selectedWallpaper === wallpaper.id;

            return (
              <button
                type="button"
                key={wallpaper.id}
                onClick={() => setWallpaper(wallpaper.id)}
                aria-pressed={isSelected}
                className="group flex cursor-pointer flex-col items-center gap-2
                  rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4
                  focus-visible:outline-primary"
              >
                <ImageSkeleton
                  src={wallpaper.thumbnail}
                  alt=""
                  className={`aspect-video w-40 rounded-lg transition-opacity group-hover:opacity-80 ${
                    isSelected
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-card"
                      : ""
                  }`}
                />

                <span
                  className={
                    isSelected
                      ? "font-semibold text-primary"
                      : "text-card-foreground"
                  }
                >
                  {wallpaper.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
