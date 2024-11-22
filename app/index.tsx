import MonsterList from "@/components/MonsterList";
import useMonsterStore from "@/store/monsterStore";
import { layoutStyles } from "@/styles/layoutStyles";
import { useRouter } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";

export default function LoginScreen() {
  const { selectedMonster, setSelectedMonster } = useMonsterStore();
  const router = useRouter();

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
