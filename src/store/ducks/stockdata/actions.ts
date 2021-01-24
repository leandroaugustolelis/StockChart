import { action } from 'typesafe-actions';
import { StockData, StockDataTypes } from './types';

export const setFilled = (isFilled: boolean) =>
  action(StockDataTypes.UX_VALIDATION, isFilled);

export const loadDataC1 = (datac1: StockData[]) =>
  action(StockDataTypes.LOAD_DATAC1, datac1);

export const loadDataC2 = (datac2: StockData[]) =>
  action(StockDataTypes.LOAD_DATAC2, datac2);

export const loadDataC3 = (datac3: StockData[]) =>
  action(StockDataTypes.LOAD_DATAC3, datac3);
