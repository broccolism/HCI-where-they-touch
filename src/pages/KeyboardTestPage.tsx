import { useState } from "react";
import styled from "styled-components";
import { addTouchCookie } from "../apis/cookie";
import KeyboardInput from "../components/KeyboardInput";
import { StyledColumn } from "../components/layout/StyledComponents";
import { CustomPath } from "../constants/path";
import {
  lastWordStep,
  testWords,
  TestWordStep,
} from "../constants/testContents";

function KeyboardTestPage() {
  const [step, setStep] = useState<TestWordStep>(0);
  const [input, setInput] = useState<string>("");

  const handleTypping = (e: any, letter: string) => {
    addTouchCookie(e, letter);

    const newInput = input + letter;
    const testWordLength = testWords[step].length;
    if (newInput.length === testWordLength) {
      if (step === lastWordStep) {
        window.location.assign(CustomPath.QUESTION);
      } else {
        const newStep = (step + 1) as TestWordStep;
        window.location.assign(CustomPath.KEYBOARD + testWords[newStep].hash);
        setStep(newStep);
        setInput("");
      }
    } else {
      setInput(input + letter);
    }
  };

  return (
    <StyledColumn>
      아래에 보이는 단어를 입력하세요.
      <TestWord>{testWords[step].word}</TestWord>
      <KeyboardInput onTypping={handleTypping} value={input} />
    </StyledColumn>
  );
}

const TestWord = styled.div`
  padding: 60px 0px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 4px;
`;

export default KeyboardTestPage;
