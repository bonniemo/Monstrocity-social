import avatarMapping from "@/components/MonsterCard/avatarMapping";
import useMonsterStore from "@/store/monsterStore";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const { selectedMonster } = useMonsterStore();

  if (!selectedMonster) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No monster is logged in!</Text>
      </View>
    );
  }

  const properties = [
    { label: "Age", value: selectedMonster.age },
    { label: "House", value: selectedMonster.house },
    { label: "Color", value: selectedMonster.color },
    { label: "Eyes", value: selectedMonster.eyes },
    { label: "Horns", value: selectedMonster.horns },
    { label: "Tail Shape", value: selectedMonster.tailShape },
    { label: "Appearance Details", value: selectedMonster.appearanceDetails },
    { label: "Special Ability", value: selectedMonster.specialAbility },
    { label: "Favorite Food", value: selectedMonster.favoriteFood },
    { label: "Pet", value: selectedMonster.pet },
    { label: "Catchphrase", value: selectedMonster.catchphrase },
  ];

  const avatarSource =
    avatarMapping[selectedMonster.avatar] || avatarMapping["default.png"];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={avatarSource} style={styles.avatar} />
      <Text style={styles.name}>{selectedMonster.name}</Text>
      {properties.map((prop, index) => (
        <View key={index} style={styles.propertyContainer}>
          <Text style={styles.propertyLabel}>{prop.label}:</Text>
          <Text style={styles.propertyValue}>{prop.value}</Text>
        </View>
      ))}
      <Text style={styles.biography}>{selectedMonster.biography}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    padding: 16,
  },
  content: {
    alignItems: "center",
    paddingBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  propertyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10,
  },
  propertyLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffd33d",
    flex: 1,
  },
  propertyValue: {
    fontSize: 18,
    color: "#ccc",
    flex: 2,
  },
  biography: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 10,
  },
  errorText: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
  },
});
