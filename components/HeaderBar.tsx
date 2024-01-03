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
  XStack
} from "tamagui";

import { MySafeAreaView } from "./MySafeAreaView";

export default function HeaderBar() {
  const [open, setOpen] = useState(false);
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      marginTop={-40}
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
            animation="bouncy"
            zIndex={200000}
            modal
            dismissOnSnapToBottom
          >
            <Sheet.Frame
              padding="$4"
              gap="$4"
            >
              <Adapt.Contents />
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <Dialog.Portal>
          <Dialog.Overlay
            key="overlay"
            animation="quick"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />

          <Dialog.Content
            bordered
            elevate
            key="content"
            animateOnly={["transform", "opacity"]}
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
            gap="$4"
          >
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when youre done.
            </Dialog.Description>
            <Fieldset
              gap="$4"
              horizontal
            >
              <Label
                width={160}
                justifyContent="flex-end"
                htmlFor="name"
              >
                Name
              </Label>
              <Input
                flex={1}
                id="name"
                defaultValue="Nate Wienert"
              />
            </Fieldset>
            <Fieldset
              gap="$4"
              horizontal
            >
              <Label
                width={160}
                justifyContent="flex-end"
                htmlFor="username"
              >
                <TooltipSimple
                  label="Pick your favorite"
                  placement="bottom-start"
                >
                  <Paragraph>Food</Paragraph>
                </TooltipSimple>
              </Label>
            </Fieldset>

            <XStack
              alignSelf="flex-end"
              gap="$4"
            >
              <Dialog.Close
                displayWhenAdapted
                asChild
              >
                <Button
                  theme="alt1"
                  aria-label="Close"
                >
                  Save changes
                </Button>
              </Dialog.Close>
            </XStack>

            <Unspaced>
              <Dialog.Close asChild>
                <Button
                  position="absolute"
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
