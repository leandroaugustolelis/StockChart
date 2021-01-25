import React, { InputHTMLAttributes } from 'react';
import { useSelector } from 'react-redux';

import { AiOutlineStock } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { ApplicationState } from '../../store';
import { Container, InputBlank, InputButton } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  const isFilled = useSelector(
    (state: ApplicationState) => state.stockdata.inputError,
  );

  return (
    <Container>
      <InputBlank isFilled={!!isFilled}>
        <AiOutlineStock size={20} />
        <input {...rest} />
      </InputBlank>
      <InputButton type="submit">
        <IoIosArrowForward size={20} />
      </InputButton>
    </Container>
  );
};

export default Input;
