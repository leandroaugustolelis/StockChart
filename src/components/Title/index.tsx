import React from 'react';

import Container from './styles';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => <Container>{text}</Container>;

export default Title;
