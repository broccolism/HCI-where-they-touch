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
import { addTouchCookie, getAllCookie, setInitCookie } from "../apis/cookie";
import { CustomPath } from "../constants/path";
import TouchDetector from "../components/TouchDetector";

function HomePage() {
  const handleTouch = (e: any) => {
    addTouchCookie(e);
    window.location.assign(CustomPath.NOTICE);
  };

  useEffect(() => {
    setInitCookie();
  }, []);

  return (
    <StyledColumn>
      <IconWrapper>⌨️</IconWrapper>
      <StyeldEmptyDiv height="18px" />
      <SubTitle>스마트폰 사용량에 따른 타이핑 정확도 연구</SubTitle>
      <Title>얼마나 잘 입력하나요?</Title>
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
