import { getAIResponse } from "@/components/AiResponse";
import { TypingDots } from "@/components/TypingDots";
import addPostsStore from "@/store/addPostsStore";
import useMonsterStore from "@/store/monsterStore";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
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
    <View style={styles.container}>
      <Text style={styles.heading}>Comment on {post.heading}</Text>

      <FlatList
        data={post.comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.commentItem}>
            <Text style={styles.commentAuthor}>{item.author}</Text>
            <Text style={styles.commentText}>{item.text}</Text>
          </View>
        )}
      />
      {isTyping && (
        <View style={styles.typingContainer}>
          <Text style={styles.typingText}>{post.author} is typing</Text>
          <TypingDots />
        </View>
      )}

      {selectedMonster ? (
        <Text style={styles.loggedInAs}>
          Commenting as: {selectedMonster.name}
        </Text>
      ) : (
        <Text style={styles.loggedOut}>You must log in to comment.</Text>
      )}

      {selectedMonster && (
        <>
          <TextInput
            style={styles.input}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  commentItem: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  commentAuthor: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  loggedInAs: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  loggedOut: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#999",
    marginBottom: 16,
  },
  typingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  typingText: {
    marginLeft: 8,
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
  },
});
