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

  return  (
    <View style={{ flex: 1 }}>
      <PagerView
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={handlePageChange}
      >
        <View key="1">
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#ffd33d",
              marginBottom: 16,
            }}
          >
            Umbra
          </Text>
          <Image
            source={require("../assets/houses/umbra.png")}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "cover",
              marginBottom: 10,
              borderRadius: 30,
            }}
          />
          <HouseUmbra />
        </View>
        <View key="2">
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#ffd33d",
              marginBottom: 16,
            }}
          >
            Ignis
          </Text>
          <Image
            source={require("../assets/houses/ignis.png")}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "cover",
              marginBottom: 10,
              borderRadius: 30,
            }}
          />
          <HouseIgnis />
        </View>
        <View key="3">
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#ffd33d",
              marginBottom: 16,
            }}
          >
            Lumina
          </Text>
          <Image
            source={require("../assets/houses/lumina.png")}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "cover",
              marginBottom: 10,
              borderRadius: 30,
            }}
          />
          <HouseLumina />
        </View>
        <View key="4">
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#ffd33d",
              marginBottom: 16,
            }}
          >
            Terra
          </Text>
          <Image
            source={require("../assets/houses/terra.png")}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "cover",
              marginBottom: 10,
              borderRadius: 30,
            }}
          />
          <HouseTerra />
        </View>
      </PagerView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        {[0, 1, 2, 3].map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: activePage === index ? "#ffd33d" : "#ccc",
            }}
          />
        ))}
      </View>
    </View>
  );
}
