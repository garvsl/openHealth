import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Button, Square } from "tamagui";

import { ModerateScale } from "../hooks/metrics";
export default function Layout() {
  const router = useRouter();

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "",
          tabBarStyle: {
            // marginBottom: -10,
            marginLeft: -20
          },
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="home"
                {...props}
                size={ModerateScale(30)}
                marginBottom={-15}
                marginRight={-20}
              />
            );
          }
          // headerLeft() {
          //   return (
          //     <Square
          //       backgroundColor={"white"}
          //       width={"1000%"}
          //       height={"100%"}
          //     ></Square>
          //   );
          // }
        }}
      />
      <Tabs.Screen
        name="calorie"
        options={{
          title: "",
          headerShown: false,
          tabBarStyle: {
            // marginBottom: -10
            marginLeft: -20
          },
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="food-apple"
                {...props}
                size={ModerateScale(30)}
                marginBottom={-15}
                marginRight={-20}
              />
            );
          }
          // headerLeft() {
          //   return (
          //     <Button
          //       ml="$2.5"
          //       onPress={() => router.push("/")}
          //     >
          //       <MaterialCommunityIcons name="arrow-left" />
          //     </Button>
          //   );
          // }
        }}
      />
      <Tabs.Screen
        name="vision"
        options={{
          title: "",
          headerShown: false,
          tabBarStyle: {
            // marginBottom: -10
            marginLeft: -20
          },
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="camera"
                {...props}
                size={ModerateScale(30)}
                marginBottom={-20}
                marginRight={-20}
              />
            );
          }
          // headerLeft() {
          //   return (
          //     <Button
          //       ml="$2.5"
          //       onPress={() => router.push("/")}
          //     >
          //       <MaterialCommunityIcons name="arrow-left" />
          //     </Button>
          //   );
          // }
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          title: "",
          headerShown: false,
          tabBarStyle: {
            // marginBottom: -10
            marginLeft: -20
          },
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="dumbbell"
                {...props}
                size={ModerateScale(30)}
                marginBottom={-15}
                marginRight={-20}
              />
            );
          }

          // headerLeft() {
          //   return (
          //     <Button
          //       ml="$2.5"
          //       onPress={() => router.push("/")}
          //     >
          //       <MaterialCommunityIcons name="arrow-left" />
          //     </Button>
          //   );
          // }
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          headerShown: false,
          tabBarStyle: {
            // marginBottom: -10
            marginLeft: -20
          },
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="face-man-outline"
                {...props}
                size={ModerateScale(30)}
                marginBottom={-15}
                marginRight={-20}
              />
            );
          }

          // headerLeft() {
          //   return (
          //     <Button
          //       ml="$2.5"
          //       onPress={() => router.push("/")}
          //     >
          //       <MaterialCommunityIcons name="arrow-left" />
          //     </Button>
          //   );
          // }
        }}
      />
    </Tabs>
  );
}
