import MonsterList from "@/components/MonsterList";
import { layoutStyles } from "@/styles/layoutStyles";
import { useRouter } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/home");
  };

  return (
    <View style={layoutStyles.container}>
      <Text>Login Screen</Text>
      <ScrollView
        style={layoutStyles.scrollContainerSmall}        
      >
        <MonsterList />
      </ScrollView>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
