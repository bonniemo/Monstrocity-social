import { Monster } from "@/types/monsterTypes";
import { create } from "zustand";

type MonsterStore = {
  selectedMonster: Monster | null;
  setSelectedMonster: (monster: Monster) => void;
  logOut: () => void;
};

const useMonsterStore = create<MonsterStore>((set) => ({
  selectedMonster: null,
  setSelectedMonster: (monster) => set({ selectedMonster: monster }),
  logOut: () => set({ selectedMonster: null }),
}));

export default useMonsterStore;
