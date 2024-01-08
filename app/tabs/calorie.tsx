import React, { useEffect, useState } from "react";
import { ScrollView, Tabs, View } from "tamagui";
import { useDebounce } from "use-debounce";

import { Dashboard } from "../../components/calorie/Dashboard";
import { CardDemo } from "../../components/calorie/DemoCard";
import { Foods } from "../../components/calorie/Foods";
import { HorizontalTabs } from "../../components/calorie/Tab";
import SearchBar from "../../components/home/SearchBar";
import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";
import config from "../../env.json";

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
    if (text.length > 3) {
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
          firstComponent={<Dashboard />}
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
