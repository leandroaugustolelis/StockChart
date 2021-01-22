import { combineReducers } from 'redux';
import data from './data/reducer';
import { StoreState } from '../createStore';

export default combineReducers<StoreState>({
  data,
});
