import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid;
  border-color: #f7931a;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  div {
    font-size: 12px;
    font-weight: bold;
  }

  li {
    list-style: none;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Container;
