import React, { useState } from 'react';

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

const Main: React.FC = () => {
  const [stockSymbol, setStockSymbol] = useState('');

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
            <Form>
              <Input
                placeholder="type a symbol"
                onChange={e => setStockSymbol(e.target.value)}
                isFocus={false}
                isError={true}
              />
            </Form>
          </Test>
        </ContentTop>
        <BottomContent>
          <BottomLeft>
            <TextInfo text="symbol"></TextInfo>
            <TextInfo text="company"></TextInfo>
            <TextInfo text="price"></TextInfo>
          </BottomLeft>
          <BottomRight>
            <CompanySymbol>IBM</CompanySymbol>
            <CompanyName>International Business Machines</CompanyName>
            <CompanyPrice>$130.37</CompanyPrice>
          </BottomRight>
        </BottomContent>
        <Final />
      </Content>
    </Container>
  );
};

export default Main;
