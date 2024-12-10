import { getAIResponse } from "@/components/AiResponse";
import { TypingDots } from "@/components/TypingDots";
import addPostsStore from "@/store/addPostsStore";
import useMonsterStore from "@/store/monsterStore";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

type SearchParams = {
  postId: string;
};

export default function Comments() {
  const { postId } = useLocalSearchParams<SearchParams>();
  const [commentText, setCommentText] = useState("");
  const { monsters } = useMonsterStore.getState();
  const [isTyping, setIsTyping] = useState(false);

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
    }
  };
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
        Comment on {post.heading}
      </Text>

      <FlatList
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
      />

      {isTyping && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <Text
            style={{
              marginLeft: 8,
              fontSize: 14,
              fontStyle: "italic",
              color: "#555",
            }}
          >
            {post.author} is typing
          </Text>
          <TypingDots />
        </View>
      )}

      {selectedMonster ? (
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 8,
          }}
        >
          Commenting as: {selectedMonster.name}
        </Text>
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

      {selectedMonster && (
        <>
          <TextInput
            style={{
              height: 40,
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 8,
              marginBottom: 12,
              paddingHorizontal: 8,
            }}
            placeholder="Write a comment..."
            value={commentText}
            onChangeText={setCommentText}
          />
          <Button title="Add Comment" onPress={handleAddComment} />
        </>
      )}
    </View>
  );
}
