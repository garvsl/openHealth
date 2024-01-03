import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  divide,
  interpolate,
  Extrapolate,
  sub,
  cond,
  add,
  lessThan,
  multiply,
} from "react-native-reanimated";
import { HEIGHT } from "./ItemLayout";

const styles = StyleSheet.create({
  remove: {
    color: "white",
    fontFamily: "UberMoveMedium",
    fontSize: 14,
  },
});

interface ActionProps {}

const Action = ({}: ActionProps) => {
  return (
    <View
      style={{
        backgroundColor: "#D93F12",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 5,
          width: 20,
          backgroundColor: "white",
        }}
      />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.remove}>Remove</Text>
      </View>
    </View>
  );
};

export default Action;
