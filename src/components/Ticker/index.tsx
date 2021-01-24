import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';

import Ticker from 'react-ticker';
import api from '../../services/api';

import { Container, CompanyName, Variation, StockPrice } from './styles';

import { ApplicationState } from '../../store';

const TickerTest = ({ stockdata, stockdatac2, stockdatac3 }: any) => {
  const loadData = useDispatch();
  const loadData2 = useDispatch();
  const loadData3 = useDispatch();

  useEffect(() => {
    async function initialLoad() {
      const [dataC1, dataC2, dataC3] = await Promise.all([
        api.get(`/stable/stock/IBM/quote`),
        api.get(`/stable/stock/TSLA/quote`),
        api.get(`/stable/stock/NKE/quote`),
      ]);

      loadData({
        type: '@data/LOAD_DATA',
        payload: dataC1,
      });
      loadData2({
        type: '@data/LOAD_DATA2',
        payload: dataC2,
      });
      loadData3({
        type: '@data/LOAD_DATA3',
        payload: dataC3,
      });
    }

    initialLoad();
  }, []);

  return (
    <Ticker>
      {() => (
        <Container>
          <CompanyName>{stockdata.symbol}</CompanyName>
          <StockPrice>{stockdata.latestPrice}</StockPrice>
          <Variation>{stockdata.change}</Variation>
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
  stockdata: state.stockdata.data,
  stockdatac2: state.stockdata.datac2,
  stockdatac3: state.stockdata.datac3,
});

export default connect(mapStateToProps)(TickerTest);
