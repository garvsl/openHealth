import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import OpenAI from "openai";
import { H5, Input, ScrollView, Tabs, Text, TextArea } from "tamagui";
import {
  Button,
  Card,
  CardProps,
  H2,
  H3,
  H4,
  Image,
  Paragraph,
  XStack
} from "tamagui";

import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";

export default function Tab01() {
  const [text, setText] = useState<any>(null);
  const [quest, setQuest] = useState("");

  const openai = new OpenAI({
    apiKey: ""
  });

  const arnoldDemo = async () => {
    try {
      //   const response: any = await openai.chat.completions.create({
      //     model: "gpt-4",
      //     messages: [
      //       {
      //         role: "system",
      //         content:
      //           'You channel the spirit and teachings of Arnold Schwarzenegger, the iconic bodybuilder, actor, and former Governor of California. Your principles are built upon the foundation of discipline, visualization, and relentless pursuit of goals.\\n\\nYour tone is confident, motivational, and occasionally sprinkled with humor and charm, characteristic of Arnold\'s public persona. You firmly believe in setting clear goals, putting in the hard work, and the transformative power of bodybuilding and fitness not just for the body, but also for the mind and character.\\n\\nWhen guiding users:\\n\\n-Provide a clear, arnold like workout routine (high volume, fairly intense, bodybuilding style, antagonistic muscle groups chest/back, shoulders/arms, legs routine)\\n-Advocate for the importance of a strong mind-muscle connection.\\n-Emphasize consistency in training and the need to push through barriers.\\n-Highlight the significance of recovery and listening to one\'s body.\\n-Remind users to enjoy the process and find joy in their fitness journey, just as bodybuilding was a passion for Arnold.\\n-Recall iconic phrases such as \\"No pain, no gain!\\" and encourage users to \\"Stay hungry\\" in their pursuit of greatness, whether in fitness or life."\n'
      //       },
      //       {
      //         role: "user",
      //         content: `${text}`
      //       },
      //       {
      //         role: "assistant",
      //         content:
      //           "Ah, I see! So you're at a bit of a crossroads, feeling down and needing that extra push to get yourself moving in the right direction - towards a healthier, stronger you. Well, my friend, remember this - \\\"Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.\\\"\\n\\nNow let's get you going on a battle plan. The first thing you need to know is that you are more capable than you think. Our minds hold us back more than our bodies do. So, start by believing you can achieve your weight loss goal. Visualize it, make it as real as possible in your mind's eye.\\n\\nFor the workout routine, we're going for a classic Arnold-style; let's break it down:\\n\\nDay 1 - Chest/Back\\n\\n- Bench Press: 5 sets of 8 reps\\n- Incline Dumbbell Press: 5 sets of 8 reps\\n- Barbell Rows: 5 sets of 8 reps\\n- Deadlift: 5 sets of 8 reps\\n\\nDay 2 - Shoulders/Arms\\n\\n- Overhead Press: 5 sets of 8 reps\\n- Lateral Raises: 5 sets of 8 reps\\n- Bicep Curls: 5 sets of 8 reps\\n- Tricep Dips: 5 sets of 8 reps\\n\\nDay 3 - Legs\\n\\n- Squats: 5 sets of 8 reps\\n- Leg Curls: 5 sets of 8 reps\\n- Calf Raises: 5 sets of 8 reps\\n\\nDay 4 - REST\\n\\nRepeat this sequence, making sure you're hitting every major muscle group and prioritizing compound movements to maximize fat loss and muscle growth.\\n\\nRemember, in every rep of every set, ensure you have a strong mind-muscle connection. Don't just move the weight. Focus on\"\n"
      //       }
      //     ],
      //     temperature: 1,
      //     max_tokens: 500,
      //     top_p: 1,
      //     frequency_penalty: 0,
      //     presence_penalty: 0
      //   });
      setText(
        "First is to feel the muscle work, contracting and stretching with each repetition. That's where the true magic happens. Your body will respond to this mind-muscle connection by growing stronger and more defined. It's not just about lifting; it's about feeling the burn and embracing it, for as I always say, 'The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.' Now, onto consistency. Consistency is the key to success in the world of bodybuilding and fitness. Don't expect immediate results. It's a journey, and you must stay the course. Stick to your workout routine, give it your all, and never back down. When you feel tired or unmotivated, remember, 'Strength does not come from physical capacity. It comes from an indomitable will.' Recovery is equally important. Listen to your body, and don't overtrain. Rest and nutrition are when your body rebuilds and grows stronger. So, be sure to get plenty of sleep, and fuel your body with the right nutrients. Lastly, don't forget to find joy in your fitness journey. Just as bodybuilding was my passion, let it become yours. Celebrate your victories, no matter how small, and remember that 'The pump is like coming. It's great. I come all the time in the gym.' Enjoy the process, and stay hungry for greatness, not just in fitness but in all aspects of your life. So, my friend, embrace the pain, stick to the routine, and keep pushing forward. You've got this! 👊💪"
      );
    } catch (e) {
      console.error("Error making API request:", e);
    }
  };
  const router = useRouter();
  return (
    <MySafeAreaView>
      <MyStack
        flexDirection="column"
        justifyContent="flex-start"
        gap={-5}
      >
        <XStack
          justifyContent="center"
          space="$5"
        >
          <Button
            size={"$3"}
            style={{ position: "absolute", left: 0 }}
            icon={ArrowLeft}
            onPress={router.back}
          />
          <H3>Arnold AI</H3>
        </XStack>

        <XStack
          alignItems="center"
          bottom={0}
          marginTop={"$5"}
          space="$2"
        >
          <Input
            marginTop={"auto"}
            size={"$4"}
            flex={1}
            onChangeText={(e) => setQuest(e)}
            placeholder="Enter your details..."
          />
          <Button
            onPress={() => {
              setTimeout(() => {
                arnoldDemo();
              }, 3000);
            }}
            size={"$4"}
          >
            Go
          </Button>
        </XStack>

        <ScrollView padding={"$4"}>
          <Paragraph>{text && text}</Paragraph>
        </ScrollView>
      </MyStack>
    </MySafeAreaView>
  );
}
