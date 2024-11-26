import MyPager from "@/components/MyPager";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.paragraph}>
        Welcome to Monstrocity, the ultimate hangout for the monster world!
        Whether you're creeping through shadows, unleashing fiery antics, or
        sprinkling starlight like cosmic confetti, there's a spot just for you.
        Here, monsters from every nook and cranny come to share epic tales, wild
        adventures, and laugh-out-loud moments. So fluff your wings, sharpen
        your horns, and join the chaos—Monstrocity is where the magic (and
        mayhem) happens!
      </Text>

      <Text style={styles.paragraph}>
        Monstrocity is powered by the magic of its four legendary houses, Umbra,
        Ignis, Lumina, and Terra. Whether you're a shadow-sneaker, a
        fire-starter, a star-whisperer, or a nature-nurturer, there's a house
        that feels like home! 🌟🔥🌿🌙
      </Text>

      <View style={styles.pagerContainer}>
        <MyPager />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#25292e",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffd33d",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  pagerContainer: {
    height: 720,
  },
});
