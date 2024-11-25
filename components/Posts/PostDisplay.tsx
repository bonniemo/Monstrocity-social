import usePostsStore from "@/store/addPostsStore";
import useMonsterStore from "@/store/monsterStore";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { postsStyles } from "./postsStyles";

type PostListProps = {
  filterType: "feed" | "profile"; 
};

export default function PostList({ filterType }: PostListProps) {
  const { selectedMonster } = useMonsterStore();
  const { getPostsByAuthor, getPostsExcludingAuthor } = usePostsStore();

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
      renderItem={({ item }) => (
        <View style={postsStyles.postCard}>
          <Text>{item.author}</Text>
          <Text style={postsStyles.postHeading}>{item.heading}</Text>
          <Text>{item.text}</Text>
          <Text style={postsStyles.postTags}>Tags: {item.tags.join(", ")}</Text>
        </View>
      )}
    />
  );
}
