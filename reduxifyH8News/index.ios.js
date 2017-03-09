import React, { Component } from 'react';
import { Provider} from 'react-redux';
import App from './src/App'
import store from './src/Store'

import {
  AppRegistry,
} from 'react-native';


export default class ReduxifyH8News extends Component {
  render() {
    return(
      <Provider store={store}>
          <App />
      </Provider>
    )
  }
}
AppRegistry.registerComponent('reduxifyH8News', () => ReduxifyH8News);
