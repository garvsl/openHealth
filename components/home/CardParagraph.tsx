import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Paragraph } from "tamagui";

export const CardParagraph = ({ text, iconText, iconColor }: any) => {
    return (
      <Paragraph
        theme="alt2"
        color={"grey"}
        marginTop={-5}
      >
        <MaterialCommunityIcons
          name={iconText}
          color={iconColor}
          size={15}
        />{" "}
        {text}
      </Paragraph>
    );
}