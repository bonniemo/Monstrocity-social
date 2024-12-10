import PostList from "@/components/Posts/PostDisplay";
import useMonsterStore from "@/store/monsterStore";
import { layoutStyles } from "@/styles/layoutStyles";
import avatarMapping from "@/utils/avatarMapping";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Profile() {
  const { selectedMonster } = useMonsterStore();  

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
      <Image
        source={avatarSource}
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          marginBottom: 20,
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#fff",
          marginBottom: 10,
        }}
      >
        {selectedMonster.name}
      </Text>
      {properties.map((prop, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#ffd33d",
              flex: 1,
            }}
          >
            {prop.label}:
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#ccc",
              flex: 2,
            }}
          >
            {prop.value}
          </Text>
        </View>
      ))}
      <Text
        style={{
          fontSize: 16,
          color: "#aaa",
          marginTop: 20,
        }}
      >
        {selectedMonster.biography}
      </Text>

      <View style={layoutStyles.container}>
        <PostList filterType="profile" />
      </View>
    </ScrollView>
  );
}
