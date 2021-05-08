import React from "react";
import Keyboard from "../components/keyboard/Keyboard";
import {
  Accent,
  Content,
  IconWrapper,
  StyeldEmptyDiv,
  StyledColumn,
  Title,
} from "../components/layout/StyledComponents";

function NoticePage() {
  return (
    <StyledColumn>
      <IconWrapper>⚠️</IconWrapper>
      <StyeldEmptyDiv height="24px" />
      <Title>
        한 번 입력한 글자는
        <br />
        수정할 수 없어요
      </Title>
      <StyeldEmptyDiv height="32px" />
      <Content width="80%">
        보다 정확한 측정을 위해
        <Accent> 스마트폰의 키보드와 글자를 지우는 키</Accent>는 쓸 수 없습니다.
        <br />
        테스트에 사용될 키보드로 미리 연습해보세요.
      </Content>
      <StyeldEmptyDiv height="24px" />
      <Keyboard />
    </StyledColumn>
  );
}

export default NoticePage;
