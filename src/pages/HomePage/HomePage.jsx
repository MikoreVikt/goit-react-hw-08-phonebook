import { HomeWrapper, HomeTitle, HomeSecondTitle } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeWrapper>
      <HomeTitle>Welcome to Your personal Phone Book</HomeTitle>
      <HomeSecondTitle>
        Our site will allow you to store contacts in a place that no one else
        will have access to. You can store contacts here that are not safe to
        store on your phone or notepad
      </HomeSecondTitle>
    </HomeWrapper>
  );
};

export default HomePage;
