import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';

import Ticker from 'react-ticker';
import api from '../../services/api';

import { Container, CompanyName, Variation, StockPrice } from './styles';

import { ApplicationState } from '../../store';

const TickerTest = ({ stockdatac1, stockdatac2, stockdatac3 }: any) => {
  const loadDataC1 = useDispatch();
  const loadDataC2 = useDispatch();
  const loadDataC3 = useDispatch();

  useEffect(() => {
    async function initialLoad() {
      const [dataC1, dataC2, dataC3] = await Promise.all([
        api.get(`/stable/stock/IBM/quote`),
        api.get(`/stable/stock/TSLA/quote`),
        api.get(`/stable/stock/NKE/quote`),
      ]);

      loadDataC1({
        type: '@data/LOAD_DATAC1',
        payload: dataC1,
      });
      loadDataC2({
        type: '@data/LOAD_DATAC2',
        payload: dataC2,
      });
      loadDataC3({
        type: '@data/LOAD_DATAC3',
        payload: dataC3,
      });
    }

    initialLoad();
  }, []);

  return (
    <Ticker>
      {() => (
        <Container>
          <CompanyName>{stockdatac1.symbol}</CompanyName>
          <StockPrice>{stockdatac1.latestPrice}</StockPrice>
          <Variation>{stockdatac1.change}</Variation>
          <CompanyName>{stockdatac2.symbol}</CompanyName>
          <StockPrice>{stockdatac2.latestPrice}</StockPrice>
          <Variation>{stockdatac2.change}</Variation>
          <CompanyName>{stockdatac3.symbol}</CompanyName>
          <StockPrice>{stockdatac3.latestPrice}</StockPrice>
          <Variation>{stockdatac3.change}</Variation>
        </Container>
      )}
    </Ticker>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  stockdatac1: state.stockdata.datac1,
  stockdatac2: state.stockdata.datac2,
  stockdatac3: state.stockdata.datac3,
});

export default connect(mapStateToProps)(TickerTest);
