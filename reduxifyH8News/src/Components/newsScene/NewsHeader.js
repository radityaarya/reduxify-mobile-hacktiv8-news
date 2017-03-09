import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionSearchNews } from '../../Actions/NEWS_SEARCH'
import styles from '../../styles/index.styles'
import {
  AppRegistry,
  Navigator,
  Text,
  TextInput,
  ScrollView,
  View
} from 'react-native';

class News extends React.Component {

  // buat kalo butuh aja
  handleChange(e){
    this.props.actionSearchNews(e.nativeEvent.text)
  }

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
              onChange={this.handleChange.bind(this)}
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
  return {
    news: state.news
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({actionSearchNews}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(News)
