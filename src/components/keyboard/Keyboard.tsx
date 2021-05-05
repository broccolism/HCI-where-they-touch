import React from "react";
import styled from "styled-components";
import { keyboardColors } from "../../constants/colors";
import { keyLetters } from "../../constants/keyLetters";
import KeyTile from "./KeyTile";

function Keyboard() {
  return (
    <Wrapper>
      <Column>
        {keyLetters.map((row) => {
          return (
            <Row>
              {row.map((letter: string) => {
                return <KeyTile letter={letter} padding="4px" margin="2px" />;
              })}
            </Row>
          );
        })}
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 350px;
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
