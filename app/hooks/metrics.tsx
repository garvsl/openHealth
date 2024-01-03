import { useWindowDimensions } from "react-native";

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export function HorizontalScale(size: number) {
  const { width } = useWindowDimensions();
  return (width / guidelineBaseWidth) * size;
}

export function VerticalScale(size: number) {
  const { height } = useWindowDimensions();
  return (height / guidelineBaseHeight) * size;
}

export function ModerateScale(size: number, factor = 0.5) {
  return size + (HorizontalScale(size) - size) * factor;
}
