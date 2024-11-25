import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type LikeButtonProps = {
  isLiked: boolean; 
  onPress: () => void; 
  likes: number; 
};

export default function LikeButton({ isLiked, onPress, likes }: LikeButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center" }}>
      <Ionicons
        name={isLiked ? "heart" : "heart-outline"} 
        size={24}
        color="red"
      />
      <Text style={{ marginLeft: 8 }}>{likes > 0 && likes}</Text>
    </TouchableOpacity>
  );
}
