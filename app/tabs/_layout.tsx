import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Button, Square } from "tamagui";

export default function Layout() {
  const router = useRouter();

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="home"
                {...props}
                size={40}
                marginBottom={-40}
              />
            );
          },
          headerLeft() {
            return (
              <Square
                backgroundColor={"white"}
                width={"1000%"}
                height={"100%"}
              ></Square>
            );
          }
        }}
      />
      <Tabs.Screen
        name="calorie"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="food-apple"
                {...props}
                size={40}
                marginBottom={-40}
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
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="camera"
                {...props}
                size={55}
                marginBottom={-40}
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
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="dumbbell"
                {...props}
                size={40}
                marginBottom={-40}
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
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="face-man-outline"
                {...props}
                size={40}
                marginBottom={-40}
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
