import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar, Button, XStack } from "tamagui";

import { MySafeAreaView } from "./MySafeAreaView";

export default function HeaderBar() {
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
    >
      <Button unstyled>
        <MaterialCommunityIcons
          name="bell-badge-outline"
          size={30}
        />
      </Button>
      <Button unstyled>
        <Avatar
          circular
          size="$5"
          borderColor={"black"}
          borderWidth={2}
        >
          <Avatar.Image
            accessibilityLabel="Nate Wienert"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback
            delayMs={600}
            backgroundColor="$blue10"
          />
        </Avatar>
      </Button>
    </XStack>
  );
}
