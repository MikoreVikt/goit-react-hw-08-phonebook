import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0px;
  padding: 0px;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  color: white;
  opacity: 0.8;
  font-weight: 500;
  font-size: 18px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out 0s;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 0.6);
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
  }

  &.active {
    color: rgba(0, 0, 0, 0.6);
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
