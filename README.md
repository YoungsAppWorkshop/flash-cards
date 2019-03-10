# UdaciCards: A mobile Flashcards App

UdaciCards is a mobile application for Android and iOS which allows users to study collections of flashcards. Users can create different categories of flashcards called 'decks', add flashcards to those decks, then take quizzes on those decks. UdaciCards is built with React Native and Redux. This project is one of assignments for the [Udacity's React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

- 한글 리드미(README Korean) 파일: [README_ko.md](/README_ko.md)

## Demo
Download and install the Expo mobile app for your device:

* Android: [Expo on Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
* iOS: [Expo on the App Store](https://itunes.apple.com/us/app/expo-client/id982107779)

And scan the QR code below:

![alt text](/public/qr.png)

## How to Start

To start the UdaciCards App:

* Clone the project: `git clone https://github.com/YoungsAppWorkshop/flashcards`
* Change directory: `cd flashcards`
* Install the app: `yarn install`
* Start the UdaciCards app: `yarn start`

UdaciCards is tested on Android(Nexus 5X API 23), iOS(iPhone X 11.2) virtual devices and iPhone 6S(iOS 11.2.5) device.

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
The UdaciCards app was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app), and built with [React Native](https://facebook.github.io/react-native/), [Expo SDK](https://docs.expo.io/versions/v23.0.0/index.html), [React Navigation](https://reactnavigation.org/),  [Redux](https://github.com/reactjs/redux), [Redux Persist](https://github.com/rt2zz/redux-persist) and others. The below is the list of third-party sources which have been modified and used for the app:

* [Codedaily Screencast Lesson code](https://codedaily.io/screencasts/12/Create-a-Flip-Card-Animation-with-React-Native) for flipping card animation effect
* [Fisher–Yates Shuffle algorithm](https://bost.ocks.org/mike/shuffle/) for randomizing quiz order

## License
UdaciCards is [MIT licensed](/LICENSE).
