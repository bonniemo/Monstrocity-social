import useMonstersStore from "@/stores/useMonstersStore";
import { flexStyles } from "@/styles/flexStyles";
import { Monster } from "@/types/monsterTypes";
import React from "react";
import { FlatList } from "react-native";
import monsters from "../data/monsters.json";
import MonsterCard from "./MonsterCard/MonsterCard";

export default function MonsterList() {
  const setSelectedMonster = useMonstersStore(
    (state) => state.setSelectedMonster
  );

  const handleCardPress = (monster: Monster) => {
    setSelectedMonster(monster);
    console.log(`Monster ${monster.name} selected`);
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
