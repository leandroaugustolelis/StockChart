import { action } from 'typesafe-actions';
import { StockData, StockDataState, StockDataTypes } from './types';

export const loadData = (data: StockData[]) =>
  action(StockDataTypes.LOAD_DATA, data);
