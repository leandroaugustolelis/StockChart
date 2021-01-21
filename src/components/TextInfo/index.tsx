import React from 'react';

import Container from './styles';

type Props = {
  text: string;
};

const TextInfo = ({ text }: Props) => <Container>{text}</Container>;

export default TextInfo;
