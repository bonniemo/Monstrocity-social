// app/index.tsx
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/home");
  };

  return (
    <View>
      <Text>Login Screen</Text>

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
