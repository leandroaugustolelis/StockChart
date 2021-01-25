import React, { useState, FormEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import numeral from 'numeral';

import { AiOutlinePlusSquare } from 'react-icons/ai';
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
  PanelContent,
  LiveButton,
} from './styles';
import Title from '../../components/Title';
import TextInfo from '../../components/TextInfo';
import Input from '../../components/Input';

import { ReactComponent as StockImage } from '../../assets/stock-img.svg';

import StockChart from '../../components/StockChart';
import TickerPanel from '../../components/TickerPanel';
import LiveStockPanel from '../../components/LiveStockPanel';

import { StockData } from '../../store/ducks/stockdata/types';

const Main: React.FC = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [stockInfo, setStockInfo] = useState<StockData>();
  const [stockHistory, setStockHistory] = useState<any>();
  const [loading, setLoading] = useState(false);
  const setInputError = useDispatch();
  const inputError = useSelector(
    (state: ApplicationState) => state.stockdata.inputError,
  );

  const priceFormat = (item: number) => numeral(item).format('$ 0,0.00');

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
        <TickerPanel />
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
          <PanelContent>
            <LiveStockPanel />
          </PanelContent>
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
              {loading && stockInfo && `${priceFormat(stockInfo.latestPrice)}`}
            </CompanyPrice>
            <LiveButton>
              {loading && (
                <button>
                  <AiOutlinePlusSquare />
                </button>
              )}
              {loading && <span>Real Time Panel</span>}
            </LiveButton>
          </BottomRight>
        </BottomContent>
        <Final>{loading && <StockChart data={stockHistory} />}</Final>
      </Content>
    </Container>
  );
};

export default Main;
