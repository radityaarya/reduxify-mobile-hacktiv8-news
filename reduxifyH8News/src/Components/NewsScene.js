import React, { Component } from 'react';

import{
  Text,
  TextInput,
  View,
} from 'react-native';

export default class NewsScene extends React {
  // constructor(){
  //   super()
  //
  // }

  render(){
    return(
      <View style={styles.news}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Home
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="search news here .. "
            onChange={this.search.bind(this)}
            value={this.state.search} />
        </View>
      </View>
    )
  }
}
