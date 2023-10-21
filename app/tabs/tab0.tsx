import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { H5, Input, ScrollView, Tabs, Text } from "tamagui";

import { CardDemo } from "../../components/DemoCard";
import { MyStack } from "../../components/MyStack";

export default function Tab1() {
  const [commonFoods, setCommonFoods] = useState(null);
  const [resetFood, setResetFood] = useState(false);

  const onTextChange = async (e) => {
    if (e.length > 0) {
      const url = `https://trackapi.nutritionix.com/v2/search/instant?query=${e}`;

      const headers = {
        "x-app-id": "8cfaa034",
        "x-app-key": "63e1f58b9467bbdb75b39502dbc177c8"
      };

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
      const url =
        "https://trackapi.nutritionix.com/v2/search/instant?query=common?common=True";

      const headers = {
        "x-app-id": "8cfaa034",
        "x-app-key": "63e1f58b9467bbdb75b39502dbc177c8"
      };

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
      <Input
        size="$4"
        paddingLeft="$8"
        borderWidth={2}
        onChangeText={(e) => onTextChange(e)}
      />
      <MaterialCommunityIcons
        name="text-box-search-outline"
        size={30}
        top={25}
        left={30}
        position="absolute"
      />
      <ScrollView
        width="110%"
        left="-5%"
        marginTop={-15}
        marginBottom={-20}
        bottom={0}
        backgroundColor="white"
        // padding="$4"
        borderRadius="$4"
      >
        <Tabs
          // defaultValue="tab2"
          justifyContent="center"
          orientation="vertical"
          backgroundColor={"transparent"}
          flexDirection="row"
          flexWrap="wrap"
          gap={-8}
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
    </MyStack>
  );
}
