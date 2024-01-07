import React, { useEffect, useState } from "react";
import BigList from "react-native-big-list";
import { ScrollView, Tabs, View } from "tamagui";
import { useDebounce } from "use-debounce";

import { CardDemo } from "../../components/calorie/DemoCard";
import { HorizontalTabs } from "../../components/calorie/Tab";
import SearchBar from "../../components/home/SearchBar";
import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";
import config from "../../env.json";

const Foods = ({ commonFoods, loading, setText }: any) => {
  const renderItem = ({ item }) => (
    <CardDemo
      nam={item.food_name}
      cal={item.nf_calories.toString()}
      photo={item.photo.thumb}
    />
  );

  const renderHeader = () => <View />;
  const renderFooter = () => <View />;

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
      <BigList
        data={commonFoods}
        renderItem={renderItem}
        itemHeight={80} // Adjust based on your item height
        renderHeader={renderHeader}
        renderFooter={renderFooter}
        style={{ width: "110%", gap: 10, flexDirection: "column", flex: 1 }}
      />
    </View>
  );
};

export default function Calorie() {
  const [commonFoods, setCommonFoods] = useState(null);
  const [resetFood, setResetFood] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [debouncedText] = useDebounce(text, 250);

  const initialUrl = "https://trackapi.nutritionix.com/v2";
  const headers = {
    "x-app-id": config.nutrionAppId,
    "x-app-key": config.nutritionAPI
  };

  const getFoods = async (text) => {
    if (text.length > 0) {
      const url = `${initialUrl}/search/instant?query=${text}`;

      const response = await fetch(url, {
        method: "GET",
        headers: headers
      });
      const data = await response.json();
      // console.log(data);
      return data.branded;
    } else {
      setResetFood(!resetFood);
    }
  };

  useEffect(() => {
    (async () => {
      if (debouncedText) {
        const foods = await getFoods(debouncedText);
        setCommonFoods(foods);
      } else {
        setResetFood(!resetFood);
      }
    })();
  }, [debouncedText]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const url = `${initialUrl}/search/instant?query=common?common=True`;

      const response = await fetch(url, {
        method: "GET",
        headers: headers
      });
      const data = await response.json();
      setCommonFoods(data.branded);
      setLoading(false);
    })();
  }, [resetFood]);
  return (
    <MyStack overflow="visible">
      <MySafeAreaView alignItems="center">
        <HorizontalTabs
          firstTitle={"Dashboard"}
          secondTitle={"Foods"}
          loading={loading}
          secondComponent={
            <Foods
              commonFoods={commonFoods}
              setText={setText}
            />
          }
        />
      </MySafeAreaView>
    </MyStack>
  );
}
