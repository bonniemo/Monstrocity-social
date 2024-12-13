import useMonstersStore from "@/stores/useMonstersStore";
import { router } from "expo-router";
import { Button } from "react-native";

export default function Settings() {
  const { logOut } = useMonstersStore();
  const handleLogOut = () => {
    logOut();
    router.replace("/");
  };

  return (
    <>
      <Button onPress={handleLogOut} title="Log Out" color="#000" />
    </>
  );
}
