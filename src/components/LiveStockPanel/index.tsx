import React, { useEffect, useState } from 'react';

import Container from './styles';

const LiveStockPanel: React.FC = () => {
  const [stockIbm, setStockIbm] = useState([]);

  useEffect(() => {
    // async function loadData() {}
    // loadData();
  }, []);

  return <Container></Container>;
};

export default LiveStockPanel;
