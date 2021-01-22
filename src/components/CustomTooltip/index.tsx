import React from 'react';
// import moment from 'moment';
import numeral from 'numeral';

import Container from './styles';

type Props = {
  active?: boolean;
  payload?: Array<any>;
  label?: string;
  customProps?: string;
  customProps1?: string;
  customProps2?: string;
};

const CustomTooltip = ({
  active,
  payload,
  customProps,
  customProps1,
  customProps2,
}: Props) => {
  const currencyFormat = (item: string) => numeral(item).format('$0,0');
  // const dateFormat = (item: Date) => moment(item).format('MMM YY');

  if (active && payload) {
    return (
      <Container>
        <p>{`${customProps} : ${currencyFormat(payload[0].payload.close)}`}</p>
        <p>{`${customProps1} : ${payload[0].payload.date}`}</p>
        <p>{`${customProps2} : ${currencyFormat(
          payload[0].payload.volume,
        )}`}</p>
      </Container>
    );
  }

  return null;
};

export default CustomTooltip;
