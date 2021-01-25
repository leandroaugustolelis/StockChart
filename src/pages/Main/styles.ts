import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  padding-left: 220px;
  padding-right: 220px;
`;

export const Content = styled.div`
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const TitleContent = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

export const ImageContent = styled.div`
  display: flex;
  width: 100px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 70px;
`;

export const Form = styled.form`
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 50px;
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 70px;
  height: 20px;
`;

export const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  color: #f7931a;
  font-weight: bold;
  margin-left: 45px;
  width: 420px;
  height: 140px;
`;

export const CompanySymbol = styled.span`
  margin-top: 5px;
  font-size: 26px;
  margin-bottom: 15px;
`;

export const CompanyName = styled.span`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const CompanyPrice = styled.span`
  font-size: 24px;
`;

export const Final = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 110px;
  margin-top: 40px;
  height: 150px;
`;

export const Error = styled.span`
  font-size: 12px;
  color: #f91d1d;
  margin-top: 5px;
`;
