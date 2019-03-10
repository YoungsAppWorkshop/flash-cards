# FlashCards: 모바일 플래시 카드 앱

`FlashCards`는 사용자들이 여러 세트의 카드를 생성하고 그 카드를 이용해 자율적으로 학습할 수 있는 학습용 모바일 플래시 카드 앱입니다. `FlashCards`는 리액트 네이티브(React Native)와 리덕스(Redux)를 활용해 안드로이드 및 iOS용으로 제작되었습니다. 이 프로젝트는 [유다시티의 리액트 나노디그리 프로그램](https://www.udacity.com/course/react-nanodegree--nd019)의 일환으로 제작되었습니다.

- 영문 리드미(English README) 파일: [README.md](/README.md)

## 스크린샷
| 카드 목록 화면   | 퀴즈 화면  |
|------------------|-----------------|
|![Screenshot_01](https://github.com/YoungsAppWorkshop/flash-cards/blob/master/screenshot01.jpg?raw=true)| ![Screenshot_02](https://github.com/YoungsAppWorkshop/flash-cards/blob/master/screenshot02.jpg?raw=true) |

## 설치 방법

`FlashCards`를 시작하기 위해:

* GitHub 저장소 복제합니다: `git clone https://github.com/YoungsAppWorkshop/flash-cards`
* 프로젝트 디렉토리로 이동합니다: `cd flash-cards`
* 어플리케이션을 설치합니다: `npm install`
* 어플리케이션을 실행합니다: `npm start`

`FlashCards`는 안드로이드(Nexus 5X API 23), iOS(iPhone X 11.2) 가상머신 환경과 아이폰 6S(iOS 11.2.5) 기기에서 테스트하였습니다.

## 어플리케이션 구조

```bash
├── public
├── src
│   ├── actions                 # 리덕스 액션(Redux Action Creators)
│   ├── components              # 프레젠테이션 컴포넌트(Presentational components)
│   │   ├── cards
│   │   ├── common
│   │   ├── decks
│   │   └── RootComponent.js
│   ├── constants                 
│   ├── containers              # 컨테이너 컴포넌트(Container components)
│   │   ├── cards
│   │   └── decks
│   ├── navigators
│   ├── reducers                # 리덕스 리듀서(Redux Reducers)
│   ├── store                   # 리덕스 스토어(Redux Store)
│   ├── styles
│   └── utils
├── ...
├── README_ko.md
└── App.js
```
## 참고자료
`FlashCards`는 [Create React Native App](https://github.com/react-community/create-react-native-app)을 활용해 제작되었으며, [React Native](https://facebook.github.io/react-native/), [Expo SDK](https://docs.expo.io/versions/v23.0.0/index.html), [React Navigation](https://reactnavigation.org/),  [Redux](https://github.com/reactjs/redux), [Redux Persist](https://github.com/rt2zz/redux-persist) 등의 라이브러리를 사용하였습니다. 아래의 리스트는 앱을 제작하는데 참고한 자료 목록입니다.

* [Codedaily Screencast Lesson code](https://codedaily.io/screencasts/12/Create-a-Flip-Card-Animation-with-React-Native): 플립 카드 애니메이션
* [Fisher–Yates Shuffle algorithm](https://bost.ocks.org/mike/shuffle/): 퀴즈 순서 난수화

## 라이센스
[MIT 라이센스](/LICENSE)
