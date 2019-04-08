
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// import { createAppContainer, createStackNavigator } from 'react-navigation';
import rootReducer from './app/redux/reducers/index';
import Counter1 from './app/components/Counter1';
import rootSaga from './app/redux/saga/counterSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class AppCont extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
      <Counter1/>
    );
  }
}

class App extends Component {
  render() {
    return(
      <Provider store={store}>
				<AppCont />
			</Provider>
    )
  }
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
