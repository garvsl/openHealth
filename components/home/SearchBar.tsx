import React, { useEffect, useState } from "react";
import { Search } from "@tamagui/lucide-icons";
import { Input, View } from "tamagui";

export default function SearchBar({ placeHolder, onSearch, props }: any) {
  return (
    <View
      justifyContent="center"
      {...props}
    >
      <Search
        size={"$1"}
        style={{ position: "absolute", zIndex: 99, marginLeft: 12.5 }}
      />
      <Input
        paddingLeft={45}
        fontSize={15}
        placeholder={placeHolder}
        backgroundColor={"$gray1"}
        borderRadius={15}
        onChangeText={(text) => {
          onSearch(text);
        }}
      />
    </View>
  );
}
