import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { Eye, EyeOff } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, XStack, YStack } from "tamagui";
import { Text } from "tamagui";

import InputLabel from "../../components/InputLabel";
import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";

export default function Register() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<any>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [hidePass, setHidePass] = useState(true);

  //   const [request, response, promptAsync] = Google.useAuthRequest({
  //     androidClientId:
  //       "83846097786-himfboprtsatsm46nuovd4ko7rcrpclq.apps.googleusercontent.com",
  //     iosClientId:
  //       "83846097786-e5gdilddbgs6u06okoofm27np1cc7nc0.apps.googleusercontent.com"
  //   });

  // const onSubmit = () => {
  //   if (name && email && pass) {
  //     console.log(name, email, pass);
  //   } else {
  //     console.log("Fill out all fields");
  //   }
  // };

  //   useEffect(() => {
  //     handleGoogleSignin();
  //     console.log(JSON.stringify(userInfo));
  //   }, [response]);

  //   const handleGoogleSignin = async () => {
  //     const user = await AsyncStorage.getItem("@user");
  //     if (!user) {
  //       if (response?.type == "success") {
  //         console.log("success");
  //         await getUserInfo(response.authentication.accessToken);
  //       }
  //       console.log("fail");
  //     } else {
  //       setUserInfo(JSON.parse(user));
  //       console.log("there is user");
  //     }
  //   };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <MySafeAreaView>
      <MyStack justifyContent="flex-start">
        <XStack paddingLeft={"$2"}>
          <H3>Create an account</H3>
        </XStack>

        <YStack marginTop="$6">
          <InputLabel
            label="Name"
            control={control}
            max={10}
            min={3}
            returnKeyType="next"
            placeholder="Name"
          />
          {errors.Name && (
            <Text
              ml="$4"
              fontSize="$1"
              color={"red"}
            >
              Name must be more than 3 characters and less than 10.
            </Text>
          )}
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
            <Text
              ml="$4"
              fontSize="$1"
              color={"red"}
            >
              Email must be more than 3 characters, less than 20, and include an
              @.
            </Text>
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
            Sign up
          </Button>
          <Button
            backgroundColor="$green9Light"
            marginTop="$2"
            color={"white"}
            //   onPress={() => promptAsync()}
          >
            Google
          </Button>
          <Button
            theme="red"
            marginTop="$2"
            color="red"
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
