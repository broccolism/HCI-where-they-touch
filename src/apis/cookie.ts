import { Cookies } from "react-cookie";
import { CookieName, CustomPath } from "../constants/path";
import { ScreenSize, UserTouch } from "../models/dataTypes";

const cookie = new Cookies();

export const setInitCookie = () => {
  cookie.set(CookieName.TOUCHES, [], { path: "/" });
};

export const setScreenSizeCookie = (width: number, height: number) => {
  const size: ScreenSize = {
    width: width,
    height: height,
  };
  cookie.set(CookieName.SIZE, size, { path: "/" });
};

export const getScreenSizeCookie = () => {
  return cookie.get(CookieName.SIZE);
};

const getAccTouchCookie = () => {
  return cookie.get(CookieName.TOUCHES);
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

export const addTouchCookie = (e: any, content: string) => {
  const touch: UserTouch = makeTouchObj(e, content);
  const newCookie = getAccTouchCookie().concat(touch);
  cookie.set(CookieName.TOUCHES, newCookie, { path: "/" });
};

export const getAllCookie = () => {
  return cookie.getAll();
};
