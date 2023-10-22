import { useEffect, useRef, useState } from "react";
import { Video } from "expo-av";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";
import { Button, Text } from "tamagui";

import { MySafeAreaView } from "../../components/MySafeAreaView";

export default function Tab1() {
  const cameraRef: any = useRef();
  const [cameraDir, setCameraDir] = useState(CameraType.back);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState<any>();
  const [picture, setPicture] = useState<any>();

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

    const apiUrl = "https://vision.foodvisor.io/api/1.0/en";
    const apiKey = "OBVMTO2V.Wkcr49NJHF5g63Wy3JOYzZvYdk9IK3PC";

    const analyzeImage = async () => {
      const formData = new FormData();
      const response = await fetch(photo.uri);
      const blob = await response.blob();

      formData.append("image", blob, "image.jpg");
      // const optionalParams = {
      //   scopes: ["multiple_items, nutrition:macro"] // Replace with your desired scopes
      // };

      // for (const key in optionalParams) {
      //   formData.append(key, JSON.stringify(optionalParams[key]));
      // }

      try {
        const response = await fetch(
          `https://vision.foodvisor.io/api/1.0/en/limits`,
          {
            method: "GET"
            // headers: {
            //   Authorization: `Api-Key ${apiKey}`
            // }
            // body: formData
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Analysis results:", data);
        } else {
          console.error("Error performing image analysis:", response.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    // Call the function to perform the image analysis
    analyzeImage();

    // MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
    //   setPicture(undefined);
    // });
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
      style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
      ref={cameraRef}
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
    </Camera>
  );
}
