import React from 'react';

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
  label,
  customProps,
  customProps1,
  customProps2,
}: Props) => {
  if (active && payload) {
    return (
      <Container>
        <p>{`${customProps} : $ ${payload[0].payload.close}`}</p>
        <p>{`${customProps1} : ${payload[0].payload.date}`}</p>
        <p>{`${customProps2} : $ ${payload[0].payload.volume}`}</p>
      </Container>
    );
  }

  return null;
};

export default CustomTooltip;
