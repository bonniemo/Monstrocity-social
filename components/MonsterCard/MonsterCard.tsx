import { Image, Text, TouchableOpacity } from "react-native";
import avatarMapping from "../../utils/avatarMapping";

type MonsterCardProps = {
  name: string;
  avatar: string;
  onPress: () => void;
};

export default function MonsterCard({
  name,
  avatar,
  onPress,
}: MonsterCardProps) {
  const avatarSource = avatarMapping[avatar] || avatarMapping["default.png"];

  return (
    <TouchableOpacity
      style={{
        width: 110,
        height: 130,
        backgroundColor: "#1e1e1e",
        borderRadius: 40,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }}
      onPress={onPress}
    >
      <Image
        source={avatarSource}
        style={{
          width: 60,
          height: 60,
          borderRadius: 40,
          marginBottom: 8,
        }}
      />
      <Text
        style={{
          color: "#ffffff",
          fontSize: 12,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
