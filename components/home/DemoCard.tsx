import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, H4, YStack } from "tamagui";

export const DemoCard = ({
  text,
  iconText,
  iconColor,
  size,
  children,
  func,
  props
}: any) => {
  return (
    <Card
      size={"$4"}
      bordered
      // height={55}
      backgroundColor={"white"}
      animation="bouncy"
      // onPress={func}
      // pressStyle={{ scale: 0.925 }}
      {...props}
    >
      <Card.Header
        flexDirection="row"
        alignItems="center"
        gap={10}
        padded
      >
        <MaterialCommunityIcons
          name={iconText}
          color={iconColor}
          size={size}
        />
        <YStack>
          <H4 color={"black"}>{text}</H4>
          {children}
        </YStack>
      </Card.Header>
      <Card.Background></Card.Background>
    </Card>
  );
};
