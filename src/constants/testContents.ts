export const testWords = [
  { hash: "#0", word: "카네이션", length: 9, answer: "ㅋㅏㄴㅔㅇㅣㅅㅕㄴ" },
  {
    hash: "#1",
    word: "호두마루",
    length: 8,
    answer: "ㅎ ㅗ ㄷ ㅜ ㅁ ㅏ ㄹ ㅜ",
  },
  { hash: "#2", word: "당근", length: 6, answer: "ㄷ ㅏ ㅇ ㄱ ㅡ ㄴ" },
  {
    hash: "#3",
    word: "스파게티",
    length: 8,
    answer: "ㅅ ㅡ ㅍ ㅏ ㄱ ㅔ ㅌ ㅣ",
  },
  {
    hash: "#4",
    word: "후라이드치킨",
    length: 13,
    answer: "ㅎ ㅜ ㄹ ㅏ ㅇ ㅣ ㄷ ㅡ ㅊ ㅣ ㅋ ㅣ ㄴ",
  },
  { hash: "#5", word: "뱃지", length: 5, answer: "ㅂ ㅐ ㅅ ㅈ ㅣ" },
];

export type TestWordStep = 0 | 1 | 2 | 3 | 4 | 5;
export const lastWordStep = 5;
