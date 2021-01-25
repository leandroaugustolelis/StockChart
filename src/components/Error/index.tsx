import React from 'react';

import Container from './styles';

interface ErrorProps {
  text: string;
}

const Error: React.FC<ErrorProps> = () => <Container></Container>;

export default Error;
