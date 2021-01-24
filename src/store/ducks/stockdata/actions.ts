import { action } from 'typesafe-actions';
import { StockData, StockDataTypes } from './types';

export const loadData = (data: StockData[]) =>
  action(StockDataTypes.LOAD_DATA, data);

export const loadData2 = (datac2: StockData[]) =>
  action(StockDataTypes.LOAD_DATA2, datac2);

export const loadData3 = (datac3: StockData[]) =>
  action(StockDataTypes.LOAD_DATA3, datac3);
