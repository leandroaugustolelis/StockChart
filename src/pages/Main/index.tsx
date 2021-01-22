import React, { useState, FormEvent } from 'react';

import { useSelector } from 'react-redux';
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

interface StockProps {
  symbol: string;
  companyName: string;
  latestPrice: number;
}

interface ReduxProps {
  loadedStockInfo: string;
}

const Main: React.FC = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [stockInfo, setStockInfo] = useState<StockProps>();
  const [stockHistory, setStockHistory] = useState();
  const [loading, setLoading] = useState(false);
  const testRedux = useSelector<ReduxProps>(state => state);

  console.log(testRedux);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const [dataInfo, dataHistory] = await Promise.all([
      api.get(`stable/stock/${stockSymbol}/quote`),
      api.get(`/stable/stock/${stockSymbol}/chart/1y`),
    ]);

    setStockInfo(dataInfo.data);
    setStockHistory(dataHistory.data);
    setLoading(true);
  }

  return (
    <Container>
      <Content>
        <ContentTop>
          <ImageContent>
            <StockImage />
          </ImageContent>
          <Test>
            <TitleContent>
              <Title text="historical chart" />
            </TitleContent>
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="type a symbol"
                onChange={e => setStockSymbol(e.target.value)}
                isFocus={false}
                isError={true}
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

export default Main;
