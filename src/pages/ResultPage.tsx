import React from "react";
import styled from "styled-components";
import {
  Accent,
  Content,
  IconWrapper,
  StyeldEmptyDiv,
  StyledColumn,
  StyledRow,
  Title,
} from "../components/layout/StyledComponents";
import { keyboardColors } from "../constants/colors";
import { MdEmail } from "react-icons/md";
import { getTouchesForResultCookie } from "../apis/cookie";
import { testWords } from "../constants/testContents";
import { AiOutlineGithub } from "react-icons/ai";
import { MOBILE_COMMON_WIDTH } from "../constants/size";

function ResultPage() {
  const userAnswers = getTouchesForResultCookie();

  return (
    <StyledColumn width={MOBILE_COMMON_WIDTH}>
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
          싶습니다. 😇 <br />
          <br />
          이대로 끝내면 아쉬우니 이상한 키보드로 열심히 입력했던 타자연습 결과를
          알려드리겠습니다.
          <StyeldEmptyDiv height="12px" />
          <StyledColumn>
            {userAnswers.map((input: string, index: number) => {
              const word = testWords[index].word;
              const answer = testWords[index].answer;
              return (
                <StyledRow
                  width="100%"
                  key={input + index.toString()}
                  crossAxisAlignment="center"
                  style={{
                    borderBottom: `1px solid ${keyboardColors.gray}`,
                    padding: "4px 0px",
                  }}
                >
                  <Answer>{word}</Answer>
                  {answer === input ? (
                    <BlueText>{input}</BlueText>
                  ) : (
                    <RedText>{input}</RedText>
                  )}
                </StyledRow>
              );
            })}
          </StyledColumn>
          <br />
          <br />
          유저 스터디 최종 결과가 궁금하다면 이메일을 보내주세요. 결과를
          보내드리겠습니다.
          <br />
          <MailWrapper href="mailto:mile3880@gmail.com">
            <StyledColumn crossAxisAlignment="flex-end">
              <MdEmail size="40px" />
              mile3880@gmail.com
            </StyledColumn>
          </MailWrapper>
          <StyeldEmptyDiv height="12px" />
          참여자 수에 따라 크게 유의미하지 않은 결과가 나올수도 있습니다.
          <Accent>
            (하지만 주변인에게 널리 퍼뜨려주신다면 의미 있는 결과가 나올지도..!)
          </Accent>
          <StyeldEmptyDiv height="36px" />
          <Title>감사합니다!</Title>
          <StyeldEmptyDiv height="28px" />
          <IconWrapper>🎉</IconWrapper>
          <MailWrapper href="https://github.com/broccolism">
            <StyledColumn crossAxisAlignment="flex-end">
              <AiOutlineGithub size="40px" />
              <StyeldEmptyDiv height="8px" />
              <div>@broccolism</div> <br />
              만든 이가 뭐하는 사람인지 보러가기
            </StyledColumn>
          </MailWrapper>
        </Content>
      </PaddingWrapper>
    </StyledColumn>
  );
}

const MailWrapper = styled.a`
  text-decoration: none;
  color: ${keyboardColors.black};
  width: 100%;
`;

const PaddingWrapper = styled.div`
  padding: 20px;
`;

const Answer = styled.div`
  width: 40%;
  font-weight: bold;
`;

const BlueText = styled.div`
  font-weight: bold;
  color: ${keyboardColors.blue};
`;

const RedText = styled.div`
  font-weight: bold;
  color: ${keyboardColors.red};
`;

export default ResultPage;
