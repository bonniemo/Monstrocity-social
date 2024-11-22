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

  // Base styles for all buttons
  buttonBase: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  // Styles specific to ButtonWithIcon
  buttonWithIconContainer: {
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 18,
  },
  buttonWithIcon: {
    backgroundColor: "#fff",
  },
  buttonWithIconLabel: {
    color: "#25292e",
    fontSize: 16,
  },
  buttonWithIconIcon: {
    paddingRight: 8,
    color: "#25292e",
  },

  // Styles specific to ButtonPlain
  buttonPlain: {
    backgroundColor: "#25292e",
  },
  buttonPlainLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
