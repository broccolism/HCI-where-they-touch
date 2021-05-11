import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { addTouchCookie, getAllCookie } from "./apis/cookie";
import StepIndicator from "./components/layout/StepIndicator";
import { StyeldEmptyDiv } from "./components/layout/StyledComponents";
import { keyboardColors } from "./constants/colors";
import { CustomPath } from "./constants/path";
import { MOBILE_COMMON_WIDTH } from "./constants/size";
import HomePage from "./pages/HomePage";
import KeyboardTestPage from "./pages/KeyboardTestPage";
import NoticePage from "./pages/NoticePage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Background>
      <MobileWrapper>
        <BrowserRouter>
          <StyeldEmptyDiv height="16px" />
          <StepIndicator />
          <StyeldEmptyDiv height="18px" />
          <Switch>
            <Route path={CustomPath.RESULT}>
              <ResultPage />
            </Route>
            <Route path={CustomPath.QUESTION}>
              <QuestionPage />
            </Route>
            <Route path={CustomPath.KEYBOARD}>
              <KeyboardTestPage />
            </Route>
            <Route path={CustomPath.NOTICE}>
              <NoticePage />
            </Route>
            <Route path={CustomPath.HOME}>
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </MobileWrapper>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  background-color: ${keyboardColors.black};
`;

const MobileWrapper = styled.div`
  width: ${MOBILE_COMMON_WIDTH};
  min-height: 100vh;
  background-color: ${keyboardColors.white};
`;
export default App;
