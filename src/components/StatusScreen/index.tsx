import React from "react";
import { SvgProps } from "react-native-svg";
import { Container, ImageWrapper, Message } from "./styles";

interface StatusScreenProps {
  message: string;
  SvgImage: React.FC<SvgProps>;
}

export const StatusScreen: React.FC<StatusScreenProps> = ({
  message,
  SvgImage,
}) => {
  return (
    <Container>
      <ImageWrapper>
        <SvgImage width={120} height={120} />
      </ImageWrapper>
      <Message>{message}</Message>
    </Container>
  );
};
