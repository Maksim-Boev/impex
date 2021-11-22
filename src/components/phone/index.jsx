import React from 'react';
// import DropDown from '../dropDown';
import { Icon, LinkPhone, Wrapper } from './style';

const Phone = () => {
  // const [number, setNumber] = React.useState('+38 (050) 749-37-37');
  // const handleNumber = (number) => {
  //   setNumber(number);
  // };
  return (
    <Wrapper>
      <Icon>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" fill="white" />
          <path
            d="M8 15C11.8733 15 15 11.8733 15 8H1C1 11.8733 4.12667 15 8 15Z"
            fill="#FFE62E"
          />
          <path
            d="M8 1C4.12667 1 1 4.12667 1 8H15C15 4.12667 11.8733 1 8 1Z"
            fill="#428BC1"
          />
        </svg>
      </Icon>

      <LinkPhone href={`tel:+38 (050) 749-37-37`}>
        +38 (050) 749-37-37
      </LinkPhone>
      <LinkPhone href={`tel:+38 (098) 749-37-37`}>
        +38 (098) 749-37-37
      </LinkPhone>

      {/*<DropDown setNumber={handleNumber} />*/}
    </Wrapper>
  );
};

export default Phone;
