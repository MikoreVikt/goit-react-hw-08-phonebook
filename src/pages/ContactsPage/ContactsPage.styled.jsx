import styled from 'styled-components';

export const ContactsWrapper = styled.section`
  max-width: 60%;
  margin: 0px auto;
  padding: 40px;

  @media creen and (max-width: 768px) {
    max-width: 80%;
  }
`;

export const ContactsTitle = styled.h3`
  font-size: 30px;
  margin: 0px auto 40px;
  color: white;
  opacity: 0.7;
  text-align: center;
`;

export const ContactsListTitle = styled.h3`
  font-size: 20px;
  margin: 40px auto 20px;
  color: white;
  opacity: 0.7;
  text-align: center;
`;
