import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';

import Ticker from 'react-ticker';
import api from '../../services/api';

import { Container, CompanyName, Variation, StockPrice } from './styles';

import { ApplicationState } from '../../store';
import { StockData } from '../../store/ducks/stockdata/types';

interface TickerProps {
  dataTicker1: any | StockData;
  dataTicker2: any | StockData;
  dataTicker3: any | StockData;
}

const TickerPanel = ({
  dataTicker1,
  dataTicker2,
  dataTicker3,
}: TickerProps) => {
  const loadDataTicker = useDispatch();

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
    }

    initialLoad();
  }, []);
  return (
    <Ticker>
      {() => (
        <Container>
          <CompanyName>{dataTicker1.symbol}</CompanyName>
          <StockPrice>{dataTicker1.latestPrice}</StockPrice>
          <Variation>{dataTicker1.change}</Variation>
          <CompanyName>{dataTicker2.symbol}</CompanyName>
          <StockPrice>{dataTicker2.latestPrice}</StockPrice>
          <Variation>{dataTicker2.change}</Variation>
          <CompanyName>{dataTicker3.symbol}</CompanyName>
          <StockPrice>{dataTicker3.latestPrice}</StockPrice>
          <Variation>{dataTicker3.change}</Variation>
        </Container>
      )}
    </Ticker>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  dataTicker1: state.stockdata.dataTicker1,
  dataTicker2: state.stockdata.dataTicker2,
  dataTicker3: state.stockdata.dataTicker3,
});

export default connect(mapStateToProps)(TickerPanel);
