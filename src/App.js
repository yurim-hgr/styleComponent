import React from "react";
import styled, { css } from "styled-components";
import Button from "./components/Button";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
function App() {
  return (
    <Father>
      <BoxOne />
      <BoxTwo />
    </Father>
  );
}

export default App;
