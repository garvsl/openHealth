import { BarChart } from "react-native-gifted-charts";
import { View } from "tamagui";

export const CalChart = () => {
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
    <View>
      <BarChart
        barWidth={22}
        noOfSections={3}
        barBorderRadius={4}
        maxValue={2800}
        frontColor="red"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </View>
  );
};
