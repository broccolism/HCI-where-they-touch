import styled from "styled-components";
import { AxisProps, SizeProps } from "../../models/propTypes";

export const StyledColumn = styled.div<AxisProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.crossAxisAlignment};
  justify-content: ${(props) => props.mainAxisAlignment};
`;

export const StyledRow = styled.div<AxisProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.crossAxisAlignment};
  justify-content: ${(props) => props.mainAxisAlignment};
`;

export const StyeldEmptyDiv = styled.div<SizeProps>`
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  alpha: 0;
`;
