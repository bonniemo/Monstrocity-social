import { StyleSheet } from "react-native";

export const layoutStyles = StyleSheet.create({  
  mb: {
    marginBottom: 8,
  },
  mt: {
    marginTop: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  scrollContainerSmall: {
    flex: 0,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
  },  
});
