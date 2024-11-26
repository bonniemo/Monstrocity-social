import React from "react";
import { StyleSheet, Text, View } from "react-native";

type HouseProps = {
  specialty: string;
  traits: string;
  motto: string;
  notableMembers: string[];
  funFact: string;
  description: string;
};

export default function HouseCard({
  specialty,
  traits,
  motto,
  notableMembers,
  funFact,
  description,
}: HouseProps) {
  return (
    <View style={styles.houseContainer}>
      <Text style={styles.paragraph}>{description}</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Specialty:</Text> {specialty}
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Traits:</Text> {traits}
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Motto:</Text> {motto}
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Notable Members:</Text>{" "}
        {notableMembers.join(", ")}
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Fun Fact:</Text> {funFact}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  houseContainer: {
    marginBottom: 30,
  },
  houseImage: {
    width: "80%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 10,
    borderRadius: 50,
  },

  paragraph: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});
