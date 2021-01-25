import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Container from './styles';

import { StockData } from '../../store/ducks/stockdata/types';

const LiveStockPanel: React.FC = () => {
  const [company1, setCompany1] = useState<StockData>();
  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/stable/stock/IBM/quote`);

      setCompany1(response.data);
    }

    loadData();
  }, [company1]);
  return (
    <Container>
      <div>
        <strong>Real Time Stocks</strong>
      </div>
      <li>
        <ul>
          <li>
            <div>
              <span>{company1?.symbol}</span>
              <strong>{company1?.latestPrice}</strong>
            </div>
          </li>
        </ul>
      </li>
    </Container>
  );
};

export default LiveStockPanel;
