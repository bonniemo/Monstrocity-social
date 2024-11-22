import { Monster } from "@/types/monsterTypes";
import { create } from "zustand";

type MonsterStore = {
  selectedMonster: Monster | null;
  setSelectedMonster: (monster: Monster) => void;
};

const useMonsterStore = create<MonsterStore>((set) => ({
  selectedMonster: null,
  setSelectedMonster: (monster) => set({ selectedMonster: monster }),
}));

export default useMonsterStore;
