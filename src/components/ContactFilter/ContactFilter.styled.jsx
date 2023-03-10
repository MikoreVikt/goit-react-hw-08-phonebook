import styled from 'styled-components';
import { Input } from 'components/RegisterForm/RegisterForm.styled';

export const Form = styled.form`
  width: 40%;
  height: 80px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.3);
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
  color: #fff;
  opacity: 0.7;
  gap: 5px;

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const InputStyled = styled(Input)`
  position: relative;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 400px) {
    width: 80%;
  }
`;
