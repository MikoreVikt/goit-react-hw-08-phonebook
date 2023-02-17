import styled from 'styled-components';
import { Button } from 'components/RegisterForm/RegisterForm.styled';

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  color: white;
  opacity: 0.8;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const P = styled.p`
  width: 40%;
  margin: 0;
  padding: 0 5px;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 20px;
    padding: 2px 5px;
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const Span = styled.span`
  padding-right: 5px;
  opacity: 0.7;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 2px 5px;
    justify-content: flex-start;
  }
`;

export const Btn = styled(Button)`
  width: 100px;
  margin: 0;
  padding: 5px;

  @media screen and (max-width: 768px) {
    width: 80px;
  }

  @media screen and (max-width: 400px) {
    width: 60px;
    padding: 2px;
  }
`;
