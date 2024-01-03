import { ArrowRight } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, Image, Square, Text } from "tamagui";

import { MyStack } from "../components/MyStack";

import { ModerateScale, VerticalScale } from "./hooks/metrics";

export default function Home() {
  const router = useRouter();

  return (
    <MyStack
      justifyContent="center"
      alignItems="center"
      backgroundColor={"#FFFFFF"}
      padding={0}
    >
      <Image
        // marginTop={"15%"}
        height={"100%"}
        // alignSelf="center"
        // scale={0.9}
        // position="absolute"
        width={"100%"}
        resizeMode="contain"
        // height={"100%"}
        source={{
          uri: require("../assets/OPEN_HEALTH.png"),
          width: 400,
          height: 600
        }}
      />
      <Square
        // margin={40}
        paddingLeft={"$4"}
        paddingRight={"$4"}
        width={"100%"}
        position="absolute"
        bottom={"2.5%"}
        justifyContent="flex-start"
        alignItems="flex-start"
        paddingTop={"$5"}
        paddingBottom={"$5"}
      >
        <Text
          fontSize={ModerateScale(22)}
          fontWeight="bold"
          color={"black"}
        >
          Get started with OpenHealth
        </Text>
        <Button
          width={"100%"}
          height={VerticalScale(55)}
          marginTop={12}
          borderColor={"black"}
          backgroundColor={"white"}
          fontWeight="bold"
          theme="red"
          iconAfter={<ArrowRight size={ModerateScale(14)} />}
          onPress={() => router.replace("/tabs")}
        >
          <Text
            fontWeight={"bold"}
            fontSize={ModerateScale(14)}
          >
            Continue
          </Text>
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
