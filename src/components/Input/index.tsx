import React, { InputHTMLAttributes } from 'react';

import { AiOutlineStock } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { Container, InputBlank, InputButton } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => (
  <Container>
    <InputBlank>
      <AiOutlineStock size={40} />
      <input {...rest} />
    </InputBlank>
    <InputButton type="submit">
      <IoIosArrowForward size={20} />
    </InputButton>
  </Container>
);

export default Input;
