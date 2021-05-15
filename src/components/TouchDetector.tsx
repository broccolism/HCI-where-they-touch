import React, { ReactNode } from "react";
import styled from "styled-components";
import { SizeProps } from "../models/propTypes";

interface DetectorProps {
  handleTouch: (e: any) => void;
  children: ReactNode;
}

function TouchDetector({
  width,
  height,
  handleTouch,
  children,
}: SizeProps & DetectorProps) {
  return (
    <Container width={width} height={height} onTouchEnd={handleTouch}>
      {children}
    </Container>
  );
}

const Container = styled.div<SizeProps>`
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "auto"};
  z-index: 2;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TouchDetector;
