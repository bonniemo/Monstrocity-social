import PostList from "@/components/Posts/PostDisplay";
import PostForm from "@/components/Posts/PostForm";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <Text>Welcome to the Home Screen!</Text>
      <PostForm />
      <PostList filterType="feed" />
    </ScrollView>
  );
}
