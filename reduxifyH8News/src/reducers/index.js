import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';
// import PeopleReducer from './reducer_people';

const rootReducers = combineReducers({
  news: NewsReducer,
  // people: PeopleReducer
})

export default rootReducers
