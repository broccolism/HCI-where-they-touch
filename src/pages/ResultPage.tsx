import React from "react";
import styled from "styled-components";
import {
  Accent,
  Content,
  IconWrapper,
  StyeldEmptyDiv,
  StyledColumn,
  Title,
} from "../components/layout/StyledComponents";
import { keyboardColors } from "../constants/colors";
import { MdEmail } from "react-icons/md";

function ResultPage() {
  return (
    <StyledColumn>
      <IconWrapper>🎉</IconWrapper>
      <StyeldEmptyDiv height="24px" />
      <Title>감사합니다!</Title>
      <StyeldEmptyDiv height="28px" />
      <PaddingWrapper>
        <Content>
          사실 이 사이트는 모 대학 4학년이 '인간 컴퓨터 상호작용' 과목을
          수강하며 user study를 하기 위해 만든 프로젝트 페이지입니다.
          <br />
          이번 프로젝트의 실제 목표는 "스마트폰에서 사용자가 버튼을 누르기 위해
          실제로 터치하게 되는 영역"을 알아내는 것이었습니다.
          <br />
          <br />
          사용자가 이를 의식하지 않게 하기 위해 실제 연구 주제를 숨긴 점
          사과드립니다. 더불어 끝까지 참여해주셔서 감사하다는 말씀을 드리고
          싶습니다. 😇
          <br />
          <br />
          유저 스터디 최종 결과가 궁금하다면 이메일을 보내주세요. 결과를
          보내드리겠습니다.
          <br />
          <BlueWrapper href="mailto:mile3880@gmail.com">
            <StyledColumn crossAxisAlignment="flex-end">
              <MdEmail size="40px" />
              mile3880@gmail.com
            </StyledColumn>
          </BlueWrapper>
          참여자 수에 따라 크게 유의미하지 않은 결과가 나올수도 있습니다.
          <Accent>
            (하지만 주변인에게 널리 퍼뜨려주신다면 의미 있는 결과가
            나올지도..🧐)
          </Accent>
          <br />
          <br />
          이대로 끝내면 아쉬우니 이상한 키보드로 열심히 입력했던 타자연습 결과를
          알려드리겠습니다.
        </Content>
      </PaddingWrapper>
    </StyledColumn>
  );
}

const BlueWrapper = styled.a`
  text-decoration: none;
  color: ${keyboardColors.blue};
  width: 100%;
`;

const PaddingWrapper = styled.div`
  padding: 20px;
`;

export default ResultPage;
