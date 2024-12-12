import { create } from "zustand";

type Theme = {
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  borderColor: string;
};

export type ThemesState = {
  themes: {
    Default: Theme;
    Lumina: Theme;
    Ignis: Theme;
    Umbra: Theme;
    Terra: Theme;
  };
  activeTheme: Theme;
  setTheme: (house: keyof ThemesState["themes"]) => void;
};

const useThemesStore = create<ThemesState>((set) => ({
  themes: {
    Default: {
      backgroundColor: "#f9f6e8", // Neutral beige
      textColor: "#333333", // Neutral dark gray
      buttonColor: "#ffd700", // Bright gold
      borderColor: "#e6d2b5", // Light neutral
    },
    Lumina: {
      backgroundColor: "#FFEFEF", // Pale peach
      textColor: "#6B6B6B", // Slate gray
      buttonColor: "#FFD1DC", // Baby pink
      borderColor: "#F9CACA", // Blush
    },
    Ignis: {
      backgroundColor: "#FFD6A5", // Pale orange
      textColor: "#6B4226", // Warm brown
      buttonColor: "#FFE697", // Soft yellow
      borderColor: "#FFB23D", // Goldenrod
    },
    Umbra: {
      backgroundColor: "#2A2A2A", // Dark slate gray
      textColor: "#A89BBF", // Cool lavender
      buttonColor: "#8E44AD", // Violet
      borderColor: "#5C4A72", // Muted indigo
    },
    Terra: {
      backgroundColor: "#F4E3C1", // Warm sandy beige
      textColor: "#4B5320", // Olive green
      buttonColor: "#A1B57D", // Soft moss green
      borderColor: "#D8BFAA", // Light clay
    },
  },
  activeTheme: {
    backgroundColor: "#f9f6e8", // Neutral beige
    textColor: "#333333", // Neutral dark gray
    buttonColor: "#ffd700", // Bright gold
    borderColor: "#e6d2b5", // Light neutral
  }, // Default theme as active initially
  setTheme: (house) =>
    set((state) => ({
      activeTheme: state.themes[house],
    })),
}));

export default useThemesStore;
