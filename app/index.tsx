import ButtonBase from "@/components/buttons/ButtonBase";
import MonsterList from "@/components/MonsterList";
import useMonstersStore from "@/stores/useMonstersStore";
import { usePostsStore } from "@/stores/usePostsStore";
import { layoutStyles } from "@/styles/layoutStyles";
import { textColor } from "@/styles/textStyles";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import postsData from "../data/posts.json";

export default function LoginScreen() {
  const { selectedMonster } = useMonstersStore();
  const router = useRouter();
  const initialPosts = postsData.posts;

  useEffect(() => {
    usePostsStore.getState().loadPosts(initialPosts);
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
      <Text style={textColor.white}>Welcome, choose a monster to login</Text>
      <MonsterList />
      <ButtonBase label="Login" onPress={handleLogin} />
    </View>
  );
}
