import React from 'react';

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
} from './styles';
import Title from '../../components/Title';
import TextInfo from '../../components/TextInfo';

import { ReactComponent as StockImage } from '../../assets/stock-img.svg';

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContentTop>
          <ImageContent>
            <StockImage />
          </ImageContent>
          <TitleContent>
            <Title text="Historical Chart" />
          </TitleContent>
        </ContentTop>
        <BottomContent>
          <BottomLeft>
            <TextInfo text="Symbol"></TextInfo>
            <TextInfo text="Company"></TextInfo>
            <TextInfo text="Price"></TextInfo>
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
