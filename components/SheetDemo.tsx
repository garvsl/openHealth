import { useState } from "react";
import { ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Sheet, SheetProps, useSheet } from "@tamagui/sheet";
import { Button, H1, H2, Input, Paragraph, XStack, YStack } from "tamagui";

export const SheetDemo = ({ children, open, setOpen }: any) => {
  const snapPoints = [85, 50, 25];
  return (
    <>
      {children}
      <Sheet
        forceRemoveScrollEnabled={open}
        modal={true}
        open={open}
        onOpenChange={setOpen}
        snapPoints={snapPoints}
        dismissOnSnapToBottom
        zIndex={100_000}
        animation="bouncy"
      >
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Sheet.Handle />

        <Sheet.Frame
          flex={1}
          justifyContent="center"
          alignItems="center"
          space="$5"
        >
          <Sheet.ScrollView>
            <YStack
              p="$5"
              gap="$8"
            >
              <Button
                size="$6"
                circular
                icon={ChevronDown}
                alignSelf="center"
                onPress={() => setOpen(false)}
              />

              <H2>Hello world</H2>

              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Paragraph
                  key={i}
                  size="$8"
                >
                  Eu officia sunt ipsum nisi dolore labore est laborum laborum
                  in esse ad pariatur. Dolor excepteur esse deserunt voluptate
                  labore ea. Exercitation ipsum deserunt occaecat cupidatat
                  consequat est adipisicing velit cupidatat ullamco veniam
                  aliquip reprehenderit officia. Officia labore culpa ullamco
                  velit. In sit occaecat velit ipsum fugiat esse aliqua dolor
                  sint.
                </Paragraph>
              ))}
            </YStack>
          </Sheet.ScrollView>
        </Sheet.Frame>
      </Sheet>
    </>
  );
};
