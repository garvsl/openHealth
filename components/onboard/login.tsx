import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { Eye, EyeOff } from "@tamagui/lucide-icons";
import { Toast, ToastViewport } from "@tamagui/toast";
import { useRouter } from "expo-router";
import { Button, H3, Paragraph, Separator, XStack, YStack } from "tamagui";
import { Text } from "tamagui";

import InputLabel from "../../components/InputLabel";
import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";

export default function Login() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<any>();

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [hidePass, setHidePass] = useState(true);

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <MySafeAreaView>
      <MyStack justifyContent="flex-start">
        <XStack paddingLeft={"$2"}>
          <H3 fontWeight={"800"}>Login to your account</H3>
        </XStack>

        <YStack marginTop="$6">
          <InputLabel
            label="Email"
            max={20}
            min={3}
            control={control}
            inputMode="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            returnKeyType="next"
            placeholder="Email"
          />
          {errors.Email && (
            <Toast
              animation="bouncy"
              scale={1}
              opacity={1}
              y={0}
              duration={100}
              enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
              exitStyle={{ opacity: 0, scale: 1, y: -20 }}
            >
              <YStack>
                <Toast.Title>Email Error</Toast.Title>
                <Toast.Description>
                  Email must be more than 3 characters, less than 20, and
                  include an @
                </Toast.Description>
              </YStack>
              {/* <Toast.Action /> */}
              <Toast.Close />
            </Toast>
          )}

          <InputLabel
            label="Password"
            max={20}
            min={8}
            control={control}
            textContentType="newPassword"
            secureTextEntry={hidePass ? true : false}
            placeholder="Password"
          />
          {errors.Name && (
            <Text
              ml="$4"
              fontSize="$1"
              color={"red"}
            >
              Password must be more than 8 characters and less than 20.
            </Text>
          )}
          <Button
            theme="blue_active"
            marginTop="$5"
            color={"white"}
            onPress={handleSubmit(onSubmit)}
          >
            Sign In
          </Button>

          <Button
            backgroundColor="$green9Light"
            marginTop="$2.5"
            color={"white"}
            //   onPress={() => promptAsync()}
          >
            Google
          </Button>
          <Button
            theme="red"
            marginTop="$3"
            color={"red"}
            onPress={async () => await AsyncStorage.removeItem("@user")}
          >
            Reset
          </Button>
          {userInfo && <Text>{JSON.stringify(userInfo.email)}</Text>}
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
