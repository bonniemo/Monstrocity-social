import { buttonStyles } from "@/styles/buttonStyles";
import { Pressable, Text, View } from "react-native";

type Props = {
  label: string;
  onPress?: () => void;
};

export default function Button({ label, onPress }: Props) {
  return (
    <View style={[buttonStyles.buttonContainer]}>
      <Pressable style={[buttonStyles.buttonBase]} onPress={onPress}>
        <Text style={buttonStyles.text}>{label}</Text>
      </Pressable>
    </View>
  );
}
