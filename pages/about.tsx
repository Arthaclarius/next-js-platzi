import React, { FC } from "react";
import styled from "@emotion/styled";
import { globalStyles } from "../styles/globalStyles";

const Container = styled.div`
  background: #273b47;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* p,
  span {
    text-align: center;
  } */

  p {
    font-size: 20px;
    margin-bottom: 5px;
  }

  span {
    font-size: 14px;
  }
`;

const Logo = styled.img`
  width: 50%;
`;

const About: FC = () => {
  return (
    <Container>
      {globalStyles}
      <Logo src="/platzi-logo.png" />
      <p>Created by Stuard</p>
      <span>Made with 💚</span>
    </Container>
  );
};

export default About;
