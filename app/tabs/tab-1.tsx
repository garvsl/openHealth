import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { H5, Input, ScrollView, Tabs, Text } from "tamagui";
import {
  Button,
  Card,
  CardProps,
  H2,
  H3,
  H4,
  Image,
  Paragraph,
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

export default function Tab01() {
  return (
    <MyStack
      flexDirection="column"
      justifyContent="flex-start"
      //   alignItems="flex-start"
      gap={-5}
    >
      <Image
        width={"150%"}
        height={"100%"}
        left={-65}
        top={-150}
        position="absolute"
        resizeMode="contain"
        source={require("../../assets/dalle.png")}
      />

      <Card
        marginTop={265}
        elevate
        size="$4"
        w={"105%"}
        left={-8}
        bordered
        height={"auto"}
        animation="bouncy"
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
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
        </Card.Header>
        <Card.Background></Card.Background>
      </Card>
      <Card
        elevate
        size="$6"
        width={"105%"}
        left={-8}
        bordered
        height={"auto"}
        animation="bouncy"
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      >
        <Card.Header
          flexDirection="row"
          alignItems="center"
          gap={10}
          padded
        >
          <MaterialCommunityIcons
            name="pen"
            color={"darkblue"}
            size={50}
            top={5}
            left={-18}
          />
          <H3
            marginLeft={-19}
            mt={5}
            marginTop={-15}
          >
            Your personal objective
          </H3>

          <Paragraph
            marginLeft={-268}
            marginTop={27}
            theme="alt2"
            color={"grey"}
          >
            <MaterialCommunityIcons
              name="clock"
              color={"grey"}
              size={15}

              //   paddingRight={5}
              //   top={5}
              //   left={-18}
            />{" "}
            Now available
          </Paragraph>
        </Card.Header>

        {/* <Card.Footer padded>
        <XStack flex={1} />

        <Button borderRadius="$10">Purchase</Button>
      </Card.Footer> */}

        <Card.Background></Card.Background>
      </Card>
      <Card
        elevate
        size="$6"
        width={"105%"}
        left={-8}
        bordered
        height={"auto"}
        animation="bouncy"
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      >
        <Card.Header
          flexDirection="row"
          alignItems="center"
          gap={10}
          padded
        >
          <MaterialCommunityIcons
            name="check-circle"
            color={"green"}
            size={50}
            top={5}
            left={-18}
          />
          <H3
            marginLeft={-19}
            mt={5}
            marginTop={-15}
          >
            Health Check-in
          </H3>

          <Paragraph
            marginLeft={-190}
            marginTop={30}
            theme="alt2"
            gap={10}
          >
            <MaterialCommunityIcons
              name="clock"
              color={"grey"}
              size={15}

              //   paddingRight={5}
              //   top={5}
              //   left={-18}
            />{" "}
            4 min
          </Paragraph>
        </Card.Header>

        {/* <Card.Footer padded>
        <XStack flex={1} />

        <Button borderRadius="$10">Purchase</Button>
      </Card.Footer> */}

        <Card.Background></Card.Background>
      </Card>
    </MyStack>
  );
}
