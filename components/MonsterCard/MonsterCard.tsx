import { Image, Text, TouchableOpacity } from "react-native";
import avatarMapping from "./avatarMapping";
import { monsterCardStyles } from "./monsterCardStyles";

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
    <TouchableOpacity style={monsterCardStyles.card} onPress={onPress}>
      <Image source={avatarSource} style={monsterCardStyles.avatar} />
      <Text style={monsterCardStyles.name}>{name}</Text>
    </TouchableOpacity>
  );
}
