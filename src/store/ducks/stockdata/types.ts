//
// eslint-disable-next-line no-shadow
export enum StockDataTypes {
  SET_ERROR = '@error/SET_ERROR',
  LOAD_TICKER = '@data/LOAD_TICKER',
}

export interface StockData {
  symbol: string;
  companyName: string;
  latestPrice: number;
  change: string;
}

export interface StockDataState {
  readonly dataTicker1: StockData[];
  readonly dataTicker2: StockData[];
  readonly dataTicker3: StockData[];
  readonly dataTicker: [];
  readonly inputError: string;
}
