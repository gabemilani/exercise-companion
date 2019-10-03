import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import firebase from 'react-native-firebase';

import { HomeScreen } from './components/home-screen';
import { TrainingsScreen } from './components/tranings-screen';
import { ExercisesScreen } from './components/exercises-screen';
import { ExerciseScreen } from './components/exercise-screen';
import { TrainingScreen } from './components/training-screen';
import { AboutScreen } from './components/about-screen';
import { MapScreen } from './components/map-screen';

const AppStack = StackNavigator({
  Home: { screen: HomeScreen },
  Trainings: { screen: TrainingsScreen },
  Exercises: { screen: ExercisesScreen },
  About: { screen: AboutScreen },
  Exercise: { screen: ExerciseScreen },
  Training: { screen: TrainingScreen },
  Map: {screen:MapScreen}
});

export default class App extends Component {

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyCVkl8HuhgReizeHgU5FyxOutvwwjrThjk",
      appId: "1:805261879107:android:af5793b0b0c51c38",
      authDomain: "exercisecompanion-disp-moveis.firebaseapp.com",
      databaseURL: "https://exercisecompanion-disp-moveis.firebaseio.com",
      projectId: "exercisecompanion-disp-moveis",
      storageBucket: "exercisecompanion-disp-moveis.appspot.com",
      messagingSenderId: "805261879107"
    };
    firebase.initializeApp(config);
  }

  render() {
    return <AppStack />;
  }
}
