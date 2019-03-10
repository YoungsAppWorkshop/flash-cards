# FlashCards: A mobile Flashcards App

FlashCards is a mobile application for Android and iOS which allows users to study collections of flashcards. Users can create different categories of flashcards called 'decks', add flashcards to those decks, then take quizzes on those decks. FlashCards is built with React Native and Redux. This project is one of assignments for the [Udacity's React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

- 한글 리드미(README Korean) 파일: [README_ko.md](/README_ko.md)

## Screenshots
| Cards List Screen   | Quiz Screen |
|------------------|-----------------|
|![Screenshot_01](https://github.com/YoungsAppWorkshop/flash-cards/blob/master/screenshot01.jpg?raw=true)| ![Screenshot_02](https://github.com/YoungsAppWorkshop/flash-cards/blob/master/screenshot02.jpg?raw=true) |

## How to Start

To start the FlashCards App:

* Clone the project: `git clone https://github.com/YoungsAppWorkshop/flash-cards`
* Change directory: `cd flash-cards`
* Install the app: `npm install`
* Start the FlashCards app: `npm start`

FlashCards is tested on Android(Nexus 5X API 23), iOS(iPhone X 11.2) virtual devices and iPhone 6S(iOS 11.2.5) device.

## Structure of the App
The below is a simplified preview of the app structure:

```bash
├── public
├── src
│   ├── actions                 # Redux Action Creators               
│   ├── components              # Presentational components         
│   │   ├── cards
│   │   ├── common
│   │   ├── decks
│   │   └── RootComponent.js
│   ├── constants                 
│   ├── containers              # Container components                
│   │   ├── cards
│   │   └── decks
│   ├── navigators              # React Navigation Navigators
│   ├── reducers                # Redux Reducers
│   ├── store                   # Redux Store
│   ├── styles
│   └── utils
├── ...
├── README.md                   # This file
└── App.js
```
## Attributions
The FlashCards app was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app), and built with [React Native](https://facebook.github.io/react-native/), [Expo SDK](https://docs.expo.io/versions/v23.0.0/index.html), [React Navigation](https://reactnavigation.org/),  [Redux](https://github.com/reactjs/redux), [Redux Persist](https://github.com/rt2zz/redux-persist) and others. The below is the list of third-party sources which have been modified and used for the app:

* [Codedaily Screencast Lesson code](https://codedaily.io/screencasts/12/Create-a-Flip-Card-Animation-with-React-Native) for flipping card animation effect
* [Fisher–Yates Shuffle algorithm](https://bost.ocks.org/mike/shuffle/) for randomizing quiz order

## License
FlashCards is [MIT licensed](/LICENSE).
