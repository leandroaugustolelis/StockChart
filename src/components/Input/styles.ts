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

  color: black;

  &:hover {
    color: #f7931a;
    border-color: #f7931a;
  }

  input {
    border: 0 none;
    font-size: 20px;
    font-weight: bold;
    width: 200px;

    &::placeholder {
      color: #ecf2f8;
    }
  }

  svg {
    margin-right: 16px;
    margin-left: 4px;
  }
`;

export const InputButton = styled.button`
  height: 54px;
  width: 49px;
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
