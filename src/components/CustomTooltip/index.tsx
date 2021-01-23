import React from 'react';
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

const CustomTooltip = ({ active, payload }: Props) => {
  const priceFormat = (item: string) => numeral(item).format('$ 0,0.00');
  const volumeFormat = (item: string) => numeral(item).format('$ 0,0');

  if (active && payload) {
    return (
      <Container>
        <p>{`Price : ${priceFormat(payload[0].payload.close)}`}</p>
        <p>{`Date : ${payload[0].payload.label}`}</p>
        <p>{`Volume : ${volumeFormat(payload[0].payload.volume)}`}</p>
      </Container>
    );
  }

  return null;
};

export default CustomTooltip;
