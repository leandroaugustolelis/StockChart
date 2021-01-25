import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';

import Ticker from 'react-ticker';
import api from '../../services/api';

import { Container, CompanyName, Variation, StockPrice } from './styles';

import { ApplicationState } from '../../store';

const TickerTest = ({ dataTickerC1, dataTickerC2, dataTickerC3 }) => {
  const loadDataTicker = useDispatch();

  const test = useSelector(
    (state: ApplicationState) => state.stockdata.dataTickerC1,
  );

  useEffect(() => {
    async function initialLoad() {
      const data = await Promise.all([
        api.get(`/stable/stock/IBM/quote`),
        api.get(`/stable/stock/TSLA/quote`),
        api.get(`/stable/stock/NKE/quote`),
      ]);

      loadDataTicker({
        type: '@data/LOAD_TICKER',
        payload: data,
      });
      console.log(test);
    }

    initialLoad();
  }, []);

  return (
    <Ticker>
      {() => (
        <Container>
          <CompanyName>{dataTickerC1.symbol}</CompanyName>
          <StockPrice>{dataTickerC1.latestPrice}</StockPrice>
          <Variation>{dataTickerC1.change}</Variation>
          <CompanyName>{dataTickerC2.symbol}</CompanyName>
          <StockPrice>{dataTickerC2.latestPrice}</StockPrice>
          <Variation>{dataTickerC2.change}</Variation>
          <CompanyName>{dataTickerC3.symbol}</CompanyName>
          <StockPrice>{dataTickerC3.latestPrice}</StockPrice>
          <Variation>{dataTickerC3.change}</Variation>
        </Container>
      )}
    </Ticker>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  dataTickerC1: state.stockdata.dataTickerC1,
  dataTickerC2: state.stockdata.dataTickerC2,
  dataTickerC3: state.stockdata.dataTickerC3,
});

export default connect(mapStateToProps)(TickerTest);
