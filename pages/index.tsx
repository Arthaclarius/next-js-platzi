import React, { FC } from "react";
import styled from "@emotion/styled";
import { globalStyles } from "../styles/globalStyles";

const Title = styled.h1`
  color: red;
`;

const Logo = styled.img`
  max-width: 50%;
  display: block;
  margin: auto;
`;

const Home: FC = () => (
  <div>
    {globalStyles}
    <Title>Hello world!</Title>
    <Logo src="/platzi-logo.png" alt="logo" />
  </div>
);

export default Home;
