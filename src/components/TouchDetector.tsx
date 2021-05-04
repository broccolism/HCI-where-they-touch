import React from "react";
import styled from "styled-components";
import { SizeProps } from "../models/propTypes";

function TouchDetector({ width, height }: SizeProps) {
  const handleTouch = (e: any) => {
    console.log("@@@", e.touches[0].pageY);
    const pageX = e.touches[0].pageX;
    const pageY = e.touches[0].pageY;
    window.alert(`You just touched ${pageX}, ${pageY}`);
  };
  return (
    <Container
      width={width}
      height={height}
      onTouchStart={handleTouch}
    ></Container>
  );
}

const Container = styled.div<SizeProps>`
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  background-color: #abcdef;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;

export default TouchDetector;
