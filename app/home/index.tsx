import PostList from "@/components/Posts/PostDisplay";
import PostForm from "@/components/Posts/PostForm";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <PostForm />
      <PostList filterType="feed" />
    </ScrollView>
  );
}
