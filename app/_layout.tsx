import { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";

import HeaderBar from "../components/home/HeaderBar";
import { MySafeAreaView } from "../components/MySafeAreaView";
import config from "../tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={"light"}>
          <ThemeProvider value={DefaultTheme}>
            {/* <MySafeAreaView> */}
            <Stack
              screenOptions={{
                headerShown: false
              }}
            />
            {/* </MySafeAreaView> */}
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
