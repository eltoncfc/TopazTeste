import React from "react";
import { Container, HeaderImage } from "./styles";

export const Logo = () => {
  return (
    <Container>
      <HeaderImage
        source={require("../../assets/topazLogo.png")}
        resizeMode="contain"
      />
    </Container>
  );
};
