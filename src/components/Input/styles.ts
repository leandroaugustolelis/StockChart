import styled, { css } from 'styled-components';

interface InputProps {
  isFilled: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const InputBlank = styled.div<InputProps>`
  padding: 0 5px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 5px 0 0 5px;
  border: 2px solid #fff;
  border-right: 0;
  height: 30px;
  color: #000;

  &:hover {
    color: #f7931a;
  }

  ${props =>
    props.isFilled &&
    css`
      color: #f91d1d;
      border-color: #f91d1d;
    `}

  input {
    border: 0 none;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    width: 100px;

    &::placeholder {
      color: #e5e5e5;

      ${props =>
        props.isFilled &&
        css`
          color: #f9dddd;
          transition: 2s;
        `}
    }
  }

  svg {
    margin-left: 1px;
    margin-right: 10px;
  }
`;

export const InputButton = styled.button`
  height: 30px;
  width: 40px;
  background: #c4c4c4;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;

  svg {
    height: 15px;
  }

  &:hover {
    transition: 0.3s;
    background: #f7931a;
  }
`;
