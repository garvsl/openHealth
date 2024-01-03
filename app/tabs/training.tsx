import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { X } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import {
  Adapt,
  Button,
  Card,
  CardProps,
  Dialog,
  Fieldset,
  H4,
  H5,
  Image,
  Input,
  Label,
  Paragraph,
  ScrollView,
  Sheet,
  Tabs,
  Text,
  TooltipSimple,
  Unspaced,
  XStack
} from "tamagui";

import { MyStack } from "../../components/MyStack";

export function CardDemo() {
  return (
    <XStack
      $sm={{ flexDirection: "column" }}
      paddingHorizontal="$4"
      space
    >
      <DemoCard
        animation="bouncy"
        size="$4"
        width={250}
        height={300}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      />

      <DemoCard
        size="$5"
        width={250}
        height={300}
      />
    </XStack>
  );
}
export function DemoCard(props: CardProps) {
  return (
    <Card
      elevate
      size="$4"
      bordered
      {...props}
    >
      <Card.Header
        flexDirection="row"
        alignItems="center"
        gap={10}
        padded
      >
        <MaterialCommunityIcons
          name="heart"
          color={"red"}
          size={30}
          top={5}
        />
        <H4 mt={5}>Welcome to OpenHealth</H4>

        {/* <Paragraph theme="alt2">Now available</Paragraph> */}
      </Card.Header>

      {/* <Card.Footer padded>
        <XStack flex={1} />

        <Button borderRadius="$10">Purchase</Button>
      </Card.Footer> */}

      <Card.Background></Card.Background>
    </Card>
  );
}

export default function Training() {
  const router = useRouter();
  return (
    <MyStack>
      <ScrollView
        width="100%"
        // left="-5%"
        marginTop={-5}
        marginBottom={-20}
        bottom={0}
        backgroundColor="white"
        contentContainerStyle={{ alignItems: "flex-start" }}
        // padding="$4"
        borderRadius="$4"
      >
        <Card
          marginBottom={15}
          elevate
          size="$12"
          w={"100%"}
          h={"30%"}
          // left={-8}
          bordered
          overflow="hidden"
          borderRadius={40}
          onPress={() => router.push("/responses")}
          animation="bouncy"
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        >
          <Card.Header
            flexDirection="column"
            alignItems="center"
            // justifyContent=""
            gap={10}
            padded
          >
            <H4
              textShadowColor={"black"}
              textShadowRadius={10}
              color={"white"}
            >
              Arnold AI
            </H4>
          </Card.Header>
          <Card.Background>
            <Image
              width={"100%"}
              height={"100%"}
              borderRadius={40}
              // left={-65}
              // top={-150}
              // position="absolute"
              resizeMode="cover"
              source={require("../../assets/arnold.png")}
            ></Image>
          </Card.Background>
        </Card>
        <Card
          marginBottom={15}
          elevate
          size="$12"
          w={"100%"}
          h={"30%"}
          // left={-8}
          bordered
          overflow="hidden"
          borderRadius={40}
          animation="bouncy"
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        >
          <Card.Header
            flexDirection="column"
            alignItems="center"
            // justifyContent=""
            gap={10}
            padded
          >
            <H4
              textShadowColor={"black"}
              textShadowRadius={10}
              color={"white"}
            >
              Goggins AI
            </H4>
          </Card.Header>
          <Card.Background>
            <Image
              width={"100%"}
              height={"100%"}
              borderRadius={40}
              // left={-65}
              // top={-150}
              // position="absolute"
              resizeMode="cover"
              source={require("../../assets/goggins.png")}
            ></Image>
          </Card.Background>
        </Card>
        <Card
          marginBottom={15}
          elevate
          size="$12"
          w={"100%"}
          h={"30%"}
          // left={-8}
          bordered
          overflow="hidden"
          borderRadius={40}
          animation="bouncy"
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        >
          <Card.Header
            flexDirection="column"
            alignItems="center"
            // justifyContent=""
            gap={10}
            padded
          >
            <H4
              textShadowColor={"black"}
              textShadowRadius={10}
              color={"white"}
            >
              Dietician AI
            </H4>
          </Card.Header>
          <Card.Background>
            <Image
              width={"100%"}
              height={"100%"}
              borderRadius={40}
              // left={-65}
              // top={-150}
              // position="absolute"
              resizeMode="cover"
              source={require("../../assets/dietician.png")}
            ></Image>
          </Card.Background>
        </Card>
        <Card
          marginBottom={15}
          elevate
          size="$12"
          w={"100%"}
          h={"50%"}
          // left={-8}
          bordered
          overflow="hidden"
          borderRadius={40}
          animation="bouncy"
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        >
          <Card.Header
            flexDirection="column"
            alignItems="center"
            // justifyContent=""
            gap={10}
            padded
          >
            <H4
              textShadowColor={"black"}
              textShadowRadius={10}
              color={"white"}
            >
              Mentzer AI
            </H4>
          </Card.Header>
          <Card.Background>
            <Image
              width={"100%"}
              height={"100%"}
              borderRadius={40}
              // left={-65}
              // top={-150}
              // position="absolute"
              resizeMode="cover"
              source={require("../../assets/mentzer.png")}
            ></Image>
          </Card.Background>
        </Card>
      </ScrollView>
    </MyStack>
  );
}
