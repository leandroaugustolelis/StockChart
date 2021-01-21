import React from 'react';

import Container from './styles';

interface TextInfoProps {
  text: string;
}

const TextInfo: React.FC<TextInfoProps> = ({ text }) => (
  <Container>{text}</Container>
);

export default TextInfo;
