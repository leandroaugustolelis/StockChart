//
// eslint-disable-next-line no-shadow
export enum StockDataTypes {
  LOAD_DATA = '@data/LOAD_DATA',
  LOAD_DATA2 = '@data/LOAD_DATA2',
  LOAD_DATA3 = '@data/LOAD_DATA3',
}

export interface StockData {
  symbol: string;
  companyName: string;
  latestPrice: number;
  change: string;
}

export interface StockDataState {
  readonly data: StockData[];
  readonly datac2: StockData[];
  readonly datac3: StockData[];
  readonly loading: boolean;
}
