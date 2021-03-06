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
      <IconWrapper>π</IconWrapper>
      <StyeldEmptyDiv height="24px" />
      <Title>κ°μ¬ν©λλ€!</Title>
      <StyeldEmptyDiv height="28px" />
      <PaddingWrapper>
        <Content>
          μ¬μ€ μ΄ μ¬μ΄νΈλ λͺ¨ λν 4νλμ΄ 'μΈκ° μ»΄ν¨ν° μνΈμμ©' κ³Όλͺ©μ
          μκ°νλ©° user studyλ₯Ό νκΈ° μν΄ λ§λ  νλ‘μ νΈ νμ΄μ§μλλ€.
          <br />
          μ΄λ² νλ‘μ νΈμ μ€μ  λͺ©νλ "μ€λ§νΈν°μμ μ¬μ©μκ° λ²νΌμ λλ₯΄κΈ° μν΄
          μ€μ λ‘ ν°μΉνκ² λλ μμ­"μ μμλ΄λ κ²μ΄μμ΅λλ€.
          <br />
          <br />
          μ¬μ©μκ° μ΄λ₯Ό μμνμ§ μκ² νκΈ° μν΄ μ€μ  μ°κ΅¬ μ£Όμ λ₯Ό μ¨κΈ΄ μ 
          μ¬κ³Όλλ¦½λλ€. λλΆμ΄ λκΉμ§ μ°Έμ¬ν΄μ£Όμμ κ°μ¬νλ€λ λ§μμ λλ¦¬κ³ 
          μΆμ΅λλ€. π <br />
          <br />
          μ΄λλ‘ λλ΄λ©΄ μμ¬μ°λ μ΄μν ν€λ³΄λλ‘ μ΄μ¬ν μλ ₯νλ νμμ°μ΅ κ²°κ³Όλ₯Ό
          μλ €λλ¦¬κ² μ΅λλ€.
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
          μ μ  μ€ν°λ μ΅μ’ κ²°κ³Όκ° κΆκΈνλ€λ©΄ μ΄λ©μΌμ λ³΄λ΄μ£ΌμΈμ. κ²°κ³Όλ₯Ό
          λ³΄λ΄λλ¦¬κ² μ΅λλ€.
          <br />
          <MailWrapper href="mailto:mile3880@gmail.com">
            <StyledColumn crossAxisAlignment="flex-end">
              <MdEmail size="40px" />
              mile3880@gmail.com
            </StyledColumn>
          </MailWrapper>
          <StyeldEmptyDiv height="12px" />
          μ°Έμ¬μ μμ λ°λΌ ν¬κ² μ μλ―Ένμ§ μμ κ²°κ³Όκ° λμ¬μλ μμ΅λλ€.
          <Accent>
            (νμ§λ§ μ£Όλ³μΈμκ² λλ¦¬ νΌλ¨λ €μ£Όμ λ€λ©΄ μλ―Έ μλ κ²°κ³Όκ° λμ¬μ§λ..!)
          </Accent>
          <StyeldEmptyDiv height="36px" />
          <Title>κ°μ¬ν©λλ€!</Title>
          <StyeldEmptyDiv height="28px" />
          <IconWrapper>π</IconWrapper>
          <MailWrapper href="https://github.com/broccolism">
            <StyledColumn crossAxisAlignment="flex-end">
              <AiOutlineGithub size="40px" />
              <StyeldEmptyDiv height="8px" />
              <div>@broccolism</div> <br />
              λ§λ  μ΄κ° λ­νλ μ¬λμΈμ§ λ³΄λ¬κ°κΈ°
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
