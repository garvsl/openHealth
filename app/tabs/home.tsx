import React, { useState } from "react";
import { Animated, StyleSheet } from "react-native";
import { FlatList, RectButton, Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Trash } from "@tamagui/lucide-icons";
import { ScrollView, Text, View, YStack } from "tamagui";
import { Button, Card, H4, Paragraph, XStack } from "tamagui";

import HeaderBar from "../../components/HeaderBar";
import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";
import SearchBar from "../../components/SearchBar";
import { SheetDemo } from "../../components/SheetDemo";

const DemoCard = ({ text, iconText, iconColor, size, children, func }: any) => {
  return (
    <Card
      size={"$4"}
      bordered
      height={85}
      backgroundColor={"white"}
      animation="bouncy"
      // marginLeft={"$2.5"}
      // scale={1}
      // hoverStyle={{ scale: 0.925 }}
      // pressStyle={{ scale: 0.875 }}
      // onPress={func}
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

// const renderRightActions = (progress: any, dragAnimatedValue: any) => {
//   const opacity = dragAnimatedValue.interpolate({
//     inputRange: [-100, 0],
//     outputRange: [1, 0],
//     extrapolate: "clamp"
//   });
//   return (
//     <View style={styles.swipedRow}>
//       <View style={styles.swipedConfirmationContainer}>
//         <Text style={styles.deleteConfirmationText}>Are you sure?</Text>
//       </View>
//       <Animated.View
//         style={[{ opacity, alignItems: "center", justifyContent: "center" }]}
//       >
//         <Button
//           marginTop={-24}
//           height={"115%"}
//           theme="red"
//           justifyContent="flex-end"
//         >
//           <Text color={"$red10Dark"}>Delete</Text>
//         </Button>
//       </Animated.View>
//     </View>
//   );
// };

const renderRightActions = (progress, dragAnimatedValue) => {
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [175, 0],
    extrapolate: "clamp"
  });
  const opacity = dragAnimatedValue.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: "clamp"
  });
  // const pressHandler = () => {
  //   this.close();
  //   alert(text);
  // };
  return (
    <Animated.View
      style={{ flex: 1, transform: [{ translateX: trans }], opacity }}
    >
      <RectButton
        style={[
          styles.rightAction,
          { backgroundColor: "red", borderRadius: 10 }
        ]}
        // onPress={pressHandler}
      >
        <Trash
          size={25}
          color="white"
        />
      </RectButton>
    </Animated.View>
  );
};

const SheetCard = ({ text, iconText, iconColor, size, children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <View
      width={"100%"}
      paddingHorizontal={"$2"}
    >
      <Swipeable
        friction={3}
        shouldCancelWhenOutside={true}
        cancelsTouchesInView={true}
        renderRightActions={renderRightActions}
        rightThreshold={2}
        overshootFriction={7}
      >
        <SheetDemo
          open={open}
          setOpen={setOpen}
        >
          <DemoCard
            text={text}
            iconText={iconText}
            iconColor={iconColor}
            size={size}
            func={() => setOpen(true)}
          >
            {children}
          </DemoCard>
        </SheetDemo>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 300
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingLeft: 5,
    backgroundColor: "#efefef",
    margin: 20,
    minHeight: 50
  },
  swipedRow: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingLeft: 5,
    backgroundColor: "#818181",
    margin: 20,
    minHeight: 50
  },
  swipedConfirmationContainer: {
    flex: 1
  },
  deleteConfirmationText: {
    color: "#fcfcfc",
    fontWeight: "bold"
  },
  deleteButton: {
    backgroundColor: "#b60000",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%"
  },
  deleteButtonText: {
    color: "#fcfcfc",
    fontWeight: "bold",
    padding: 3
  },
  rightAction: {
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    flex: 1,
    justifyContent: "center"
  }
});

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
          // marginTop={-10}
          // margin={"$4"}
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
          // marginLeft={-3}
          // marginBottom={-50}
          marginTop={-25}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
          // paddingLeft={"4%"}
          // marginLwe={"$4"}
          // paddingRight={"4%"}
        >
          <YStack
            alignItems="center"
            gap={11}
            width={"100%"}
          >
            {text == "" &&
              defaultItems.map((item, index) => (
                <SheetCard
                  key={index}
                  text={item.text}
                  iconText={item.iconText}
                  iconColor={item.iconColor}
                  size={item.size}
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

            {/* <SheetCard
              text={"Welcome to OpenHealth"}
              iconText={"heart"}
              iconColor={"red"}
              size={35}
            />

            <SheetCard
              text={"Your personal objective"}
              iconText={"pen"}
              iconColor={"darkblue"}
              size={50}
            > */}
            {/* <CardParagraph
                text={"1 minute"}
                iconText={"clock"}
                iconColor={"grey"}
              /> */}
            {/* </SheetCard> */}

            {/* <SheetCard
              text={"Todays Tracking"}
              iconText={"calendar"}
              iconColor={"orange"}
              size={50}
            > */}
            {/* <CardParagraph
                text={"1 minute"}
                iconText={"clock"}
                iconColor={"grey"}
              /> */}
            {/* </SheetCard> */}

            {/* <SheetCard
              text={"Receive Coaching"}
              iconText={"account-group"}
              iconColor={"purple"}
              size={50}
            > */}
            {/* <CardParagraph
                text={"2 minutes"}
                iconText={"clock"}
                iconColor={"grey"}
              /> */}
            {/* </SheetCard> */}

            {/* <SheetCard
              text={"Health Check-In"}
              iconText={"plus-circle"}
              iconColor={"green"}
              size={50}
            > */}
            {/* <CardParagraph
                text={"4 minutes"}
                iconText={"clock"}
                iconColor={"grey"}
              /> */}
            {/* </SheetCard> */}
          </YStack>
        </ScrollView>
      </MySafeAreaView>
    </MyStack>
  );
}
