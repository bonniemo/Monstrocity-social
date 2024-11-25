import MonsterList from "@/components/MonsterCard/MonsterList";
import addPostsStore from "@/store/addPostsStore";
import useMonsterStore from "@/store/monsterStore";
import { layoutStyles } from "@/styles/layoutStyles";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import postsData from "../data/posts.json";

export default function LoginScreen() {
  const { selectedMonster } = useMonsterStore();
  const { loadPosts } = addPostsStore();
  const router = useRouter();

  useEffect(() => {
    loadPosts(postsData.posts);
  }, []);

  const handleLogin = () => {
    if (selectedMonster) {
      console.log(`Logging in as: ${selectedMonster.name}`);
      router.replace("/home");
    } else {
      alert("Please select a monster to log in!");
    }
  };

  return (
    <View style={layoutStyles.container}>
      <Text>Login Screen</Text>
      <ScrollView style={layoutStyles.scrollContainerSmall}>
        <MonsterList />
      </ScrollView>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
