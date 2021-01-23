import React, { useState, FormEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';

import api from '../../services/api';

import {
  Container,
  Content,
  ImageContent,
  ContentTop,
  TitleContent,
  BottomContent,
  BottomLeft,
  BottomRight,
  Final,
  CompanySymbol,
  CompanyName,
  CompanyPrice,
  Form,
  Test,
} from './styles';
import Title from '../../components/Title';
import TextInfo from '../../components/TextInfo';
import Input from '../../components/Input';

import { ReactComponent as StockImage } from '../../assets/stock-img.svg';

import StockChart from '../../components/StockChart';
import Ticker from '../../components/Ticker';
import { ApplicationState } from '../../store';
import { StockData } from '../../store/ducks/stockdata/types';

interface StockProps {
  symbol: string;
  companyName: string;
  latestPrice: number;
}

interface StateProps {
  stockdata: StockData[];
}

type Props = StateProps;

const Main = (props: Props) => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [stockInfo, setStockInfo] = useState<StockProps>();
  const [stockHistory, setStockHistory] = useState();
  const [loading, setLoading] = useState(false);
  const loadData = useDispatch();
  const storedData = useSelector((state: ApplicationState) => state.stockdata);

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
    }

    initialLoad();
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      const [dataInfo, dataHistory] = await Promise.all([
        api.get(`/stable/stock/${stockSymbol}/quote`),
        api.get(`/stable/stock/${stockSymbol}/chart/1y`),
      ]);

      setStockInfo(dataInfo.data);
      setStockHistory(dataHistory.data.symbol);
      setLoading(true);
    },
    [stockSymbol],
  );

  return (
    <Container>
      <Content>
        <ContentTop>
          <ImageContent>
            <StockImage />
          </ImageContent>
          <Test>
            <Ticker />
            <TitleContent>
              <Title text="historical chart" />
            </TitleContent>
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="type a symbol"
                onChange={e => setStockSymbol(e.target.value)}
                value={stockSymbol}
              />
            </Form>
          </Test>
        </ContentTop>
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

const mapStateToProps = (state: ApplicationState) => ({
  stockdata: state.stockdata.data,
});

export default connect(mapStateToProps)(Main);
