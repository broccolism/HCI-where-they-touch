import { ModelToServer } from "../models/dataTypes";
import firebase from "firebase";
import { getAllCookie, getTouchesForResultCookie } from "./cookie";
import { CookieName, CustomPath } from "../constants/path";
import db from "../firebaseConfig";

export const uploadUserLog = () => {
  const allCookies: { key: string; data: any }[] = getAllCookie();
  const newLog: ModelToServer = {
    screenSize: allCookies.find((item) => item.key === CookieName.SIZE)!.data,
    touches: allCookies.find((item) => item.key === CookieName.TOUCHES)!.data,
    answers: allCookies.find((item) => item.key === CookieName.ANSWERS)!.data,
    createdAt: firebase.firestore.Timestamp.fromMillis(Date.now()),
  };
  window.location.assign(CustomPath.RESULT);

  //   db.collection("Logs")
  //     .add(newLog)
  //     .then((docRef) => {
  //       window.location.assign(CustomPath.RESULT);
  //     })
  //     .catch((err) => {
  //       console.log("@@@@ firebase add err:", err);
  //     });
};
