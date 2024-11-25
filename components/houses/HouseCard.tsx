import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

type HouseProps = {
  title: string;
  specialty: string;
  traits: string;
  motto: string;
  notableMembers: string[];
  funFact: string;
  description: string;
  image: ImageSourcePropType;
};

export default function HouseCard({
  title,
  specialty,
  traits,
  motto,
  notableMembers,
  funFact,
  description,
  image,
}: HouseProps) {
  return (
    <View style={styles.houseContainer}>
      <Text style={styles.houseTitle}>{title}</Text>
      <Image source={image} style={styles.houseImage} />
      <Text style={styles.paragraph}>
       {description}
      </Text>
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
  houseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffd33d",
    marginBottom: 10,
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
