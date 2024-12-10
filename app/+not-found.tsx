import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#25292e",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Not found</Text>
        <Link
          href="/"
          style={{
            fontSize: 20,
            textDecorationLine: "underline",
            color: "#fff",
          }}
        >
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}
