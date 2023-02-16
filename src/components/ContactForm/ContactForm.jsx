import { Form, Label, Input, Btn } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contactsRedux/selectors';
import { addContact } from 'redux/contactsRedux/operations';
import { errorMessage, successMessage } from 'services/notifications';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const checkAvailability = name =>
    contacts.find(contact => contact.name === name);

  const handleSubmit = e => {
    e.preventDefault();
    if (checkAvailability(name)) {
      return errorMessage(`${name} is already in contacts`);
    }
    if (name.length > 15 || name.length < 3) {
      return errorMessage(`Please enter a valid name!`);
    }
    if (number.length > 13 || number.length < 6) {
      return errorMessage(`Please enter a valid number!`);
    }

    dispatch(addContact({ name, number }));
    successMessage(`${name} is added to contacts`);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input
          onChange={e => setName(e.currentTarget.value)}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={e => setNumber(e.currentTarget.value)}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Btn>Add contact</Btn>
    </Form>
  );
};
