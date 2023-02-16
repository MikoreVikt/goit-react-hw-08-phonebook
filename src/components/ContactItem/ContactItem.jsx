import PropTypes from 'prop-types';
import { Li, P, Span, Btn } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsRedux/operations';
import { successMessage } from 'services/notifications';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    successMessage(`${name} was delete from contacts`);
  };

  return (
    <Li>
      <P>
        <Span>Name: </Span> {name}
      </P>
      <P>
        <Span>Number: </Span> {number}
      </P>
      <Btn onClick={handleDelete}>Delete</Btn>
    </Li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
