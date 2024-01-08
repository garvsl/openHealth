import React from "react";
import { useRouter } from "expo-router";
import { Card, H4, Image, ScrollView } from "tamagui";

import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";

export default function Training() {
  const router = useRouter();
  return (
    <MyStack>
      <MySafeAreaView width={"100%"}>
        <ScrollView
          width="100%"
          height={"100%"}
          marginBottom={-50}
          backgroundColor="white"
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
          borderRadius="$4"
        >
          <Card
            marginBottom={15}
            elevate
            size="$12"
            w={"100%"}
            h={300}
            // left={-8}
            bordered
            overflow="hidden"
            borderRadius={40}
            onPress={() => router.push("/responses")}
            animation="bouncy"
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
          >
            <Card.Header
              flexDirection="column"
              alignItems="center"
              // justifyContent=""
              gap={10}
              padded
            >
              <H4
                textShadowColor={"black"}
                textShadowRadius={10}
                color={"white"}
              >
                Arnold AI
              </H4>
            </Card.Header>
            <Card.Background>
              <Image
                width={"100%"}
                height={"100%"}
                borderRadius={40}
                // left={-65}
                // top={-150}
                // position="absolute"
                resizeMode="cover"
                source={require("../../assets/arnold.png")}
              ></Image>
            </Card.Background>
          </Card>
          <Card
            marginBottom={15}
            elevate
            size="$12"
            w={"100%"}
            h={300}
            // left={-8}
            bordered
            overflow="hidden"
            borderRadius={40}
            animation="bouncy"
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
          >
            <Card.Header
              flexDirection="column"
              alignItems="center"
              // justifyContent=""
              gap={10}
              padded
            >
              <H4
                textShadowColor={"black"}
                textShadowRadius={10}
                color={"white"}
              >
                Goggins AI
              </H4>
            </Card.Header>
            <Card.Background>
              <Image
                width={"100%"}
                height={"100%"}
                borderRadius={40}
                // left={-65}
                // top={-150}
                // position="absolute"
                resizeMode="cover"
                source={require("../../assets/goggins.png")}
              ></Image>
            </Card.Background>
          </Card>
          <Card
            marginBottom={15}
            elevate
            size="$12"
            w={"100%"}
            h={300}
            // left={-8}
            bordered
            overflow="hidden"
            borderRadius={40}
            animation="bouncy"
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
          >
            <Card.Header
              flexDirection="column"
              alignItems="center"
              // justifyContent=""
              gap={10}
              padded
            >
              <H4
                textShadowColor={"black"}
                textShadowRadius={10}
                color={"white"}
              >
                Dietician AI
              </H4>
            </Card.Header>
            <Card.Background>
              <Image
                width={"100%"}
                height={"100%"}
                borderRadius={40}
                // left={-65}
                // top={-150}
                // position="absolute"
                resizeMode="cover"
                source={require("../../assets/dietician.png")}
              ></Image>
            </Card.Background>
          </Card>
          <Card
            marginBottom={15}
            elevate
            size="$12"
            w={"100%"}
            h={300}
            // left={-8}
            bordered
            overflow="hidden"
            borderRadius={40}
            animation="bouncy"
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
          >
            <Card.Header
              flexDirection="column"
              alignItems="center"
              // justifyContent=""
              gap={10}
              padded
            >
              <H4
                textShadowColor={"black"}
                textShadowRadius={10}
                color={"white"}
              >
                Mentzer AI
              </H4>
            </Card.Header>
            <Card.Background>
              <Image
                width={"100%"}
                height={"100%"}
                borderRadius={40}
                // left={-65}
                // top={-150}
                // position="absolute"
                resizeMode="cover"
                source={require("../../assets/mentzer.png")}
              ></Image>
            </Card.Background>
          </Card>
        </ScrollView>
      </MySafeAreaView>
    </MyStack>
  );
}
