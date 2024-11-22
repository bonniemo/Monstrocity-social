import { layoutStyles } from "@/styles/layoutStyles";
import React from "react";
import { FlatList, View } from "react-native";
import monsters from "../data/monsters.json";
import MonsterCard from "./MonsterCard/MonsterCard";

export default function MonsterList() {
  const handleCardPress = (monsterId: number) => {
    console.log(`Monster ${monsterId} selected`);
  };

  const renderMonsterCard = ({
    item,
  }: {
    item: { id: number; name: string; avatar: string };
  }) => (
    <MonsterCard
      name={item.name}
      avatar={item.avatar}
      onPress={() => handleCardPress(item.id)}
    />
  );

  return (
    <View style={layoutStyles.container}>
      <FlatList
        data={monsters.monsters}
        renderItem={renderMonsterCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={layoutStyles.scrollContainer}
      />
    </View>
  );
}
