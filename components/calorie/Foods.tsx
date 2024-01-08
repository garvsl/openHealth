import { ScrollView, Tabs, View } from "tamagui";

import SearchBar from "../home/SearchBar";

import { CardDemo } from "./DemoCard";

export const Foods = ({ commonFoods, setText }: any) => {
  return (
    <View
      width={"100%"}
      height={"100%"}
      padding="$4"
      justifyContent="center"
      alignItems="center"
    >
      <SearchBar
        placeHolder={"Search foods..."}
        onSearch={setText}
        props={{ width: "100%" }}
      />
      <ScrollView
        mt={20}
        // mb={-150}
        contentContainerStyle={{
          paddingBottom: 80
        }}
        width="110%"
        height={"100%"}
        // padding="$4"
        borderRadius="$4"
      >
        <Tabs
          // defaultValue="tab2"
          justifyContent="center"
          orientation="vertical"
          // marginTop={10}
          flexDirection="row"
          flexWrap="wrap"
          gap={-20}
          rowGap={16}
        >
          {commonFoods &&
            commonFoods.map((food, index) => {
              return (
                <CardDemo
                  key={index}
                  nam={food.food_name}
                  cal={food.nf_calories.toString()}
                  photo={food.photo.thumb}
                />
              );
            })}
        </Tabs>
      </ScrollView>
    </View>
  );
};
