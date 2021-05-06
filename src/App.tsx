import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import StepIndicator from "./components/layout/StepIndicator";
import { StyeldEmptyDiv } from "./components/layout/StyledComponents";
import { CustomPath } from "./constants/path";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <MobileWrapper>
      <BrowserRouter>
        <StyeldEmptyDiv height="32px" />
        <StepIndicator />
        <StyeldEmptyDiv height="18px" />
        <Switch>
          <Route path={CustomPath.HOME}>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </MobileWrapper>
  );
}

const MobileWrapper = styled.div`
  margin-left: 20px;
`;

export default App;
