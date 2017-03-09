import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionSearchNews } from '../../Actions/NEWS_SEARCH'
import styles from '../../styles/index.styles'
import {
  AppRegistry,
  ListView,
  Navigator,
  Text,
  TextInput,
  ScrollView,
  View
} from 'react-native';

class News extends React.Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([...this.props.news]),
    }
  }

  componentWillReceiveProps(nextProps){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      dataSource: ds.cloneWithRows([...this.props.news]),
    })
  }

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

          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData, index) =>
              <View key={index} style={styles.newsList} >
                <Text style={rowData.newstitle}>
                  {rowData.title.toUpperCase()}
                </Text>
                <Text style={styles.newsPreview}>
                  {rowData.prev.slice(0,50)}
                </Text>
              </View>
            }
          />
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
