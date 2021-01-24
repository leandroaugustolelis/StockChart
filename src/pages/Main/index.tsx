import React, { useState, FormEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../services/api';

import {
  Container,
  Content,
  ImageContent,
  TitleContent,
  BottomContent,
  BottomLeft,
  BottomRight,
  CompanySymbol,
  CompanyName,
  CompanyPrice,
  MainContent,
  Form,
  Final,
} from './styles';
import Title from '../../components/Title';
import TextInfo from '../../components/TextInfo';
import Input from '../../components/Input';

import { ReactComponent as StockImage } from '../../assets/stock-img.svg';

import StockChart from '../../components/StockChart';
import Ticker from '../../components/Ticker';

interface StockProps {
  symbol: string;
  companyName: string;
  latestPrice: number;
}

const Main: React.FC = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [stockInfo, setStockInfo] = useState<StockProps>();
  const [stockHistory, setStockHistory] = useState<any>();
  const [loading, setLoading] = useState(false);
  const setFilled = useDispatch();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (!stockSymbol) {
        setFilled({ type: '@general/UI_VALIDATE', payload: true });
        return;
      }

      const [dataInfo, dataHistory] = await Promise.all([
        api.get(`/stable/stock/${stockSymbol}/quote`),
        api.get(`/stable/stock/${stockSymbol}/chart/1y`),
      ]);

      setStockInfo(dataInfo.data);
      setStockHistory(dataHistory.data);
      setLoading(true);
      setFilled({ type: '@general/UI_VALIDATE', payload: false });
    },
    [stockSymbol],
  );

  return (
    <Container>
      <Content>
        <TitleContent>
          <Title text="historical chart" />
        </TitleContent>
        <MainContent>
          <ImageContent>
            <StockImage />
          </ImageContent>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="type a symbol"
              onChange={e => setStockSymbol(e.target.value)}
              value={stockSymbol}
            />
          </Form>
        </MainContent>
        <BottomContent>
          <BottomLeft>
            {loading && <TextInfo text="symbol"></TextInfo>}
            {loading && <TextInfo text="company"></TextInfo>}
            {loading && <TextInfo text="price"></TextInfo>}
          </BottomLeft>
          <BottomRight>
            <CompanySymbol>{loading && stockInfo?.symbol}</CompanySymbol>
            <CompanyName>{loading && stockInfo?.companyName}</CompanyName>
            <CompanyPrice>
              {loading && `$ ${stockInfo?.latestPrice}`}
            </CompanyPrice>
          </BottomRight>
        </BottomContent>
        <Final>{loading && <StockChart data={stockHistory} />}</Final>
      </Content>
    </Container>
  );
};

export default Main;
