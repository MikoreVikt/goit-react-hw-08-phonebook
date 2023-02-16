import styled from 'styled-components';
import { Button } from 'components/RegisterForm/RegisterForm.styled';

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  color: white;
  opacity: 0.8;
`;

export const P = styled.p`
  margin: 0;
  padding: 0;
`;

export const Span = styled.span`
  opacity: 0.7;
`;

export const Btn = styled(Button)`
  width: 100px;
  margin: 0;
  padding: 5px;
`;
