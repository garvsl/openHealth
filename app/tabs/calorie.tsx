import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { H5, Input, ScrollView, Tabs, Text } from "tamagui";

import { CardDemo } from "../../components/DemoCard";
import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";
import config from "../../env.json";

export default function Calorie() {
  const [commonFoods, setCommonFoods] = useState(null);
  const [resetFood, setResetFood] = useState(false);

  const initialUrl = "https://trackapi.nutritionix.com/v2";
  const headers = {
    "x-app-id": config.nutrionAppId,
    "x-app-key": config.nutritionAPI
  };

  const onTextChange = async (e) => {
    if (e.length > 0) {
      const url = `${initialUrl}/search/instant?query=${e}`;

      const response = await fetch(url, {
        method: "GET",
        headers: headers
      });
      const data = await response.json();
      setCommonFoods(data.branded);
    } else {
      setResetFood(true);
    }
  };
  useEffect(() => {
    (async () => {
      const url = `${initialUrl}/search/instant?query=common?common=True`;

      const response = await fetch(url, {
        method: "GET",
        headers: headers
      });
      const data = await response.json();
      setCommonFoods(data.branded);
    })();
  }, [resetFood]);
  return (
    <MyStack overflow="visible">
      <MySafeAreaView alignItems="center">
        <Input
          size="$4"
          paddingLeft="$8"
          borderWidth={2}
          width={"95%"}
          onChangeText={(e) => onTextChange(e)}
        />
        <MaterialCommunityIcons
          name="text-box-search-outline"
          size={30}
          position="absolute"
        />
        <ScrollView
          width="110%"
          backgroundColor="white"
          // padding="$4"
          borderRadius="$4"
        >
          <Tabs
            // defaultValue="tab2"
            justifyContent="center"
            orientation="vertical"
            marginTop={10}
            backgroundColor={"transparent"}
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
                    // photo={food.photo} // Assuming photo is an object
                  />
                );
              })}
          </Tabs>
        </ScrollView>
      </MySafeAreaView>
    </MyStack>
  );
}
