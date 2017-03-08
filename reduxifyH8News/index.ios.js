import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import rootReducers from './src/reducers'
import App from './src/App'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


const createStoreMiddleware = applyMiddleware()(createStore)

export default class ReduxifyH8News extends Component {
  render() {
    return(
      <Provider store={createStoreMiddleware(rootReducers)}>
          <App />
      </Provider>
    )
  }
}
AppRegistry.registerComponent('reduxifyH8News', () => ReduxifyH8News);
