# JS로 MOMENTUM 만들기

노마드코더 - Vanilla JS 크롬 앱 만들기를 수강하면서 만든 프로젝트입니다.

[완성 Page 보러가기](https://lucent-kitten-03f028.netlify.app)

## 구현 계기

부트캠프 과정 내 과제 프로젝트 작업 후 JavaScript에 대한 학습이 더 필요하다고 느꼈습니다.
지금까지 스터디한 JavaScript를 복습할 겸 `노마드코더`의 `Vanilla JS 크롬 앱 만들기` 무료 강의를 수강하면서 생성성 향상을 위한 페이지를 만들었습니다.  
이 프로젝트를 통해 JS 기본 내용들을 다시 한번 복습하는 계기가 되었고, 스터디를 진행중인 scss를 활용해보는 계기가 되었습니다.

## 프로젝트 설명

전체적인 디자인 컨셉은 Mac OS UI 컨셉으로 제작하였습니다.  
scss mixin 문법을 활용하여 반복되는 style을 공통적으로 만들어 사용해봤습니다.  
`openweathermap`의 Open API와 `geolocation`을 통해 사용자 위치정보와 날씨 정보를 불러왔습니다.  
LocalStorage를 활용하여 사용자 입력에 따른 ToDo List와 TIL List를 저장할 수 있는 기능을 구현했습니다.
명언 데이터 객체를 통해 랜덤으로 명언 데이터를 화면에 표시했습니다.

## 기술스택

<!-- TODO -->

## TODO

- 현재 ToDo List와 TIL List, 사용자 이름을 LocalStorage로 관리하고 있는데, 추후 Firebase Database를 연동하여 데이터베이스로 관리하는 기능을 추가하고 싶습니다.
- 반응형 페이지로 리뉴얼
- 명언 데이터 업데이트 또는 명언 관련 OpenApi 연동
- ToDo Done Check 기능 추가

## 배운점

- API KEY를 Github 저장소에서 숨김처리 하고 Netlify에 배포한 점(Build Command 활용)
- 다양한 DOM API와 내장 함수들을 사용한 점
- SCSS Mixin 사용
