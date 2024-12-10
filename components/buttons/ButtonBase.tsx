import { Pressable, Text, View } from "react-native";

type Props = {
  label: string;
  onPress?: () => void;
};

export default function Button({ label, onPress }: Props) {
  return (
    <View
      style={{
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
      }}
    >
      <Pressable
        style={{
          backgroundColor: "#1e1e1e",
          borderRadius: 10,
          width: "60%",
          height: "80%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
        onPress={onPress}
      >
        <Text
          style={{
            fontSize: 16,
            color: "white",
          }}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}
