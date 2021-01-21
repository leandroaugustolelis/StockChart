import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 59px;
  padding-left: 220px;
  padding-right: 220px;
  font-family: 'Montserrat', sans-serif;
`;

export const Content = styled.div`
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding-left: 170px;
`;

export const ImageContent = styled.div`
  margin-top: 116px;
  height: 262px;
  display: flex;
  flex: 1;
`;

export const ContentTop = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleContent = styled.div`
  margin-top: 64px;
  margin-right: 315px;
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around; ;
`;

export const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  color: #f7931a;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin-left: 45px;
`;

export const CompanySymbol = styled.span`
  font-size: 50px;
`;

export const CompanyName = styled.span`
  font-size: 20px;
  margin-top: 5px;
`;

export const CompanyPrice = styled.span`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const Final = styled.div`
  height: 300px;
`;
