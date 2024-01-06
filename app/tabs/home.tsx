import React, { createRef, useEffect, useRef, useState } from "react";
import { AnimatePresence, H4, ScrollView, Text, YStack } from "tamagui";
import { XStack } from "tamagui";

import { DemoCard } from "../../components/home/DemoCard";
import HeaderBar from "../../components/home/HeaderBar";
import SearchBar from "../../components/home/SearchBar";
import { SheetCard } from "../../components/home/SheetCard";
import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";

export default function Home() {
  const [defaultItems, setDefaultItems] = useState([
    {
      id: 123,
      text: "Welcome to OpenHealth",
      iconText: "heart",
      iconColor: "red",
      size: 35
    },
    {
      id: 223,
      text: "Your personal objective",
      iconText: "pen",
      iconColor: "darkblue",
      size: 50
    },
    {
      id: 323,
      text: "Todays Tracking",
      iconText: "calendar",
      iconColor: "orange",
      size: 50
    },
    {
      id: 423,
      text: "Receive Coaching",
      iconText: "account-group",
      iconColor: "purple",
      size: 50
    },
    {
      id: 523,
      text: "Health Check-In",
      iconText: "plus-circle",
      iconColor: "green",
      size: 50
    }
  ]);
  const [filteredItems, setFilteredItems] = useState(defaultItems);
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    setRefs(defaultItems.map(() => createRef()));
    setFilteredItems(defaultItems);
  }, [defaultItems]);

  const handleDelete = (itemId) => {
    setDefaultItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  };
  const onSearch = (searchText) => {
    if (searchText) {
      const searchResults = defaultItems.filter((item) =>
        item.text.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredItems(searchResults);
    } else {
      setFilteredItems(defaultItems);
    }
  };

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
          padding={"3.5%"}
        >
          <HeaderBar />

          <XStack
            justifyContent="flex-start"
            flexDirection="column"
            gap={8}
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
              onSearch={onSearch}
            />
          </XStack>
        </YStack>

        <ScrollView
          marginTop={-35}
          marginBottom={-35}
          scrollsToTop={true}
          onScroll={() => {
            refs.map(
              (e) => refs.length > 1 && e.current != null && e.current.close()
            );
          }}
          scrollEventThrottle={0}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: 50,
            paddingTop: 20
          }}
        >
          <YStack
            alignItems="center"
            gap={11}
            width={"100%"}
            paddingHorizontal={"$3"}
          >
            {filteredItems.length == 0 ? (
              <DemoCard
                text={"Theres nothing here..."}
                iconText={"magnify"}
                iconColor={"black"}
                size={25}
                props={{
                  width: "100%"
                }}
              />
            ) : (
              <AnimatePresence>
                {filteredItems.map((item, index) => {
                  return (
                    <SheetCard
                      ref={refs[index]}
                      key={index}
                      text={item.text}
                      iconText={item.iconText}
                      iconColor={item.iconColor}
                      size={item.size}
                      func={() => {
                        refs.map(
                          (e) =>
                            refs.length > 1 &&
                            e.current != null &&
                            e != refs[index] &&
                            e.current.close()
                        );
                      }}
                      onDelete={() => handleDelete(item.id)}
                    />
                  );
                })}
              </AnimatePresence>
            )}
          </YStack>
        </ScrollView>
      </MySafeAreaView>
    </MyStack>
  );
}
