import { useEffect, useRef, useState } from "react";
import { X } from "@tamagui/lucide-icons";
import { Video } from "expo-av";
import { Camera, CameraType } from "expo-camera";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Image,
  Label,
  Paragraph,
  Sheet,
  Text,
  TooltipSimple,
  Unspaced,
  View,
  XStack
} from "tamagui";

import { MySafeAreaView } from "../../components/MySafeAreaView";

export default function Vision() {
  const cameraRef: any = useRef();
  const [cameraDir, setCameraDir] = useState(CameraType.back);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState<any>();
  const [picture, setPicture] = useState<any>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraPermission: any =
        await Camera.requestCameraPermissionsAsync();
      const microphonePermission: any =
        await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission: any =
        await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status);
      setHasMicrophonePermission(microphonePermission.status);
      setHasMediaLibraryPermission(mediaLibraryPermission.status);
    })();
  }, []);

  if (
    hasCameraPermission === undefined ||
    hasMicrophonePermission === undefined
  ) {
    return <Text>Requestion permissions...</Text>;
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted.</Text>;
  }

  const recordVideo = () => {
    setIsRecording(true);
    const options = {
      quality: "1080p",
      maxDuration: 60,
      mute: false
    };

    cameraRef.current.recordAsync(options).then((recordedVideo) => {
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  };

  const takePicture = async () => {
    const photo = await cameraRef.current.takePictureAsync();
    setPicture(photo.uri);

    console.log(photo);

    // const query = async (filename) => {
    //   try {
    //     const destinationUri = `${FileSystem.documentDirectory}${filename}`;
    //     const data = await FileSystem.readAsStringAsync(destinationUri, {
    //       encoding: FileSystem.EncodingType.Base64
    //     });

    //     const response = await fetch(
    //       "https://api-inference.huggingface.co/models/nateraw/food",
    //       {
    //         method: "POST",
    //         headers: {
    //           Authorization: "Bearer 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",
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ data: data })
    //       }
    //     );

    //     if (!response.ok) {
    //       throw new Error(`Request failed with status: ${response.status}`);
    //     }

    //     const result = await response.json();
    //     return result;
    //   } catch (error) {
    //     console.error("Error:", error);
    //     throw error;
    //   }
    // // };

    // const filename = "myImage.jpg"; // Adjust the filename as needed

    // try {
    //   const destinationUri = `${FileSystem.documentDirectory}${filename}`;
    //   await FileSystem.copyAsync({ from: photo.uri, to: destinationUri });
    //   console.log("File copied successfully");

    //   // Call the query function to analyze the image
    //   const response = await query(filename);
    //   console.log(JSON.stringify(response));
    // } catch (error) {
    //   console.error("Error copying file:", error);
    // }

    MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      setPicture(undefined);
    });
  };

  const stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };

  if (video) {
    const shareVideo = () => {
      shareAsync(video.uri).then(() => {
        setVideo(undefined);
      });
    };

    MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
      setVideo(undefined);
    });

    return (
      <MySafeAreaView>
        <Video
          source={{ uri: video.uri }}
          useNativeControls
          // resizeMode="contain"
          isLooping
        />
        <Button onPress={shareVideo}>Share</Button>
        <Button onPress={() => setVideo(undefined)}>Discard</Button>
      </MySafeAreaView>
    );
  }

  return (
    <Camera
      type={cameraDir}
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
      }}
      ref={cameraRef}
    >
      {picture && (
        <Image
          height={"100%"}
          width={"100%"}
          zIndex={99}
          source={{ uri: picture.uri }}
        />
      )}
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={4}
        marginBottom={32}
      >
        <Button onPress={isRecording ? stopRecording : recordVideo}>
          {isRecording ? "Stop Recording" : "Record Video"}
        </Button>
        <Button onPress={takePicture}>{"Take Picture"}</Button>
        <Button
          onPress={() =>
            cameraDir == CameraType.back
              ? setCameraDir(CameraType.front)
              : setCameraDir(CameraType.back)
          }
        >
          {"Flip Camera"}
        </Button>
      </View>
    </Camera>
  );
}
