import { Trash } from "@tamagui/lucide-icons";
import { forwardRef, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import { RectButton, Swipeable } from "react-native-gesture-handler";
import { DemoCard } from "./DemoCard";
import {View} from "tamagui"
import { SheetDemo } from "./SheetDemo";

const renderRightActions = (progress, dragAnimatedValue, ref) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [180, 0],
      extrapolate: "clamp"
    });
    const opacity = dragAnimatedValue.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });
    const pressHandler = () => {
      ref.current.close();
    };
    return (
      <Animated.View
        style={{ flex: 1, transform: [{ translateX: trans }], opacity }}
      >
        <RectButton
  
          style={[
            styles.rightAction,
            { backgroundColor: "rgba(248, 0, 0, 0.8)", borderRadius: 10 }
          ]}
          onPress={pressHandler}
        >
          <Trash
            size={25}
            color="white"
          />
        </RectButton>
      </Animated.View>
    );
  };


export const SheetCard = forwardRef(function SheetCard({text, iconText, iconColor, size, func, children}:any, ref:any) {
    const [open, setOpen] = useState(false);

    
    return (
      <View
        width={"100%"}
        paddingHorizontal={"$2"}
      >
        <Swipeable
          ref={ref}
          friction={3}
          shouldCancelWhenOutside={true}
          cancelsTouchesInView={true}
          renderRightActions={(progress, dragAnimatedValue) => renderRightActions(progress, dragAnimatedValue, ref)}
          rightThreshold={2}
          overshootFriction={7}
          onSwipeableWillOpen={func}
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
  });
  
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