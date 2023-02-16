import { Form, Label, InputStyled } from './ContactFilter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsRedux/filterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <Form>
      <Label>
        Find contacts by name
        <InputStyled
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
          autoComplete="off"
          type="text"
          name="filter"
          title="Find contacts by name"
        />
      </Label>
    </Form>
  );
};
