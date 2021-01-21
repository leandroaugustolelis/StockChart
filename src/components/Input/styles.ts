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
  border: 2px solid;

  &:hover {
    color: #f7931a;
  }

  input {
    border: 0 none;
    flex: 1;
    font-size: 30px;
    font-weight: bold;

    &::placeholder {
      color: #ecf2f8;
    }
  }

  svg {
    margin-right: 16px;
    margin-left: 4px;
  }
`;

export const InputButton = styled.div`
  height: 54px;
  width: 49px;
  background: #c4c4c4;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #f7931a;
  }
`;
