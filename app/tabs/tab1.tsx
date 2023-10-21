import React, { useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import { Camera } from "expo-camera";
import { Circle, H5, Tabs, Text } from "tamagui";

import { MyStack } from "../../components/MyStack";

export default function Tab1() {
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");
    })();
  }, []);

  const takeVideo = async () => {
    if (camera) {
      const data = await camera.recordAsync({
        VideoQuality: ["2160p"],
        maxDuration: 10,
        maxFileSize: 200,
        mute: false,
        videoBitrate: 5000000
      });
      setRecord(data.uri);
      console.log(data.uri);
    }
  };
  const stopVideo = async () => {
    camera.stopRecording();
  };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <Text>Waiting for permissions</Text>;
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <MyStack>
      <Tabs
        defaultValue="tab1"
        orientation="horizontal"
        alignItems="center"
        justifyContent="flex-end"
        flexDirection="column"
        width="110%"
        left={"-5%"}
        height={"110%"}
        marginTop={"$-5"}
      >
        <Video
          ref={video}
          source={{
            uri: record
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <Camera
          ref={(ref) => setCamera(ref)}
          type={type}
          ratio={"4:3"}
        />
        <Button
          title="Flip Video"
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        ></Button>
        <Button
          title="Take video"
          onPress={() => takeVideo()}
        />
        <Button
          title="Stop Video"
          onPress={() => stopVideo()}
        />
      </Tabs>
    </MyStack>
  );
}
