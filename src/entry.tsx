import React, { useState } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import { Global, css } from "@emotion/core";
import { StoreProvider } from "./store/store";

export default function App(): JSX.Element {
  return (
    <StoreProvider>
      <Global styles={globalStyles} />
      <Layout />
    </StoreProvider>
  );
}

//styles
import styleUtils from "utils/styles";
const globalStyles = css`
  body {
    display: flex;
    font-size: 15,
    font-color: white;
    height: 100vh;
    justify-content: center;
  }
`;

//render
const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);
