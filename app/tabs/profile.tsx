import React from "react";
import { useRouter } from "expo-router";
import { Text } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

import { MyStack } from "../../components/MyStack";

export default function Profile() {
  const router = useRouter();
  return (
    <MyStack>
      <LinearGradient
        position="absolute"
        top={0}
        bottom={0}
        width="25%"
        height={"20$%"}
        colors={["$background", "$color"]}
      />
    </MyStack>
  );
}
