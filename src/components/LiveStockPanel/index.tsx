import React, { useEffect, useState, useMemo } from 'react';

import api from '../../services/api';
import TickerTest from '../Ticker';

import Container from './styles';

const LiveStockPanel: React.FC = () => {
  const [stockIbm, setStockIbm] = useState([]);
  const [stockGoogle, setStockGoogle] = useState([]);
  const [stockTesla, setStockTesla] = useState([]);

  // useEffect(() => {
  //   if (!stockIbm || !stockGoogle || !stockTesla) return;

  //   async function loadData() {
  //     const response = await api.get('/stable/stock/IBM/quote');
  //     const response2 = await api.get('/stable/stock/AAPL/quote');
  //     const response3 = await api.get('/stable/stock/TSLA/quote');

  //     const latestPriceIbm = response.data.latestPrice;

  //     const latestPriceGoogle = response2.data.latestPrice;

  //     const latestPriceTesla = response3.data.latestPrice;

  //     setStockIbm(latestPriceIbm);
  //     setStockGoogle(latestPriceGoogle);
  //     setStockTesla(latestPriceTesla);
  //   }

  //   loadData();
  // }, [stockIbm, stockTesla, stockGoogle]);

  return (
    <Container>
      {/* <p>IBM : {stockIbm}</p>
      <p>AAPL : {stockTesla}</p>
      <p>TSLA : {stockGoogle}</p> */}
      {/* <TickerTest /> */}
    </Container>
  );
};

export default LiveStockPanel;
