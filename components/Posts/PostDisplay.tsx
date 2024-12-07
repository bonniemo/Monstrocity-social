import usePostsStore from "@/store/addPostsStore";
import useMonsterStore from "@/store/monsterStore";
import { getAvatarSource } from "@/utils/getAvatarSource";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import CommentButton from "../buttons/CommentButton";
import LikeButton from "../buttons/LikeButton";
import { postsStyles } from "./postsStyles";

type PostListProps = {
  filterType: "feed" | "profile";
};

export default function PostList({ filterType }: PostListProps) {
  const { selectedMonster } = useMonsterStore();
  const { getPostsByAuthor, getPostsExcludingAuthor, likePost } =
    usePostsStore();

  if (!selectedMonster) {
    return (
      <View style={postsStyles.container}>
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
      <View style={postsStyles.container}>
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

        return (
          <View style={postsStyles.postCard}>
            <Image source={avatarSource} style={postsStyles.avatar} />
            <Text>{item.author}</Text>
            <Text style={postsStyles.postHeading}>{item.heading}</Text>
            <Text>{item.text}</Text>
            {item.tags && (
              <Text style={postsStyles.postTags}>
                Tags: {item.tags.join(", ")}
              </Text>
            )}
            <LikeButton
              isLiked={item.likedBy?.includes(selectedMonster.name)}
              likes={item.likedBy.length || 0}
              onPress={() => likePost(item.id, selectedMonster.name)}
            />
            <CommentButton
              onPress={() => router.push(`/comments/${item.id}`)}
              comments={item.comments.length}
            />
          </View>
        );
      }}
    />
  );
}
