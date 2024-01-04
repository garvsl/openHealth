import React, { useEffect, useState } from "react";
import { Search } from "@tamagui/lucide-icons";
import { Input, View, XStack } from "tamagui";

export default function SearchBar({ placeHolder, props, setFilteredItems, defaultItems }: any) {

  return (
    <View
      // flex={1}
      justifyContent="center"
    >
      <Search
        size={"$1"}
        // color="tomato"
        style={{ position: "absolute", zIndex: 99, marginLeft: 12.5 }}
      />
      <Input
        paddingLeft={45}
        // marginLeft={-5}
        // width={"105%"}
        fontSize={15}
        placeholder={placeHolder}
        backgroundColor={"$gray1"}
        borderRadius={15}
        // marginTop={-15}
        onChangeText={(text) =>  setFilteredItems(text != "" ? defaultItems
        .filter((item) => {
          return item.text.toLowerCase().includes(text.toLowerCase());
        }) : defaultItems)}
      />
    </View>
  );
}
