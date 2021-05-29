import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import getPositionAndSize from "../../apis/positionAndSize";
import { keyboardColors } from "../../constants/colors";
import {
  LARGE_KEYTILE,
  KeyboardSizeType,
  SMALL_KEYTILE,
} from "../../constants/size";
import { PosAndSize } from "../../models/posAndSizeTypes";
import { SizeProps } from "../../models/propTypes";

interface KeyTileProps {
  letter: string;
  allowTouchMargin?: boolean;
  size: KeyboardSizeType;
  onTypping: (e: any, letter: string) => void;
  handleNewKeyTilePos: (target: PosAndSize) => void;
}

function KeyTile({
  letter,
  allowTouchMargin,
  size,
  onTypping,
  handleNewKeyTilePos,
}: KeyTileProps) {
  const keyTileRef = useRef<HTMLDivElement>(null);

  const handleTouchBackground = (e: any) => {
    if (allowTouchMargin) {
      onTypping(e, letter);
    }
  };

  const handleTouchForefround = (e: any) => {
    if (!allowTouchMargin) {
      onTypping(e, letter);
    }
  };

  useEffect(() => {
    if (keyTileRef !== undefined && keyTileRef !== null) {
      const posAndSize = getPositionAndSize(keyTileRef, letter);
      handleNewKeyTilePos(posAndSize);
    }
  });

  return (
    <Background
      width={size == "large" ? LARGE_KEYTILE.width : SMALL_KEYTILE.width}
      height={size == "large" ? LARGE_KEYTILE.height : SMALL_KEYTILE.height}
      margin={size == "large" ? LARGE_KEYTILE.margin : SMALL_KEYTILE.margin}
      onTouchEnd={handleTouchBackground}
    >
      <Foreground
        ref={keyTileRef}
        onTouchEnd={handleTouchForefround}
        width={size == "large" ? LARGE_KEYTILE.width : SMALL_KEYTILE.width}
        height={size == "large" ? LARGE_KEYTILE.height : SMALL_KEYTILE.height}
        padding={
          size == "large" ? LARGE_KEYTILE.padding : SMALL_KEYTILE.padding
        }
      >
        {letter}
      </Foreground>
    </Background>
  );
}

const Foreground = styled.div<SizeProps>`
  position: absolute;
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  padding: ${(props) => props.padding ?? "0px"};
  margin: 0px;

  background-color: ${keyboardColors.white};
  border-radius: 4px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direciton: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Background = styled.div<SizeProps & { margin: string }>`
  position: relative;
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  padding: ${(props) => props.margin};
  background-color: ${keyboardColors.grayLight};
  margin: 0px;
  cursor: pointer;
`;
export default KeyTile;
