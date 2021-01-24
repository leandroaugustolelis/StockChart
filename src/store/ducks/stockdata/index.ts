import { Reducer } from 'redux';
import { StockDataState, StockDataTypes } from './types';

const INITIAL_STATE: StockDataState = {
  datac1: [],
  datac2: [],
  datac3: [],
  isFilled: false,
};

const reducer: Reducer<StockDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StockDataTypes.LOAD_DATAC1:
      return {
        ...state,
        datac1: action.payload.data,
      };
    case StockDataTypes.LOAD_DATAC2:
      return {
        ...state,
        datac2: action.payload.data,
      };
    case StockDataTypes.LOAD_DATAC3:
      return {
        ...state,
        datac3: action.payload.data,
      };
    case StockDataTypes.UX_VALIDATION:
      return {
        ...state,
        isFilled: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
