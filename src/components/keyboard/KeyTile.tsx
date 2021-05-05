import React from "react";
import styled from "styled-components";
import { keyboardColors } from "../../constants/colors";
import { SizeProps } from "../../models/propTypes";

interface KeyTileProps {
  letter: string;
}

function KeyTile(props: KeyTileProps & SizeProps) {
  const handleTouch = (e: any) => {};
  return (
    <Square
      width={props.width}
      height={props.height}
      padding={props.padding}
      margin={props.margin}
      onTouchStart={handleTouch}
    >
      {props.letter}
    </Square>
  );
}

const Square = styled.div<SizeProps>`
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  padding: ${(props) => props.padding ?? "0px"};
  margin: ${(props) => props.margin ?? "0px"};

  background-color: ${keyboardColors.white};
  border-radius: 4px;
`;
export default KeyTile;
