import MyPager from "@/components/MyPager";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        backgroundColor: "#25292e",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: "#fff",
          marginBottom: 20,
        }}
      >
        Welcome to Monstrocity, the ultimate hangout for the monster world!
        Whether you're creeping through shadows, unleashing fiery antics, or
        sprinkling starlight like cosmic confetti, there's a spot just for you.
        Here, monsters from every nook and cranny come to share epic tales, wild
        adventures, and laugh-out-loud moments. So fluff your wings, sharpen
        your horns, and join the chaos! Monstrocity is where the magic, and
        mayhem happens!
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: "#fff",
          marginBottom: 20,
        }}
      >
        Monstrocity is powered by the magic of its four legendary houses, Umbra,
        Ignis, Lumina, and Terra. Whether you're a shadow-sneaker, a
        fire-starter, a star-whisperer, or a nature-nurturer, there's a house
        that feels like home! 🌟🔥🌿🌙
      </Text>

      <View
        style={{
          height: 720,
        }}
      >
        <MyPager />
      </View>
    </ScrollView>
  );
}
