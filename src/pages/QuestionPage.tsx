import {
  CircularProgress,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { addAnswerCookie, addTouchCookie, getAllCookie } from "../apis/cookie";
import { uploadUserLog } from "../apis/firebase";
import getPositionAndSize from "../apis/positionAndSize";
import {
  IconWrapper,
  StyeldEmptyDiv,
  StyledColumn,
  Title,
} from "../components/layout/StyledComponents";
import TouchDetector from "../components/TouchDetector";
import { keyboardColors } from "../constants/colors";
import { ButtonNames } from "../constants/cookie";
import { CustomPath } from "../constants/path";
import { MOBILE_COMMON_WIDTH } from "../constants/size";
import { AnswerFieldName, Answers } from "../models/dataTypes";
import { PosAndSize } from "../models/posAndSizeTypes";

function QuestionPage() {
  const maleButton = useRef<HTMLDivElement>(null);
  const femaleButton = useRef<HTMLDivElement>(null);
  const longButton = useRef<HTMLDivElement>(null);
  const shortButton = useRef<HTMLDivElement>(null);
  const bothButton = useRef<HTMLDivElement>(null);
  const resultButton = useRef<HTMLDivElement>(null);
  const buttonRefs = [
    maleButton,
    femaleButton,
    longButton,
    shortButton,
    bothButton,
    resultButton,
  ];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Answers>({
    gender: "",
    age: 0,
    typpingType: "",
  });

  const handleTouch = (e: any) => {
    addTouchCookie(e, e.target.name + ButtonNames.BUTTON_TAG);
  };

  const handleAnswer = (e: any) => {
    const name = e.target.name as AnswerFieldName;
    const value = e.target.value;

    let newAnswers: any = { ...answers };
    newAnswers[name] = value;
    setAnswers(newAnswers);
  };

  const handleTouchGoNext = async (e: any) => {
    addTouchCookie(e, ButtonNames.QUESTION_NEXT);
    addAnswerCookie(answers);
    setIsLoading(true);
    await uploadUserLog();
  };

  useEffect(() => {
    buttonRefs.forEach((ref) => printRef(ref));
  });

  const printRef = (ref: React.RefObject<HTMLDivElement>) => {
    const posAndSize: PosAndSize = getPositionAndSize(
      ref,
      ref.current!.textContent!
    );
    console.log(posAndSize);
  };

  return (
    <StyledColumn width={MOBILE_COMMON_WIDTH}>
      <IconWrapper>🧐</IconWrapper>
      <StyeldEmptyDiv height="24px" />
      <Title>거의 다 왔습니다!</Title>
      <StyeldEmptyDiv height="36px" />
      <QuestionSection>
        <Question>성별을 알려주세요.</Question>
        <TouchDetector width={MOBILE_COMMON_WIDTH} handleTouch={handleTouch}>
          <RadioGroup
            style={{ width: "100%", padding: "0px 20px" }}
            aria-label="position"
            name="gender"
            onChange={handleAnswer}
          >
            <FormControlLabel
              ref={maleButton}
              style={{ width: "100%", padding: "4px" }}
              value="남자"
              control={<Radio color="primary" />}
              label="남자"
              labelPlacement="end"
            />
            <FormControlLabel
              ref={femaleButton}
              style={{ width: "100%", padding: "4px" }}
              value="여자"
              control={<Radio color="primary" />}
              label="여자"
              labelPlacement="end"
            />
          </RadioGroup>
        </TouchDetector>
      </QuestionSection>
      <StyeldEmptyDiv height="24px" />
      <QuestionSection>
        <Question>나이를 알려주세요.</Question>
        <Input
          name="age"
          style={{ marginLeft: "20px" }}
          placeholder="숫자만 입력해주세요"
          onChange={handleAnswer}
        />
      </QuestionSection>
      <StyeldEmptyDiv height="24px" />
      <QuestionSection>
        <Question>스마트폰 키보드를 주로 어떻게 사용하나요?</Question>
        <TouchDetector handleTouch={handleTouch}>
          <RadioGroup
            style={{ width: "100%", padding: "0px 20px" }}
            aria-label="position"
            name="typpingType"
            onChange={handleAnswer}
          >
            <FormControlLabel
              ref={longButton}
              style={{ width: "100%", padding: "4px" }}
              value="긴 글 적기 (예: SNS 글 | 블로그)"
              control={<Radio color="primary" />}
              label="긴 글 적기 (예: SNS 글 | 블로그)"
              labelPlacement="end"
            />
            <FormControlLabel
              ref={shortButton}
              style={{ width: "100%", padding: "4px" }}
              value="짧은 글 적기 (예: 카카오톡 | 문자 | 검색)"
              control={<Radio color="primary" />}
              label="짧은 글 적기 (예: 카카오톡 | 문자 | 검색)"
              labelPlacement="end"
            />
            <FormControlLabel
              ref={bothButton}
              style={{ width: "100%", padding: "4px" }}
              value="위 2가지 모두"
              control={<Radio color="primary" />}
              label="위 2가지 모두"
              labelPlacement="end"
            />
          </RadioGroup>
        </TouchDetector>
      </QuestionSection>
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <TouchDetector height="100px" handleTouch={handleTouchGoNext}>
          <LongButton ref={resultButton}>결과 보기</LongButton>
        </TouchDetector>
      )}
    </StyledColumn>
  );
}

const QuestionSection = styled.div`
  width: 100%;
`;

const Question = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-left: 20px;
  text-align: start;
  width: 100%;
`;

const LongButton = styled.div`
  width: 330px;
  padding: 10px 0px;
  background-color: ${keyboardColors.red};
  color: ${keyboardColors.white};
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 6px;
`;

export default QuestionPage;
