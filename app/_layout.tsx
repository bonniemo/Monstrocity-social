import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
      <Stack.Screen
        name="comments/[postId]"
        options={{
          headerShown: true,
          title: "Comments",          
        }}
      />
       <Stack.Screen
        name="settings"
        options={{
          headerShown: true,
          title: "Settings",          
        }}
      />
    </Stack>
  );
}
