import { useCommentsStore } from "@/stores/useCommentsStore";
import useMonstersStore from "@/stores/useMonstersStore";
import { usePostsStore } from "@/stores/usePostsStore";
import { flexStyles } from "@/styles/flexStyles";
import { layoutStyles } from "@/styles/layoutStyles";
import { getAvatarSource } from "@/utils/getAvatarSource";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import CommentButton from "../buttons/CommentButton";
import LikeButton from "../buttons/LikeButton";

type PostListProps = {
  filterType: "feed" | "profile";
};

export default function PostList({ filterType }: PostListProps) {
  const { selectedMonster } = useMonstersStore();
  const { getPostsByAuthor, getPostsExcludingAuthor, likePost } =
    usePostsStore();
  const { getCommentsForPost } = useCommentsStore();

  if (!selectedMonster) {
    return (
      <View
        style={{
          flex: 1,
          padding: 12,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Text>You need to log in to view posts.</Text>
      </View>
    );
  }

  const posts =
    filterType === "profile"
      ? getPostsByAuthor(selectedMonster.name)
      : getPostsExcludingAuthor(selectedMonster.name);

  if (posts.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          padding: 12,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Text>No posts to display.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(post) => post.id}
      scrollEnabled={false}
      renderItem={({ item }) => {
        const avatarSource = getAvatarSource(item.author);
        const comments = getCommentsForPost(item.id);

        return (
          <View
            style={{
              borderWidth: 1,
              borderColor: "#ced4da",
              borderRadius: 8,
              padding: 16,
              marginBottom: 12,
              backgroundColor: "#ffffff",
            }}
          >
            <View
              style={[flexStyles.row, flexStyles.columnGap, layoutStyles.mb]}
            >
              <Image
                source={avatarSource}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
              />
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {item.author}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              {item.heading}
            </Text>
            <Text>{item.text}</Text>
            {item.tags && (
              <Text
                style={{
                  marginTop: 4,
                  fontStyle: "italic",
                }}
              >
                Tags: {item.tags.join(", ")}
              </Text>
            )}
            <View
              style={[flexStyles.row, flexStyles.columnGapL, layoutStyles.mt]}
            >
              <LikeButton
                isLiked={item.likedBy?.includes(selectedMonster.name)}
                likes={item.likedBy.length || 0}
                onPress={() => likePost(item.id, selectedMonster.name)}
              />
              <CommentButton
                onPress={() => router.push(`/comments/${item.id}`)}
                comments={comments.length}
              />
            </View>
          </View>
        );
      }}
    />
  );
}
