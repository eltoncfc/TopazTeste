import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";

type CustomButtonProps = TouchableOpacityProps & {
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  textColor?: string;
};

export const CustomButton = ({
  title,
  backgroundColor = "#6200ee",
  borderColor = "transparent",
  borderRadius = 8,
  textColor = "#fff",
  ...rest
}: CustomButtonProps) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      activeOpacity={0.8}
      {...rest}
    >
      <ButtonText textColor={textColor}>{title}</ButtonText>
    </ButtonContainer>
  );
};
