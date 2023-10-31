import { useState } from "react";
import { useRouter } from "expo-router";
import { Button, Image, Square, Text } from "tamagui";

import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  return (
    <MyStack
      justifyContent="center"
      alignItems="center"
      backgroundColor={"#FFFFFF"}
    >
      <Image
        top={-10}
        // margin={"$15"}
        height={"100%"}
        width={"110%"}
        contain="center"
        scale={0.9}
        position="absolute"
        source={require("../assets/OPEN_HEALTH.png")}
      />
      <Square
        size={400}
        bottom={-450}
        // backgroundColor={"#FFFCED"}
        justifyContent="flex-start"
        alignItems="flex-start"
        padding={"$7"}
        paddingTop={"$5"}
        paddingBottom={"$5"}
      >
        <Text
          fontSize={20}
          fontWeight="bold"
          color={"black"}
        >
          Get started with OpenHealth
        </Text>
        <Button
          width={"100%"}
          marginTop={12}
          borderColor={"black"}
          backgroundColor={"white"}
          fontWeight="bold"
          theme="red"
          onPress={() => router.push("/tabs")}
        >
          {"Continue ->"}
        </Button>
      </Square>

      {/* <YStack
        space="$4"
        maxWidth={600}
      >
        <H1 textAlign="center">Welcome to Tamagui.</H1>
        <Paragraph textAlign="center">
          Here&apos;s a basic starter to show navigating from one screen to
          another.
        </Paragraph>
      </YStack>

      <YStack space="$2.5">
        <Button onPress={() => router.push("/users/testuser")}>
          Go to user page
        </Button>
        <Button onPress={() => router.push("/tabs")}>Go to tabs page</Button>
      </YStack>

      <YStack space="$5">
        <YGroup
          bordered
          separator={<Separator />}
          theme="green"
        >
          <YGroup.Item>
            <Link
              asChild
              href="https://twitter.com/natebirdman"
              target="_blank"
            >
              <ListItem
                hoverTheme
                title="Nate"
                pressTheme
                icon={Twitter}
              />
            </Link>
          </YGroup.Item>
          <YGroup.Item>
            <Link
              asChild
              href="https://github.com/tamagui/tamagui"
              target="_blank"
            >
              <ListItem
                hoverTheme
                pressTheme
                title="Tamagui"
                icon={Github}
              />
            </Link>
          </YGroup.Item>
          <YGroup.Item>
            <Link
              asChild
              href="https://github.com/ivopr/tamagui-expo"
              target="_blank"
            >
              <ListItem
                hoverTheme
                pressTheme
                title="This Template"
                icon={Github}
              />
            </Link>
          </YGroup.Item>
        </YGroup>
      </YStack> */}
    </MyStack>
  );
}
