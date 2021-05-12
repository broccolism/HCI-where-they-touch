import React from "react";
import styled from "styled-components";
import { keyboardColors } from "../../constants/colors";
import { SizeProps } from "../../models/propTypes";

interface KeyTileProps {
  letter: string;
  total: string;
  onTypping: (e: any, letter: string) => void;
}

function KeyTile(props: KeyTileProps & SizeProps) {
  return (
    <Background
      onTouchEnd={(e: any) => props.onTypping(e, props.letter)}
      width={props.width}
      height={props.height}
      total={props.total}
    >
      <Foreground
        width={props.width}
        height={props.height}
        padding={props.padding}
        margin={props.margin}
      >
        {props.letter}
      </Foreground>
    </Background>
  );
}

const Foreground = styled.div<SizeProps>`
  position: absolute;
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  padding: ${(props) => props.padding ?? "0px"};
  margin: ${(props) => props.margin ?? "0px"};

  background-color: ${keyboardColors.white};
  border-radius: 4px;
  text-align: center;
  top: 0;
  left: 0;
  display: flex;
  flex-direciton: row;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div<SizeProps & { total: string }>`
  position: relative;
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  padding: ${(props) => props.total};
  margin: 0px;
`;
export default KeyTile;
