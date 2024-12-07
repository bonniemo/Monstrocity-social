import { Monster } from "@/types/monsterTypes";
import { create } from "zustand";
import monstersData from "../data/monsters.json";

type MonsterStore = {
  monsters: Monster[];
  selectedMonster: Monster | null;
  setSelectedMonster: (monster: Monster) => void;
  logOut: () => void;
};

const useMonsterStore = create<MonsterStore>((set) => ({
  monsters: monstersData.monsters,
  selectedMonster: null,
  setSelectedMonster: (monster) => set({ selectedMonster: monster }),
  logOut: () => set({ selectedMonster: null }),
}));

export default useMonsterStore;
