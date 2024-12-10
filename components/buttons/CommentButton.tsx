import Fontisto from "@expo/vector-icons/Fontisto";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

type CommentButtonProps = {
  onPress: () => void;
  comments: number;
};

const CommentButton = ({ onPress, comments }: CommentButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Fontisto name="hipchat" size={24} color="black" />
      <Text style={{ marginLeft: 4, fontSize: 14, fontWeight: "500" }}>{ comments }</Text>
    </TouchableOpacity>
  );
};

export default CommentButton;
