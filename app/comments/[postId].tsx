import { getAIResponse } from "@/components/AiResponse";
import { TypingDots } from "@/components/TypingDots";
import addPostsStore from "@/store/addPostsStore";
import useMonsterStore from "@/store/monsterStore";
import { flexStyles } from "@/styles/flexStyles";
import { layoutStyles } from "@/styles/layoutStyles";
import { getAvatarSource } from "@/utils/getAvatarSource";
import Feather from "@expo/vector-icons/Feather";
import { useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";

import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

type SearchParams = {
  postId: string;
};

export default function Comments() {
  const { postId } = useLocalSearchParams<SearchParams>();
  const [commentText, setCommentText] = useState("");
  const { monsters } = useMonsterStore.getState();
  const [isTyping, setIsTyping] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const posts = addPostsStore((state) => state.posts);
  const addComment = addPostsStore((state) => state.addComment);
  const selectedMonster = useMonsterStore((state) => state.selectedMonster);

  if (!postId) {
    return <Text>No postId provided</Text>;
  }

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <Text>Error, post not found</Text>;
  }

  const handleAddComment = async () => {
    if (commentText && selectedMonster) {
      const postAuthorName = post.author;
      const postAuthor = monsters.find(
        (monster) => monster.name === postAuthorName
      );

      addComment(postId, { text: commentText, author: selectedMonster.name });
      const userComment = commentText;
      setCommentText("");

      if (!postAuthor) {
        console.error(`Monster personality not found for ${postAuthorName}`);
        return;
      }

      setIsTyping(true);
      try {
        const aiReply = await getAIResponse(
          post.text,
          postAuthor.desc,
          userComment
        );

        if (aiReply) {
          addComment(postId, {
            text: aiReply,
            author: postAuthor.name,
          });
        }
      } catch (error) {
        console.error("Error fetching AI response:", error);
      } finally {
        setIsTyping(false);
      }
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  };
  const avatarSource = getAvatarSource(post.author);
  const avatarLoggedIn = selectedMonster
    ? getAvatarSource(selectedMonster.name)
    : undefined;
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
        Comment on {post.heading}
      </Text>

      <FlatList
        ref={flatListRef}
        data={post.comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 12,
              padding: 12,
              backgroundColor: "#f9f9f9",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
              {item.author}
            </Text>
            <Text style={{ fontSize: 14 }}>{item.text}</Text>
          </View>
        )}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
      />

      {isTyping && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={avatarSource}
            style={[
              {
                width: 30,
                height: 30,
                borderRadius: 20,
                marginRight: 8,
                marginBottom: 24,
              },
            ]}
          />
          <TypingDots />
        </View>
      )}

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
    </View>
  );
}
