import { StyleSheet } from "react-native";

export const monsterCardStyles = StyleSheet.create({
  card: {
    width: 110,
    height: 130,
    backgroundColor: "#1e1e1e",
    borderRadius: 40,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
