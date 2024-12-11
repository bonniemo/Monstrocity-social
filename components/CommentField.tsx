import useMonsterStore from "@/store/monsterStore";
import { flexStyles } from "@/styles/flexStyles";
import { layoutStyles } from "@/styles/layoutStyles";
import { getAvatarSource } from "@/utils/getAvatarSource";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function CommentField() {
  const [commentText, setCommentText] = useState("");
  const selectedMonster = useMonsterStore((state) => state.selectedMonster);
  const avatarLoggedIn = selectedMonster
    ? getAvatarSource(selectedMonster.name)
    : undefined;

  return (
    <>
      {selectedMonster ? (
        <View style={[flexStyles.row, flexStyles.alignCenter, layoutStyles.mt]}>
          <Image
            source={avatarLoggedIn}
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              marginRight: 8,
            }}
          />
          <TextInput
            style={[
              {
                height: 40,
                flex: 1,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 8,
              },
              layoutStyles.mr,
            ]}
            placeholder="Write a comment..."
            value={commentText}
            onChangeText={setCommentText}
          />
          <Pressable onPress={handleAddComment}>
            <Feather name="send" size={24} color="black" />
          </Pressable>
        </View>
      ) : (
        <Text
          style={{
            fontSize: 14,
            fontStyle: "italic",
            color: "#999",
            marginBottom: 16,
          }}
        >
          You must log in to comment.
        </Text>
      )}
    </>
  );
}
