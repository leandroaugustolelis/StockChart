//
// eslint-disable-next-line no-shadow
export enum StockDataTypes {
  LOAD_DATA = '@data/LOAD_DATA',
}

export interface StockData {
  symbol: string;
  companyName: string;
  latestPrice: number;
  change: string;
}

export interface StockDataState {
  readonly data: StockData[];
  readonly loading: boolean;
}
