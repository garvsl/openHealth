import { PieChart } from "react-native-gifted-charts";
import { Text, View } from "tamagui";

export const Pie = ({ text }: any) => {
  const pieData = [
    {
      value: 47,
      color: "#009FFF",
      gradientCenterColor: "#006DFF"
      //   focused: true
    },
    { value: 20, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
    { value: 10, color: "#BDB2FA", gradientCenterColor: "#8F80F3" }
    // { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97" }
  ];

  return (
    <View
      flexDirection="column"
      paddingLeft={16}
      gap={24}
    >
      <Text
        color="black"
        fontSize={16}
        fontWeight="$5"
        style={{ alignSelf: "center" }}
      >
        {text}
      </Text>
      <View
        flexDirection="row"
        gap={32}
      >
        <PieChart
          data={pieData}
          donut
          showGradient
          // sectionAutoFocus
          radius={80}
          innerRadius={60}
          // innerCircleColor={"#232B5D"}
          centerLabelComponent={() => {
            return (
              <View>
                <Text
                  style={{ fontSize: 22, color: "black", fontWeight: "bold" }}
                >
                  2689
                </Text>
                <Text style={{ fontSize: 14, color: "black" }}>kcal</Text>
              </View>
            );
          }}
        />
        <View
          flexDirection="row"
          justifyContent="space-between"
          width={110}
        >
          <View
            //   alignSelf="center"
            justifyContent="space-evenly"
            flexDirection="column"
          >
            <Text
              textShadowColor={"black"}
              textShadowRadius={0.1}
              color={"#009FFF"}
            >
              Protein:
            </Text>
            <Text
              textShadowColor={"black"}
              textShadowRadius={0.1}
              color={"#93FCF8"}
            >
              Carbs:
            </Text>
            <Text
              textShadowColor={"black"}
              textShadowRadius={0.1}
              color={"#BDB2FA"}
            >
              Fat:
            </Text>
          </View>
          <View
            //   alignSelf="center"
            justifyContent="space-evenly"
            flexDirection="column"
          >
            <Text
              textShadowColor={"black"}
              textShadowRadius={0.1}
              color={"$gray8"}
            >
              384g
            </Text>
            <Text
              textShadowColor={"black"}
              textShadowRadius={0.1}
              color={"$gray8"}
            >
              99.6g
            </Text>
            <Text
              textShadowColor={"black"}
              textShadowRadius={0.1}
              color={"$gray8"}
            >
              74.2g
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
