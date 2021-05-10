import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Content,
  IconWrapper,
  StyeldEmptyDiv,
  StyledColumn,
  SubTitle,
  Title,
} from "../components/layout/StyledComponents";
import {
  addTouchCookie,
  setInitTouchesCookie,
  setScreenSizeCookie,
} from "../apis/cookie";
import { CustomPath } from "../constants/path";
import TouchDetector from "../components/TouchDetector";
import { ButtonNames } from "../constants/cookie";

function HomePage() {
  const handleTouch = (e: any) => {
    addTouchCookie(e, ButtonNames.HOME_START);
    window.location.assign(CustomPath.NOTICE);
  };

  useEffect(() => {
    setInitTouchesCookie();
    setScreenSizeCookie();
  }, []);

  return (
    <StyledColumn>
      <IconWrapper>⌨️</IconWrapper>
      <StyeldEmptyDiv height="18px" />
      <SubTitle>얼마나 잘 입력하나요?</SubTitle>
      <Title>좀 이상한 타자연습</Title>
      <StyeldEmptyDiv height="36px" />
      <Content>
        어렸을 때 학교에서 많이 해봤던 타자연습!
        <br />
        휴대폰으로도 해보셨나요?
        <br />
        <br />
        주어지는 단어를 입력하고,
        <br />
        다른 사람과 결과를 비교해보세요.
      </Content>
      <StyeldEmptyDiv height="10px" />
      <TouchDetector width="100vw" height="16vh" handleTouch={handleTouch}>
        <TextButton>시작하기 &gt;</TextButton>
      </TouchDetector>
    </StyledColumn>
  );
}

const TextButton = styled.div`
  text-align: center;
  padding: 5vh 30vw;
`;

export default HomePage;
