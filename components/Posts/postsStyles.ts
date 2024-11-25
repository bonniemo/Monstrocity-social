import { StyleSheet } from "react-native";

export const postsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  postCard: {
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff",
  },
  postHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  postTags: {
    marginTop: 8,
    fontStyle: "italic",
  },
});
