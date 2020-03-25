import React from "react";
import { Global, css } from "@emotion/core";

export const globalStyles = (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css?family=Lato&display=swap");

      html {
        min-height: 100vh;
        font-family: "Lato";
      }

      body,
      #__next {
        margin: 0;
        min-height: 100vh;
      }

      #__next {
        display: flex;
      }
    `}
  ></Global>
);
