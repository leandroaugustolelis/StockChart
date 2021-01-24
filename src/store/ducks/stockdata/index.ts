import { Reducer } from 'redux';
import { StockDataState, StockDataTypes } from './types';

const INITIAL_STATE: StockDataState = {
  data: [],
  datac2: [],
  datac3: [],
  loading: false,
};

const reducer: Reducer<StockDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StockDataTypes.LOAD_DATA:
      return {
        ...state,
        loading: true,
        data: action.payload.data,
      };
    case StockDataTypes.LOAD_DATA2:
      return {
        ...state,
        loading: true,
        datac2: action.payload.data,
      };
    case StockDataTypes.LOAD_DATA3:
      return {
        ...state,
        loading: true,
        datac3: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
