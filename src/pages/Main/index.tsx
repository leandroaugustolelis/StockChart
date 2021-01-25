import React, { useState, FormEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';

import { ApplicationState } from '../../store';

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
  Error,
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
  const setInputError = useDispatch();
  const inputError = useSelector(
    (state: ApplicationState) => state.stockdata.inputError,
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (!stockSymbol) {
        setInputError({
          type: '@error/SET_ERROR',
          payload: 'Please choose a stock',
        });
        return;
      }

      try {
        const [dataInfo, dataHistory] = await Promise.all([
          api.get(`/stable/stock/${stockSymbol}/quote`),
          api.get(`/stable/stock/${stockSymbol}/chart/1y`),
        ]);

        setStockInfo(dataInfo.data);
        setStockHistory(dataHistory.data);
        setLoading(true);
      } catch (err) {
        setInputError({
          type: '@error/SET_ERROR',
          payload: 'Stock does not exist',
        });
      }
    },
    [stockSymbol],
  );

  return (
    <Container>
      <Content>
        <Ticker />
        <TitleContent>
          <Title text="historical chart" />
        </TitleContent>
        <MainContent>
          <ImageContent>
            <StockImage />
          </ImageContent>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="stock symbol"
              onChange={e => setStockSymbol(e.target.value)}
              value={stockSymbol}
            />
            {inputError && <Error>{inputError}</Error>}
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
