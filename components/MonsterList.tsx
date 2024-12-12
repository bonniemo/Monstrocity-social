import useMonstersStore from "@/stores/useMonstersStore";
import useThemesStore, { ThemesState } from "@/stores/useThemesStore";

import { flexStyles } from "@/styles/flexStyles";
import { Monster } from "@/types/monsterTypes";
import React from "react";
import { FlatList } from "react-native";
import monstersData from "../data/monsters.json";
import MonsterCard from "./MonsterCard/MonsterCard";

export default function MonsterList() {
  const monsters: { monsters: Monster[] } = monstersData;
  const setTheme = useThemesStore((state) => state.setTheme);

  const setSelectedMonster = useMonstersStore(
    (state) => state.setSelectedMonster
  );

  const themeMapping: Record<string, keyof ThemesState["themes"]> = {
    Lumina: "Lumina",
    Ignis: "Ignis",
    Umbra: "Umbra",
    Terra: "Terra",
  };

  const handleCardPress = (monster: Monster) => {
    setSelectedMonster(monster);
    console.log(`Monster ${monster.name} selected`);

    const themeKey = themeMapping[monster.house] || "Default";
    setTheme(themeKey);
    console.log(themeKey)
  };

  const renderMonsterCard = ({ item }: { item: Monster }) => (
    <MonsterCard
      name={item.name}
      avatar={item.avatar}
      onPress={() => handleCardPress(item)}
    />
  );

  return (
    <FlatList
      data={monsters.monsters}
      renderItem={renderMonsterCard}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={[flexStyles.row]}
      horizontal={true}
      style={{
        maxHeight: 200,
      }}
    />
  );
}
