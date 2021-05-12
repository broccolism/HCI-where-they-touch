import React from "react";
import styled from "styled-components";
import { keyboardColors } from "../../constants/colors";
import { keyLetters } from "../../constants/keyLetters";
import { KeyboardSizeType, MOBILE_COMMON_WIDTH } from "../../constants/size";
import KeyTile from "./KeyTile";

interface KeyboardProps {
  onTypping: (e: any, letter: string) => void;
  size: KeyboardSizeType;
  allowTouchMargin?: boolean;
}

function Keyboard({ onTypping, size, allowTouchMargin }: KeyboardProps) {
  return (
    <Wrapper>
      <Column>
        {keyLetters.map((row) => {
          return (
            <Row>
              {row.map((letter: string) => {
                return (
                  <KeyTile
                    key={letter}
                    onTypping={onTypping}
                    letter={letter}
                    size={size}
                    allowTouchMargin={allowTouchMargin}
                  />
                );
              })}
            </Row>
          );
        })}
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${MOBILE_COMMON_WIDTH};
  background-color: ${keyboardColors.grayLight};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

const Row = styled.div`
  display: flex;
  flex-direciton: row;
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

export default Keyboard;
