import { buttonStyles } from "@/styles/buttonStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, Text, View } from "react-native";

type Props = {
  label: string;
  variant?: "withIcon" | "plain";
  onPress?: () => void;
};

export default function Button({ label, variant = "plain", onPress }: Props) {
  const isWithIcon = variant === "withIcon";

  return (
    <View
      style={[
        buttonStyles.buttonContainer,
        isWithIcon && buttonStyles.buttonWithIconContainer,
      ]}
    >
      <Pressable
        style={[
          buttonStyles.buttonBase,
          isWithIcon ? buttonStyles.buttonWithIcon : buttonStyles.buttonPlain,
        ]}
        onPress={onPress}
      >
        {isWithIcon && (
          <FontAwesome
            name="picture-o"
            size={18}
            style={buttonStyles.buttonWithIconIcon}
          />
        )}
        <Text
          style={[
            isWithIcon
              ? buttonStyles.buttonWithIconLabel
              : buttonStyles.buttonPlainLabel,
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}
