import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import getPositionAndSize from "../../apis/positionAndSize";
import { keyboardColors } from "../../constants/colors";
import { keyLetters, NUM_KEY_LETTER } from "../../constants/keyLetters";
import { KeyboardSizeType, MOBILE_COMMON_WIDTH } from "../../constants/size";
import { PosAndSize } from "../../models/posAndSizeTypes";
import KeyTile from "./KeyTile";

interface KeyboardProps {
  onClick: () => void;
  onTypping: (e: any, letter: string) => void;
  size: KeyboardSizeType;
  allowTouchMargin?: boolean;
}

function Keyboard({
  onClick,
  onTypping,
  size,
  allowTouchMargin,
}: KeyboardProps) {
  const [posList, setPosList] = useState<PosAndSize[]>([]);

  const handleNewKeyTilePos = (target: PosAndSize) => {
    if (posList.find((pos) => pos.name === target.name) === undefined)
      setPosList(posList.concat(target));
  };

  const getKeyPositionList = () => {
    const fileName = "pos_and_size";
    const file = JSON.stringify(posList);
    const blob = new Blob([file], { type: "application/json" });

    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Below is just for ONCE!
  // useEffect(() => {
  //   if (posList.length === NUM_KEY_LETTER) {
  //     getKeyPositionList();
  //   }
  // });

  return (
    <Wrapper onClick={onClick}>
      <Column>
        {keyLetters.map((row) => {
          return (
            <Row>
              {row.map((letter: string) => {
                return (
                  <KeyTile
                    key={letter}
                    size={size}
                    letter={letter}
                    allowTouchMargin={allowTouchMargin}
                    onTypping={onTypping}
                    handleNewKeyTilePos={handleNewKeyTilePos}
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
