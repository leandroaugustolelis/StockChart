import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const InputBlank = styled.div`
  padding: 0 5px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 5px 0 0 5px;
  border: 2px solid #fff;
  border-right: 0;
  height: 30px;

  color: black;

  &:hover {
    color: #f7931a;
    border-color: #f7931a;
  }

  input {
    border: 0 none;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;

    &::placeholder {
      color: #ecf2f8;
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

  &:hover {
    background: #f7931a;
  }
`;
