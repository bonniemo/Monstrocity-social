import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  // General container for both button types
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  text: {
    fontSize: 16,
    color: "white",
  },

  // Base styles for all buttons
  buttonBase: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    width: "60%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },  
  buttonPlain: {
    backgroundColor: "#25292e",
  },
 
});
