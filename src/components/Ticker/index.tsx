import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import Ticker from 'react-ticker';
import api from '../../services/api';

import { Container, CompanyName, Variation, StockPrice } from './styles';

import { ApplicationState } from '../../store';
import { StockData } from '../../store/ducks/stockdata/types';

interface StateProps {
  stockdata: StockData[];
  stockdatac2: StockData[];
}

// interface DispatchProps {

// }

// interface OwnProps {

// }

type Props = StateProps;

const TickerTest = (props: Props) => {
  // const storedData = useSelector(
  //   (state: ApplicationState) => state.stockdata.data,
  // );

  const [company1, setCompany1] = useState('');
  const { stockdata } = props;
  const { stockdatac2 } = props;

  console.log(stockdata);

  return (
    <Ticker>
      {() => (
        <>
          <Container>
            {/* <CompanyName>{stockdata[0]?.symbol}</CompanyName>
            <StockPrice>{stockdata[0]?.latestPrice}</StockPrice>
            <Variation>{stockdata[0]?.change}</Variation> */}
            <CompanyName>Apple</CompanyName>
            <StockPrice>120.5</StockPrice>
            <Variation>+0.89%</Variation>
            <CompanyName>Tesla</CompanyName>
            <StockPrice>135.6</StockPrice>
            <Variation>+2.54%</Variation>
          </Container>
        </>
      )}
    </Ticker>
  );
};

// export default TickerTest;

const mapStateToProps = (state: ApplicationState) => ({
  stockdata: state.stockdata.data,
  stockdatac2: state.stockdata.data,
});

export default connect(mapStateToProps)(TickerTest);
