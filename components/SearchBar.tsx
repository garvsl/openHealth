import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Input, XStack } from "tamagui";

export default function SearchBar({ placeHolder }: any) {
  return (
    <>
      <MaterialCommunityIcons
        name={"magnify"}
        color={"black"}
        size={20}
        position="absolute"
        left={12}
        top={134}
        zIndex={1}
      />
      <Input
        paddingLeft={45}
        marginLeft={-5}
        // width={"105%"}
        placeholder={placeHolder}
        backgroundColor={"$gray1"}
        borderRadius={20}
        marginTop={-15}
      ></Input>
    </>
  );
}
