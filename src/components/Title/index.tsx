import React from 'react';

import Container from './styles';

type Props = {
  text: string;
};

const Title = ({ text }: Props) => <Container>{text}</Container>;

export default Title;
