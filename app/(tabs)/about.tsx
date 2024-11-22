import { layoutStyles } from "@/styles/layoutStyles";
import { textColor } from "@/styles/textStyles";
import { Text, View } from "react-native";

export default function About() {
  return (
    <View style={layoutStyles.container}>
      <Text style={textColor.white}>About screen</Text>
    </View>
  );
}
