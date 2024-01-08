import { useState } from "react";
import {
  AnimatePresence,
  Separator,
  SizableText,
  Tabs,
  TabsContentProps,
  View
} from "tamagui";

export const HorizontalTabs = ({
  firstTitle,
  secondTitle,
  firstComponent,
  secondComponent
}: any) => {
  const [currentTab, setCurrentTab] = useState("tab1");

  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      width={"110%"}
      height={"110%"}
      borderRadius="$4"
      overflow="hidden"
    >
      <Tabs.List
        disablePassBorderRadius="bottom"
        aria-label="Options"
      >
        <AnimatePresence>
          {currentTab == "tab1" && (
            <Underline
              tab={"tab1"}
              left={0}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {currentTab == "tab2" && (
            <Underline
              tab={"tab2"}
              right={0}
            />
          )}
        </AnimatePresence>
        <Tabs.Tab
          flex={1}
          value="tab1"
          unstyled
          onPress={() => setCurrentTab("tab1")}
        >
          <SizableText fontFamily="$body">{firstTitle}</SizableText>
        </Tabs.Tab>
        <Tabs.Tab
          flex={1}
          value="tab2"
          unstyled
          onPress={() => setCurrentTab("tab2")}
        >
          <SizableText fontFamily="$body">{secondTitle}</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      <Separator />
      <TabsContent value="tab1">{firstComponent}</TabsContent>
      <TabsContent value="tab2">{secondComponent}</TabsContent>
    </Tabs>
  );
};

const TabsContent = (props: TabsContentProps) => {
  return <Tabs.Content {...props}>{props.children}</Tabs.Content>;
};

const Underline = (props: any) => {
  return (
    <View
      animation="lazy"
      exitStyle={{
        opacity: 0,
        x: props.tab == "tab1" ? 25 : -25
      }}
      enterStyle={{
        opacity: 0,
        x: 0
      }}
      backgroundColor={"tomato"}
      width={"50%"}
      height={"$0.25"}
      bottom={0}
      position="absolute"
      {...props}
    />
  );
};
