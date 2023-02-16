import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

export const UserName = styled.p`
  color: white;
  font-weight: 500;
  font-size: 18px;
  opacity: 0.8;
`;

export const UserSpan = styled.span`
  font-weight: 400;
  opacity: 0.7;
`;

export const UserButton = styled.button`
  padding: 8px 20px;
  color: white;
  opacity: 0.8;
  font-weight: 500;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;

  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 0.6);
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
