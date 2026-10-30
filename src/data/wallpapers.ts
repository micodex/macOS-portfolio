export type WallpaperId = "adaptive" | "sequoia1" | "sequoia2" | "mountain";

export interface WallpaperOption {
  id: WallpaperId;
  name: string;
  light: string;
  dark?: string;
  thumbnail: string;
}

export const wallpapers: WallpaperOption[] = [
  {
    id: "adaptive",
    name: "Adaptive",
    light: "wallpapers/default-light.jpg",
    dark: "wallpapers/default-dark.jpg",
    thumbnail: "wallpapers/default-dark-thumbnail.jpg",
  },
  {
    id: "sequoia1",
    name: "Sequoia 1",
    light: "wallpapers/sequoia-1.jpg",
    thumbnail: "wallpapers/sequoia-1-thumbnail.jpg",
  },
  {
    id: "sequoia2",
    name: "Sequoia 2",
    light: "wallpapers/sequoia-2.jpg",
    thumbnail: "wallpapers/sequoia-2-thumbnail.jpg",
  },

  {
    id: "mountain",
    name: "Mountain",
    light: "wallpapers/mountain.jpg",
    thumbnail: "wallpapers/mountain-thumbnail.jpg",
  },
];
