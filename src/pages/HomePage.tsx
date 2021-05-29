import React, { useEffect, useRef } from "react";
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
import { MOBILE_COMMON_WIDTH } from "../constants/size";
import getPositionAndSize from "../apis/positionAndSize";

function HomePage() {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleTouch = (e: any) => {
    addTouchCookie(e, ButtonNames.HOME_START);
    window.location.assign(CustomPath.NOTICE);
  };

  useEffect(() => {
    setInitTouchesCookie();
    setScreenSizeCookie();
  }, []);

  useEffect(() => {
    if (buttonRef !== undefined && buttonRef !== null) {
      console.log("@@@", getPositionAndSize(buttonRef, "시작하기"));
    }
  });

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
      <TouchDetector
        width={MOBILE_COMMON_WIDTH}
        height="120px"
        handleTouch={handleTouch}
      >
        <TextButton ref={buttonRef}>시작하기 &gt;</TextButton>
      </TouchDetector>
    </StyledColumn>
  );
}

const TextButton = styled.div`
  width: 100%;
  text-align: center;
`;

export default HomePage;
