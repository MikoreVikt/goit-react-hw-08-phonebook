import styled from 'styled-components';
import { Button } from 'components/RegisterForm/RegisterForm.styled';

export const Form = styled.form`
  width: 40%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #fff;
  opacity: 0.7;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  width: 60%;
  padding: 15px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #fff;
  background: transparent;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    outline: none;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
  }
`;

export const Btn = styled(Button)`
  margin-top: 20px;
`;
