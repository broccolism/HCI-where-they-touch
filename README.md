# HCI Project 2

2021-1학기 HCI 과목 프로젝트 2로 제작했습니다.

## "이상한 타자연습"으로 위장한 fake 웹사이트

- [https://odd-keyboard.web.app/](https://odd-keyboard.web.app/)
- 실제 프로젝트 주제: **모바일 환경**에서 유저가 **실제로** 터치하는 부분의 좌표 분석

### 프로젝트 목표

1. 키보드를 누를 때 손가락이 실제로 화면과 닿는 부분이 어느 영역인지 알아봅니다.
2. 버튼을 누를 때 어느 부분을 주로 터치하는지 파악합니다.

### 구현 내용

간단한 웹사이트를 제작했습니다.

On time, within a budget을 위해 최대한 구현 속도가 빠른 방법을 택했습니다.

- Firebase firestore, React typescript

### 유저 스터디

기간: 약 1주일

- 총 98개의 유효한 응답이 들어왔습니다.
- Firebase에서 따로 데이터를 export해주는 기능이 없기 때문에 해당 기능을 하는 코드를 작성하여 엑셀로 데이터를 추출했습니다.
- 각 휴대폰별 width 크기를 고려해, 실제로 터치한 영역의 x, y 좌표 및 그 경향을 시각화하여 나타내었습니다.

### 유저 스터디 결과

- 요약
  - 사용자는 LAZY 하게 버튼을 누릅니다.
  - 사용자는 키보드의 키 아래쪽 영역을 터치하는 경향이 큽니다.
  - 키보드 사용감에 영향을 미치는 요인 중, 키 자체의 크기보다는 빈 공간의 터치 가능 여부가 더 큰 영향을 미칩니다.

아래는 시각화한 그래프 중 일부이며, 자세한 결과는 [블로그에 업데이트 했습니다.](https://velog.io/@broccolism/%EC%96%BC%EB%A7%88%EB%82%98-%EC%9E%98-%EC%9E%85%EB%A0%A5%ED%95%98%EB%82%98%EC%9A%94-HCI-%EC%9C%A0%EC%A0%80-%EC%8A%A4%ED%84%B0%EB%94%94-3-%EA%B2%B0%EA%B3%BC-%EB%B6%84%EC%84%9D)

#### 유저의 터치 기록

<div style={{display: "flex", flexDirection: "row"}}>
  <img width="300" src=https://user-images.githubusercontent.com/45515332/122631640-02b08b00-d108-11eb-82de-b7e49652b232.png>
  <img width="300" src=https://user-images.githubusercontent.com/45515332/122631654-21168680-d108-11eb-94dc-8fd9cb887dea.png>
</div>

#### 유저의 입력 시도 기록

<div style={{display: "flex", flexDirection: "row"}}>
  <img width="300" src=https://user-images.githubusercontent.com/45515332/122631578-8cac2400-d107-11eb-8c69-ef4031b1fa74.png>
  <img width="300" src=https://user-images.githubusercontent.com/45515332/122631580-8e75e780-d107-11eb-905f-1240c67252dc.png>
</div>

#### 유저의 터치 기록 분포

<img width="600" src=https://user-images.githubusercontent.com/45515332/122631584-92096e80-d107-11eb-867b-2321a5845cc9.png>
