import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import React from "react";

type Props = {
  onImageSelected: (uri: string) => void;
};

export default function ImagePickerComponent({ onImageSelected }: Props) {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <Button variant="withIcon" label="Choose a photo" onPress={pickImageAsync} />
  );
}
