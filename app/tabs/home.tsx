import React, { createRef, useRef, useState } from "react";
import { H4, ScrollView, Text, YStack } from "tamagui";
import { XStack } from "tamagui";
import HeaderBar from "../../components/home/HeaderBar";
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
    },

  ]);

  
  const [filteredItems, setFilteredItems] = useState(defaultItems);
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
              setFilteredItems={setFilteredItems}
              defaultItems={defaultItems}
            />
          </XStack>
        </YStack>

        <ScrollView
          marginTop={-35}
          scrollsToTop={true}
          onScroll={()=>{refs.map((e)=>refs.length > 1 && e.current != null  && e.current.close())}}
          scrollEventThrottle={0}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", paddingBottom: 30, paddingTop:20}}
        >
          <YStack
            alignItems="center"
            gap={11}
            width={"100%"}
          >
              {filteredItems.length == 0 ?(
                  <SheetCard
                  text={"Theres nothing here..."}
                  iconText={"magnify"}
                  iconColor={"black"}
                  size={25}
                  nonremove={true}
                /> 
                ) : (
                  filteredItems.map((item, index) => {
                    return(             
                        <SheetCard
                          ref={refs[index]}
                          key={index}
                          text={item.text}
                          iconText={item.iconText}
                          iconColor={item.iconColor}
                          size={item.size}
                          func={()=>{refs.map((e)=>refs.length > 1 && e.current != null && e != refs[index] && e.current.close())}}
                        />
                    )
                  })
                )
              }
          </YStack>
        </ScrollView>
      </MySafeAreaView>
    </MyStack>
  );
}
