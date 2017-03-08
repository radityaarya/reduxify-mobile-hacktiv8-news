import React from 'react';
import { connect } from 'react-redux'
// import NewsScene from './Components/NewsScene'
// import NewsScene from './src/NewsScene';

// import NEWS actions ..
import { actionSearchNews } from './Actions/NEWS_SEARCH'

// import PEOPLE actions ..


import styles from './styles/index.styles'
import {
  AppRegistry,
  Navigator,
  Text,
  TextInput,
  ScrollView,
  View
} from 'react-native';


class App extends React.Component {
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
              onChange={event => this.props.actionSearchNews(event.nativeEvent.text)}
               />
          </View>

          <ScrollView>
            {
              this.props.news.map( (news, index) =>{
                return (
                  <View key={index} style={styles.newsList} >
                    <Text style={styles.newstitle}>
                      {news.title.toUpperCase()}
                    </Text>
                    <Text style={styles.newsPreview}>
                      {news.prev.slice(0,50)}
                    </Text>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      )
    }

}

const mapStateToProps = (state) => {
  console.log(state.news);
  return {
    news: state.news
  }
}

export default connect(mapStateToProps, null)(App)
