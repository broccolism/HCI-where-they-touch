export interface ScreenSize {
  width: number;
  height: number;
}

export interface UserTouch {
  path: string;
  pageX: number;
  pageY: number;
  createdAt: Date;
  content: string;
}

export interface Answers {
  gender: string;
  age: number;
  typpingType: string;
}

export type AnswerFieldName = "gender" | "age" | "typpingType";
