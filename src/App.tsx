import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { addTouchCookie, getAllCookie } from "./apis/cookie";
import StepIndicator from "./components/layout/StepIndicator";
import { StyeldEmptyDiv } from "./components/layout/StyledComponents";
import TouchDetector from "./components/TouchDetector";
import { CustomPath } from "./constants/path";
import { UserTouch } from "./models/dataTypes";
import HomePage from "./pages/HomePage";
import KeyboardTestPage from "./pages/KeyboardTestPage";
import NoticePage from "./pages/NoticePage";

function App() {
  return (
    <MobileWrapper>
      <BrowserRouter>
        <StyeldEmptyDiv height="16px" />
        <StepIndicator />
        <StyeldEmptyDiv height="18px" />
        <Switch>
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
  );
}

const MobileWrapper = styled.div``;

export default App;
