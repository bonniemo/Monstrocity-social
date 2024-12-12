import { layoutStyles } from "@/styles/layoutStyles";
import { getAvatarSource } from "@/utils/getAvatarSource";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import useMonstersStore from "@/stores/useMonstersStore";
import { usePostsStore } from "@/stores/usePostsStore";
import { flexStyles } from "@/styles/flexStyles";
import { Button, Image, Text, TextInput, View } from "react-native";

type PostFormData = {
  heading: string;
  text: string;
  tags: string;
};

export default function PostForm() {
  const { selectedMonster } = useMonstersStore();
  const { addPost } = usePostsStore();
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
    <View
      style={{
        width: "100%",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <View style={[flexStyles.row, flexStyles.columnGap, layoutStyles.mb]}>
        <Image
          source={avatarSource}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          {selectedMonster?.name}
        </Text>
      </View>
      <Controller
        name="heading"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ced4da",
              borderRadius: 8,
              padding: 8,
              marginVertical: 8,
              backgroundColor: "#ffffff",
            }}
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
            style={{
              borderWidth: 1,
              borderColor: "#ced4da",
              borderRadius: 8,
              padding: 8,
              marginVertical: 8,
              backgroundColor: "#ffffff",
            }}
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
            style={{
              borderWidth: 1,
              borderColor: "#ced4da",
              borderRadius: 8,
              padding: 8,
              marginVertical: 8,
              backgroundColor: "#ffffff",
            }}
            placeholder="Tags"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Button title="Create Post" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
