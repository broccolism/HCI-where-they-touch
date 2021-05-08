import styled from "styled-components";
import { keyboardColors } from "../../constants/colors";
import { AxisProps, SizeProps } from "../../models/propTypes";

export const StyledColumn = styled.div<AxisProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.crossAxisAlignment ?? "center"};
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

export const IconWrapper = styled.div`
  font-size: 48px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;
export const SubTitle = styled.div`
  font-size: 16px;
  color: ${keyboardColors.gray};
  text-align: center;
  margin-bottom: 4px;
`;

export const Accent = styled.span`
  color: ${keyboardColors.red};
  font-weight: bold;
`;

export const Content = styled.div<SizeProps>`
  width: ${(props) => props.width ?? "auto"};
  line-height: 1.4;
`;
