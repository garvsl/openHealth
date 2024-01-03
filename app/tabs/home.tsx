import React, { createRef, useRef, useState } from "react";
import { ScrollView, Text, YStack } from "tamagui";
import { XStack } from "tamagui";
import HeaderBar from "../../components/HeaderBar";
import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";
import SearchBar from "../../components/home/SearchBar";
import { SheetCard } from "../../components/home/SheetCard";

export default function Home() {
  const [defaultItems, setDefaultItems] = useState([
    {
      text: "Welcome to OpenHealth",
      iconText: "heart",
      iconColor: "red",
      size: 35
    },
    {
      text: "Your personal objective",
      iconText: "pen",
      iconColor: "darkblue",
      size: 50
    },
    {
      text: "Todays Tracking",
      iconText: "calendar",
      iconColor: "orange",
      size: 50
    },
    {
      text: "Receive Coaching",
      iconText: "account-group",
      iconColor: "purple",
      size: 50
    },
    {
      text: "Health Check-In",
      iconText: "plus-circle",
      iconColor: "green",
      size: 50
    }
  ]);

  const [text, setText] = useState("");
  const refs = defaultItems.map(() => useRef(null));

  return (
    <MyStack
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      padding={0}
      backgroundColor={"white"}
    >
      <MySafeAreaView
        width={"100%"}
        gap={25}
      >
        <YStack
          gap={30}
          padding={"5%"}
          paddingLeft={"4%"}
        >
          <HeaderBar />

          <XStack
            justifyContent="flex-start"
            flexDirection="column"
            gap={10}
          >
            <Text
              fontSize={"$7"}
              fontWeight={"600"}
              color={"black"}
            >
              Welcome Back, Garv!
            </Text>
            <SearchBar
              placeHolder={"Search tasks..."}
              setText={setText}
            />
          </XStack>
        </YStack>

        <ScrollView
          marginTop={-15}
          marginBottom={15}
          onScroll={()=>{refs.map((e)=>e.current.close())}}
          scrollEventThrottle={0}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <YStack
            alignItems="center"
            gap={11}
            width={"100%"}
          >
            {text == "" &&
              defaultItems.map((item, index) => (
                <SheetCard
                  ref={refs[index]}
                  key={index}
                  text={item.text}
                  iconText={item.iconText}
                  iconColor={item.iconColor}
                  size={item.size}
                  func={()=>{refs.map((e)=>e != refs[index] && e.current.close())}}
                />
              ))}

            {text != "" &&
              defaultItems
                .filter((item) => {
                  return item.text.toLowerCase().includes(text.toLowerCase());
                })
                .map((item, index) => {
                  {
                    return item ? (
                      <SheetCard
                        key={index}
                        text={item.text}
                        iconText={item.iconText}
                        iconColor={item.iconColor}
                        size={item.size}
                      />
                    ) : (
                      <SheetCard
                        key={index}
                        text={"No results found"}
                        iconText={"magnify"}
                        iconColor={"black"}
                        size={20}
                      />
                    );
                  }
                })}
          </YStack>
        </ScrollView>
      </MySafeAreaView>
    </MyStack>
  );
}
