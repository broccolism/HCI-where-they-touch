import styled from "styled-components";
import { addTouchCookie } from "../apis/cookie";
import KeyboardInput from "../components/KeyboardInput";
import {
  Accent,
  Content,
  StyeldEmptyDiv,
  StyledColumn,
  Title,
} from "../components/layout/StyledComponents";
import TouchDetector from "../components/TouchDetector";
import { keyboardColors } from "../constants/colors";
import { isButton } from "../constants/cookie";
import { CustomPath } from "../constants/path";
import { testWords } from "../constants/testContents";

function NoticePage() {
  const handleTouch = (e: any) => {
    addTouchCookie(e, isButton);
    window.location.assign(CustomPath.KEYBOARD + testWords[0].hash);
  };

  return (
    <StyledColumn>
      <Title>
        한 번 입력한 글자는
        <br />
        수정할 수 없어요
      </Title>
      <StyeldEmptyDiv height="32px" />
      <Content width="80%">
        보다 정확한 측정을 위해
        <Accent> 스마트폰의 기존 키보드와 글자를 지우는 키</Accent>는 쓸 수
        없습니다.
        <br />
        <br />
        또한, 이 키보드로 입력하면 글자가 <Accent>ㅇㅣㄹㅓㅎㄱㅔ </Accent>
        써집니다.
        <br />
        테스트에 사용될 키보드로 미리 연습해보세요.
      </Content>
      <StyeldEmptyDiv height="24px" />
      <KeyboardInput />
      <TouchDetector width="100vw" height="20vh" handleTouch={handleTouch}>
        <FilledButton>시작</FilledButton>
      </TouchDetector>
    </StyledColumn>
  );
}

export default NoticePage;

const FilledButton = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${keyboardColors.white};
  font-weight: bold;
  border-radius: 80px;
  letter-spacing: 2px;
  background-color: ${keyboardColors.black};
`;
