import React, { useState } from "react";
import styled from "styled-components";
import { addTouchCookie } from "../apis/cookie";
import { keyboardColors } from "../constants/colors";
import Keyboard from "./keyboard/Keyboard";
import { StyeldEmptyDiv, StyledColumn } from "./layout/StyledComponents";

interface Props {
  value?: string;
  onTypping?: (e: any, letter: string) => void;
}

function KeyboardInput({ value, onTypping }: Props) {
  const [input, setInput] = useState<string>("");
  const handleInput = (e: any, letter: string) => {
    setInput(input + letter);
  };

  return (
    <StyledColumn>
      <FakeInputField>{value ?? input}</FakeInputField>
      <StyeldEmptyDiv height="12px" />
      <Keyboard onTypping={onTypping ?? handleInput} />
    </StyledColumn>
  );
}

const FakeInputField = styled.div`
  width: 90vw;
  height: 24px;
  text-align: center;
  border: 1px solid ${keyboardColors.gray};
  border-raidus: 4px;
  overflow: scroll;
  white-space: nowrap;
`;

export default KeyboardInput;
