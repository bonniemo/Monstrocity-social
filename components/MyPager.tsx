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
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={handlePageChange}
      >
        <View key="1">
          <Text style={houseStyles.houseTitle}>Umbra</Text>
          <Image
            source={require("../assets/houses/umbra.png")}
            style={houseStyles.houseImage}
          />
          <HouseUmbra />
        </View>
        <View key="2">
          <Text style={houseStyles.houseTitle}>Ignis</Text>
          <Image
            source={require("../assets/houses/ignis.png")}
            style={houseStyles.houseImage}
          />
          <HouseIgnis />
        </View>
        <View key="3">
          <Text style={houseStyles.houseTitle}>Lumina</Text>
          <Image
            source={require("../assets/houses/lumina.png")}
            style={houseStyles.houseImage}
          />
          <HouseLumina />
        </View>
        <View key="4">
          <Text style={houseStyles.houseTitle}>Terra</Text>
          <Image
            source={require("../assets/houses/terra.png")}
            style={houseStyles.houseImage}
          />
          <HouseTerra />
        </View>
      </PagerView>
      <View style={styles.paginationContainer}>
        {[0, 1, 2, 3].map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              activePage === index && styles.activePaginationDot,
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
  pagerView: {
    flex: 1,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#ccc",
  },
  activePaginationDot: {
    backgroundColor: "#ffd33d",
  },
});

const houseStyles = StyleSheet.create({
  houseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffd33d",
    marginBottom: 16,
  },
  houseImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 30,
  },
});
