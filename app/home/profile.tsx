import PostList from "@/components/Posts/PostDisplay";
import useMonstersStore from "@/stores/useMonstersStore";
import { flexStyles } from "@/styles/flexStyles";
import avatarMapping from "@/utils/avatarMapping";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const { selectedMonster } = useMonstersStore();

  if (!selectedMonster) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#25292e",
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "red",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          No monster is logged in!
        </Text>
      </View>
    );
  }

  const avatarSource =
    avatarMapping[selectedMonster.avatar] || avatarMapping["default.png"];

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#25292e",
        padding: 20,
      }}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
    >
      <View style={[flexStyles.row]}>
        <Image
          source={avatarSource}
          style={[[styles.avatar, { marginRight: 16 }]]}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.monsterName}>{selectedMonster.name}</Text>
          <Text style={styles.label}>
            Age: <Text style={styles.value}>{selectedMonster.age} years</Text>
          </Text>
          <Text style={styles.label}>
            House: <Text style={styles.value}>{selectedMonster.house}</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.label}>
        Pet: <Text style={styles.value}>{selectedMonster.pet}</Text>
      </Text>
      <Text style={styles.label}>
        Color: <Text style={styles.value}>{selectedMonster.color}</Text>
      </Text>
      <Text style={styles.label}>
        Eyes: <Text style={styles.value}>{selectedMonster.eyes}</Text>
      </Text>
      <Text style={styles.label}>
        Horns: <Text style={styles.value}>{selectedMonster.horns}</Text>
      </Text>
      <Text style={styles.label}>
        Tail Shape:{" "}
        <Text style={styles.value}>{selectedMonster.tailShape}</Text>
      </Text>
      <Text style={styles.label}>
        Appearance Details:{" "}
        <Text style={styles.value}>{selectedMonster.appearanceDetails}</Text>
      </Text>
      <Text style={styles.label}>
        Special Ability:{" "}
        <Text style={styles.value}>{selectedMonster.specialAbility}</Text>
      </Text>
      <Text style={styles.label}>
        Favorite Food:{" "}
        <Text style={styles.value}>{selectedMonster.favoriteFood}</Text>
      </Text>
      <Text style={styles.label}>
        Catchphrase:{" "}
        <Text style={styles.value}>{selectedMonster.catchphrase}</Text>
      </Text>
      <Text style={styles.biography}>{selectedMonster.biography}</Text>
      <View style={{ width: "100%" }}>
        <PostList filterType="profile" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  monsterName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: "#ffd33d",
    marginBottom: 5,
  },
  value: {
    color: "#ccc",
  },
  biography: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 20,
    marginBottom: 20,
  },
});
