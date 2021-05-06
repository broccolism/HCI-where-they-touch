import React from "react";
import styled from "styled-components";
import {
  StyeldEmptyDiv,
  StyledColumn,
} from "../components/layout/StyledComponents";
import { keyboardColors } from "../constants/colors";
import woodenBackground from "../assets/woodenBackground.png";

function HomePage() {
  return (
    <StyledColumn crossAxisAlignment="start">
      <IconWrapper>⌨️</IconWrapper>
      <StyeldEmptyDiv height="18px" />
      <SubTitle>
        스마트폰 사용량에 따른
        <br />
        타이핑 정확도 연구
      </SubTitle>
      <Title>얼마나 잘 입력하나요?</Title>
      <StyeldEmptyDiv height="36px" />
      <Content>
        어렸을 때 학교에서 많이 해봤던 타자연습,
        <br />
        휴대폰으로도 해보셨나요?
        <br />
        <br />
        주어지는 단어를 입력하고, 다른 사람과 결과를 비교해보세요.
      </Content>
    </StyledColumn>
  );
}

const IconWrapper = styled.div`
  font-size: 48px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
const SubTitle = styled.div`
  font-size: 18px;
  color: ${keyboardColors.gray};
`;

const Content = styled.div`
  line-height: 1.4;
`;

const Background = styled.div`
  background-image: url(${woodenBackground});
  background-repeat: repeat;
  height: 100vh;
  width: 100vw;
  transform: translate(-20px, -100px);
`;

export default HomePage;
