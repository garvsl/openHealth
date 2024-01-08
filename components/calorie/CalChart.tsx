import { ScrollView, View } from "tamagui";

import { Bar } from "./BarChart";
import { Pie } from "./PieChart";

export const CalChart = () => {
  return (
    <View>
      <ScrollView
        pt={30}
        height={"100%"}
        contentContainerStyle={{
          paddingBottom: 100
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          flexDirection="column"
          gap={50}
        >
          <View ml={"$4"}>
            <Bar />
          </View>
          <Pie text={"Calories Consumed (kcals)"} />
          <Pie text={"Calories Burned (kcals)"} />
        </View>
      </ScrollView>
    </View>
  );
};
