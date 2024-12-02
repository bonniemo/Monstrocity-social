import { useState } from "react";
import {
  Image,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PagerView from "react-native-pager-view";
import HouseIgnis from "./houses/HouseIgnis";
import HouseLumina from "./houses/HouseLumina";
import HouseTerra from "./houses/HouseTerra";
import HouseUmbra from "./houses/HouseUmbra";

type PagerViewEvent = NativeSyntheticEvent<{
  position: number;
}>;

export default function MyPager() {
  const [activePage, setActivePage] = useState(0);

  const handlePageChange = (e: PagerViewEvent) => {
    setActivePage(e.nativeEvent.position);
  };

  return (
    <View style={styles.container}>
      <PagerView
        style={styles.container}
        initialPage={0}
        onPageSelected={handlePageChange}
      >
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
          <HouseTerra />
        </View>
      </PagerView>
      <View style={styles.pagination}>
        {[0, 1, 2, 3].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activePage === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
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
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#ffd33d",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});
