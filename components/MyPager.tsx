import { Image, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

export default function MyPager() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Image
            source={require("../assets/houses/lumina.png")}
            style={{ width: "100%", height: 300 }}
          />
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
