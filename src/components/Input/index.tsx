import React, { InputHTMLAttributes } from 'react';

import { Container, InputBlank, InputButton } from './styles';

import { ReactComponent as ChevronRight } from '../../assets/chevron-right.svg';
import { ReactComponent as Activity } from '../../assets/activity.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  isFocus: boolean;
}

const Input: React.FC<InputProps> = ({ ...rest }) => (
  <Container>
    <InputBlank>
      <Activity />
      <input {...rest} />
    </InputBlank>
    <InputButton>
      <ChevronRight />
    </InputButton>
  </Container>
);

export default Input;
