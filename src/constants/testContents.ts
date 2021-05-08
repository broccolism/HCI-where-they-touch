export const testWords = [
  { hash: "#0", word: "카네이션", length: 9, answer: "ㅋㅏㄴㅔㅇㅣㅅㅕㄴ" },
  {
    hash: "#1",
    word: "호두마루",
    length: 8,
    answer: "ㅎㅗㄷㅜㅁㅏㄹㅜ",
  },
  { hash: "#2", word: "당근", length: 6, answer: "ㄷㅏㅇㄱㅡㄴ" },
  {
    hash: "#3",
    word: "스파게티",
    length: 8,
    answer: "ㅅㅡㅍㅏㄱㅔㅌㅣ",
  },
  {
    hash: "#4",
    word: "후라이드치킨",
    length: 13,
    answer: "ㅎㅜㄹㅏㅇㅣㄷㅡㅊㅣㅋㅣㄴ",
  },
  { hash: "#5", word: "뱃지", length: 5, answer: "ㅂㅐㅅㅈㅣ" },
];

export type TestWordStep = 0 | 1 | 2 | 3 | 4 | 5;
export const lastWordStep = 5;
