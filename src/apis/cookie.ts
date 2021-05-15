import { Cookies } from "react-cookie";
import { CookieName, CustomPath } from "../constants/path";
import { testWords } from "../constants/testContents";
import { Answers, ScreenSize, UserTouch } from "../models/dataTypes";

const cookie = new Cookies();

export const setInitTouchesCookie = () => {
  localStorage.setItem(CookieName.TOUCHES, JSON.stringify([]));
};

export const setScreenSizeCookie = () => {
  const size: ScreenSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  localStorage.setItem(CookieName.SIZE, JSON.stringify(size));
};

export const getTouchesForResultCookie = () => {
  const history = JSON.parse(localStorage.getItem(CookieName.TOUCHES)!);

  let letters = history
    .map((item: UserTouch) => item.content)
    .filter((content: string) => content.length === 1);
  let i = 0;
  const lettersPerWords = testWords.map((word) => {
    return letters.splice(i, i + word.length);
  });
  const userInputsPerWords = lettersPerWords.map((arr: string[]) => {
    return arr.join("");
  });
  return userInputsPerWords;
};

export const addTouchCookie = (e: any, content: string) => {
  console.log("@@@ ADD TOUCH COOKIE", content, e);
  const touch: UserTouch = makeTouchObj(e, content);
  const newCookie = getAccTouchCookie().concat(touch);
  localStorage.setItem(CookieName.TOUCHES, JSON.stringify(newCookie));
};

const getAccTouchCookie = () => {
  return JSON.parse(localStorage.getItem(CookieName.TOUCHES)!);
};

const makeTouchObj = (e: any, content: string): UserTouch => {
  const pageX = e.changedTouches[0].pageX.toFixed(2);
  const pageY = e.changedTouches[0].pageY.toFixed(2);
  const touch: UserTouch = {
    pageX: pageX,
    pageY: pageY,
    path: window.location.pathname + window.location.hash,
    createdAt: new Date(),
    content: content,
  };
  return touch;
};

export const addAnswerCookie = (answers: Answers) => {
  localStorage.setItem(CookieName.ANSWERS, JSON.stringify(answers));
};

export const getAllCookie = () => {
  return Object.values(CookieName).map((name) => {
    return { key: name, data: JSON.parse(localStorage[name]) };
  });
};
