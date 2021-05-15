import { ModelToServer } from "../models/dataTypes";
import firebase from "firebase";
import { getAllCookie, getTouchesForResultCookie } from "./cookie";
import { CookieName, CustomPath } from "../constants/path";
import db from "../firebaseConfig";

export const uploadUserLog = async () => {
  const allCookies: { key: string; data: any }[] = getAllCookie();
  const newLog: ModelToServer = {
    screenSize: allCookies.find((item) => item.key === CookieName.SIZE)!.data,
    tries: allCookies.find((item) => item.key === CookieName.TRIES)!.data,
    touches: allCookies.find((item) => item.key === CookieName.TOUCHES)!.data,
    answers: allCookies.find((item) => item.key === CookieName.ANSWERS)!.data,
    createdAt: firebase.firestore.Timestamp.fromMillis(Date.now()),
  };

  try {
    await db.collection("Logs").add(newLog);
    window.location.assign(CustomPath.RESULT);
  } catch (err: any) {
    console.log("@@@@ firebase add err:", err);
  }

  window.location.assign(CustomPath.RESULT);
};
