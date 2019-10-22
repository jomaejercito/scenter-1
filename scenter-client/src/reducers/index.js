import { combineReducers } from 'redux';
import brandsReducer from './brandsReducer';
import perfumesReducer from './perfumesReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  brandsReducer,
  perfumesReducer,
  commentsReducer
})