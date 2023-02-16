import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsRedux/operations';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactFilter } from '../components/ContactFilter/ContactFilter';
import { Wrapper, Title } from '../components/App/App.styled';
import { Loader } from '../components/Loader/Loader';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contactsRedux/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Phone Book</Title>
      <ContactForm />
      {isLoading && !error && <Loader loading={isLoading} />}
      {contacts.length > 0 && (
        <>
          <Title>Contacts</Title>
          <ContactFilter />
          <ContactList />
        </>
      )}
    </Wrapper>
  );
};

export default ContactsPage;
