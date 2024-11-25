import avatarMapping from "./avatarMapping";
import { monstersMapping } from "./monstersMapping";

export const getAvatarSource = (author: string) => {
  const avatarKey = monstersMapping[author] || "default.png"; 
  return avatarMapping[avatarKey] || avatarMapping["default.png"]; 
};
