import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { X } from "@tamagui/lucide-icons";
import {
  Adapt,
  Avatar,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Paragraph,
  Sheet,
  TooltipSimple,
  Unspaced,
  XStack,
  YStack
} from "tamagui";

import { MySafeAreaView } from "../MySafeAreaView";
import SelectDemo from "../SelectDemo";

export default function HeaderBar() {
  const [open, setOpen] = useState(false);
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      marginTop={-10}
    >
      <Button unstyled>
        <MaterialCommunityIcons
          name="bell-badge-outline"
          size={30}
        />
      </Button>

      <Dialog
        modal
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <Dialog.Trigger asChild>
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
        </Dialog.Trigger>

        <Adapt
          when="sm"
          platform="touch"
        >
          <Sheet
            zIndex={200000}
            modal
            dismissOnSnapToBottom
          >
            <Sheet.Frame
              padding="$4"
              space
            >
              <Adapt.Contents />
            </Sheet.Frame>
            <Sheet.Overlay />
          </Sheet>
        </Adapt>

        <Dialog.Portal>
          <Dialog.Overlay
            key="overlay"
            animation="quick"
            o={0.5}
            enterStyle={{ o: 0 }}
            exitStyle={{ o: 0 }}
          />

          <Dialog.Content
            bordered
            elevate
            key="content"
            animation={[
              "quick",
              {
                opacity: {
                  overshootClamping: true
                }
              }
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            space
          >
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </Dialog.Description>
            <Fieldset>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                defaultValue="Nate Wienert"
              />
            </Fieldset>

            <SelectDemo />

            <YStack
              alignItems="flex-end"
              marginTop="$2"
            >
              <Dialog.Close
                displayWhenAdapted
                asChild
              >
                <Button
                  theme="green_Button"
                  aria-label="Close"
                >
                  Save changes
                </Button>
              </Dialog.Close>
            </YStack>

            <Unspaced>
              <Dialog.Close asChild>
                <Button
                  pos="absolute"
                  top="$3"
                  right="$3"
                  size="$2"
                  circular
                  icon={X}
                />
              </Dialog.Close>
            </Unspaced>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </XStack>
  );
}
