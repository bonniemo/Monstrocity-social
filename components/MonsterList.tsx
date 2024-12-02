import useMonsterStore from "@/store/monsterStore";
import { layoutStyles } from "@/styles/layoutStyles";
import { Monster } from "@/types/monsterTypes";
import React from "react";
import { FlatList, View } from "react-native";
import monsters from "../data/monsters.json";
import MonsterCard from "./MonsterCard/MonsterCard";

export default function MonsterList() {
  const setSelectedMonster = useMonsterStore(
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
    <View style={layoutStyles.container}>
      <FlatList
        data={monsters.monsters}
        renderItem={renderMonsterCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={layoutStyles.scrollContainer}
        scrollEnabled={false}
      />
    </View>
  );
}
