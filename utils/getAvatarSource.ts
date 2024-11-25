import avatarMapping from "./avatarMapping";

export const getAvatarSource = (author: string) => {
    const avatarKey = avatarMapping[author] || avatarMapping["default.png"];
    return avatarKey;
  };