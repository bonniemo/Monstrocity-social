import { Image, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import HouseIgnis from "./houses/HouseIgnis";
import HouseLumina from "./houses/HouseLumina";
import HouseUmbra from "./houses/HouseUmbra";

export default function MyPager() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Text style={styles.houseTitle}>Umbra</Text>
          <Image
            source={require("../assets/houses/umbra.png")}
            style={styles.houseImage}
          />
          <HouseUmbra />
        </View>
        <View style={styles.page} key="2">
          <Text style={styles.houseTitle}>Ignis</Text>
          <Image
            source={require("../assets/houses/ignis.png")}
            style={styles.houseImage}
          />
          <HouseIgnis />
        </View>
        <View style={styles.page} key="3">
          <Text style={styles.houseTitle}>Lumina</Text>
          <Image
            source={require("../assets/houses/lumina.png")}
            style={styles.houseImage}
          />
          <HouseLumina />
        </View>
        <View style={styles.page} key="4">
          <Text style={styles.houseTitle}>Terra</Text>
          <Image
            source={require("../assets/houses/terra.png")}
            style={styles.houseImage}
          />
          <HouseLumina />
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {},
  houseImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 30,
  },
  houseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffd33d",
    marginBottom: 16,
  },
});
