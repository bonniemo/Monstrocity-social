import { getAIResponse } from "@/components/AiResponse";
import CommentField from "@/components/CommentField";
import { TypingDots } from "@/components/TypingDots";
import { useCommentsStore } from "@/stores/useCommentsStore";
import useMonstersStore from "@/stores/useMonstersStore";
import { usePostsStore } from "@/stores/usePostsStore";
import { getAvatarSource } from "@/utils/getAvatarSource";
import { useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

type SearchParams = {
  postId: string;
};

export default function Comments() {
  const { postId } = useLocalSearchParams<SearchParams>();
  const { monsters } = useMonstersStore.getState();
  const [isTyping, setIsTyping] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const selectedMonster = useMonstersStore((state) => state.selectedMonster);
  const posts = usePostsStore((state) => state.posts);
  const { addComment, getCommentsForPost } = useCommentsStore();
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <Text>Error, post not found</Text>;
  }

  const comments = getCommentsForPost(post.id);

  const handleAddComment = async (text: string) => {
    if (text && selectedMonster) {
      const postAuthorName = post.author;
      const postAuthor = monsters.find(
        (monster) => monster.name === postAuthorName
      );

      addComment(postId, { text, author: selectedMonster.name });

      if (!postAuthor) {
        console.error(`Monster personality not found for ${postAuthorName}`);
        return;
      }

      setIsTyping(true);
      try {
        const aiReply = await getAIResponse(post.text, postAuthor.desc, text);

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

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
        Comment on {post.heading}
      </Text>

      <FlatList
        ref={flatListRef}
        data={comments}
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
      <CommentField onSubmit={handleAddComment} />
    </View>
  );
}
