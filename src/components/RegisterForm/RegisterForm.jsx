import { useDispatch } from 'react-redux';
import { register } from 'redux/authRedux/operations';
import {
  Container,
  Form,
  FormTitle,
  Input,
  Button,
  DropFirst,
  DropSecond,
  DropThird,
  DropForth,
  DropFifth,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormTitle>Welcome</FormTitle>
        <Input type="text" name="name" placeholder="Username" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </Form>
      <div>
        <DropFirst></DropFirst>
        <DropSecond></DropSecond>
        <DropThird></DropThird>
        <DropForth></DropForth>
        <DropFifth></DropFifth>
      </div>
    </Container>
  );
};
