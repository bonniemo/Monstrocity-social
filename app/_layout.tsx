import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
      <Stack.Screen
        name="comments"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
