import { BarChart } from "react-native-gifted-charts";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { Text, View } from "tamagui";

export const Bar = () => {
  const barData = [
    { value: 2620, label: "M", frontColor: "#177AD5" },
    { value: 1500, label: "T", frontColor: "#177AD5" },
    { value: 1745, label: "W", frontColor: "#177AD5" },
    { value: 3120, label: "T" },
    { value: 2600, label: "F", frontColor: "#177AD5" },
    { value: 2560, label: "S" },
    { value: 3000, label: "S" }
  ];
  return (
    <View
      flexDirection="column"
      gap={32}
    >
      <View
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={8}
        ml={"$-3"}
      >
        <ArrowLeft
          size={18}
          color="black"
        />
        <Text
          color="black"
          fontSize={16}
          fontWeight="$5"
        >
          Jan 1st - Jan 7th
        </Text>
      </View>

      <BarChart
        barWidth={22}
        noOfSections={3}
        barBorderRadius={4}
        maxValue={2800}
        frontColor="red"
        width={300}
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </View>
  );
};
