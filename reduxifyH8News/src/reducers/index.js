import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';
import NewsSearchReducer from './reducer_newsSearch';
// import PeopleReducer from './reducer_people';

const rootReducers = combineReducers({
  news: NewsReducer,
  newsSearch: NewsSearchReducer
  // people: PeopleReducer
})

export default rootReducers
