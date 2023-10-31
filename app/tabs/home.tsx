import React, { Children, useEffect, useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import {
  Avatar,
  H5,
  Input,
  ScrollView,
  Sheet,
  Tabs,
  Text,
  YStack
} from "tamagui";
import {
  Button,
  Card,
  CardProps,
  H2,
  H3,
  H4,
  Paragraph,
  XStack
} from "tamagui";

import HeaderBar from "../../components/HeaderBar";
import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";
import SearchBar from "../../components/SearchBar";
import { SheetDemo } from "../../components/SheetDemo";

const DemoCard = ({ text, iconText, iconColor, size, children, func }: any) => {
  return (
    <Card
      size="$5"
      w={"100%"}
      bordered
      height={"auto"}
      backgroundColor={"white"}
      animation="bouncy"
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      onPress={func}
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

const CardParagraph = ({ text, iconText, iconColor }: any) => {
  return (
    <Paragraph
      theme="alt2"
      color={"grey"}
      marginTop={-5}
    >
      <MaterialCommunityIcons
        name={iconText}
        color={iconColor}
        size={15}
      />{" "}
      {text}
    </Paragraph>
  );
};

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <MyStack
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      backgroundColor={"white"}
    >
      <MySafeAreaView
        // backgroundColor={"red"}
        gap={25}
      >
        <YStack gap={30}>
          <HeaderBar />

          <XStack
            // marginLeft={-10}
            // width={"110%"}
            justifyContent="flex-start"
          >
            <Text
              fontSize={"$7"}
              fontWeight={"600"}
              color={"black"}
            >
              Good Morning, Garv!
            </Text>
          </XStack>

          <SearchBar placeHolder={"Search tasks..."} />
        </YStack>

        <ScrollView
          marginLeft={-3}
          marginBottom={-50}
          showsVerticalScrollIndicator={false}
        >
          <YStack
            alignItems="center"
            gap={12}
          >
            <SheetDemo
              open={open}
              setOpen={setOpen}
            >
              <DemoCard
                text={"Welcome to OpenHealth"}
                iconText={"heart"}
                iconColor={"red"}
                size={35}
                func={() => setOpen(true)}
              />
            </SheetDemo>

            <SheetDemo
              open={open}
              setOpen={setOpen}
            >
              <DemoCard
                text={"Your personal objective"}
                iconText={"pen"}
                iconColor={"darkblue"}
                size={50}
                func={() => setOpen(true)}
              >
                <CardParagraph
                  text={"Now available"}
                  iconText={"clock"}
                  iconColor={"grey"}
                />
              </DemoCard>
            </SheetDemo>

            <SheetDemo
              open={open}
              setOpen={setOpen}
            >
              <DemoCard
                text={"Health Check-In"}
                iconText={"check-circle"}
                iconColor={"green"}
                size={50}
                func={() => setOpen(true)}
              >
                <CardParagraph
                  text={"4 minutes"}
                  iconText={"clock"}
                  iconColor={"grey"}
                />
              </DemoCard>
            </SheetDemo>

            <SheetDemo
              open={open}
              setOpen={setOpen}
            >
              <DemoCard
                text={"Todays Tracking"}
                iconText={"calendar"}
                iconColor={"orange"}
                size={50}
                func={() => setOpen(true)}
              >
                <CardParagraph
                  text={"1 minute"}
                  iconText={"clock"}
                  iconColor={"grey"}
                />
              </DemoCard>
            </SheetDemo>
          </YStack>
        </ScrollView>
      </MySafeAreaView>
    </MyStack>
  );
}
