import React from "react";
import {
  IconWrapper,
  StyeldEmptyDiv,
  StyledColumn,
  Title,
} from "../components/layout/StyledComponents";

function QuestionPage() {
  return (
    <StyledColumn>
      <IconWrapper>🧐</IconWrapper>
      <StyeldEmptyDiv height="24px" />
      <Title>거의 다 왔습니다!</Title>
    </StyledColumn>
  );
}

export default QuestionPage;
