import { Monster } from "@/types/monsterTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import monstersData from "../data/monsters.json";

type MonstersStore = {
  monsters: Monster[];
  selectedMonster: Monster | null;
  setSelectedMonster: (monster: Monster) => void;
  logOut: () => void;
};

const useMonstersStore = create(
  persist<MonstersStore>(
    (set) => ({
      monsters: monstersData.monsters,
      selectedMonster: null,
      setSelectedMonster: (monster) => set({ selectedMonster: monster }),
      logOut: () => set({ selectedMonster: null }),
    }),
    {
      name: "monster-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useMonstersStore;
