import addPostsStore from "@/store/addPostsStore";
import useMonsterStore from "@/store/monsterStore";
import { formStyles } from "@/styles/formStyles";
import { layoutStyles } from "@/styles/layoutStyles";
import { getAvatarSource } from "@/utils/getAvatarSource";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { Button, Text, TextInput, View, Image } from "react-native";
import { postsStyles } from "./postsStyles";

type PostFormData = {
  heading: string;
  text: string;
  tags: string;
};

export default function PostForm() {
  const { selectedMonster } = useMonsterStore();
  const { addPost } = addPostsStore();
  const { control, handleSubmit, reset } = useForm<PostFormData>();

  const onSubmit = (data: PostFormData) => {
    if (!selectedMonster) {
      alert("You need to log in to make a post!");
      return;
    }

    const tagsArray = data.tags.split(",").map((tag) => tag.trim());
    addPost({
      author: selectedMonster.name,
      heading: data.heading,
      text: data.text,
      tags: tagsArray,
    });

    reset();
    alert("Post created successfully!");
  };
  const avatarSource = selectedMonster
  ? getAvatarSource(selectedMonster.name)
  : getAvatarSource("default");

  return (
    <View style={formStyles.formContainer}>
      <Text>{selectedMonster?.name}</Text>
      <Image source={avatarSource} style={postsStyles.avatar} />
      <Controller
        name="heading"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={formStyles.input}
            placeholder="Post Heading"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        name="text"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={formStyles.input}
            placeholder="Post Text"
            multiline
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        name="tags"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={formStyles.input}
            placeholder="Tags (comma-separated)"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Button title="Create Post" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
