import { Cookies } from "react-cookie";
import { CookieName, CustomPath } from "../constants/path";
import { testWords } from "../constants/testContents";
import { ScreenSize, UserTouch } from "../models/dataTypes";

const cookie = new Cookies();

export const setInitCookie = () => {
  localStorage.setItem(CookieName.TOUCHES, JSON.stringify([]));
};

export const setScreenSizeCookie = (width: number, height: number) => {
  const size: ScreenSize = {
    width: width,
    height: height,
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
  const touch: UserTouch = makeTouchObj(e, content);
  const newCookie = getAccTouchCookie().concat(touch);
  localStorage.setItem(CookieName.TOUCHES, JSON.stringify(newCookie));
};

const getAccTouchCookie = () => {
  return JSON.parse(localStorage.getItem(CookieName.TOUCHES)!);
};

const makeTouchObj = (e: any, content: string): UserTouch => {
  const pageX = e.touches[0].pageX;
  const pageY = e.touches[0].pageY;
  const touch: UserTouch = {
    pageX: Math.round(pageX),
    pageY: Math.round(pageY),
    path: window.location.pathname + window.location.hash,
    createdAt: new Date(),
    content: content,
  };
  return touch;
};

export const getAllCookie = () => {
  let history = [];
  history.push({
    key: CookieName.TOUCHES,
    data: JSON.parse(localStorage[CookieName.TOUCHES]),
  });
  history.push({ key: CookieName.SIZE, data: localStorage[CookieName.SIZE] });

  return history;
};
