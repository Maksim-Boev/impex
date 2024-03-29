import styled from 'styled-components';

export const Wrapper = styled.div`
  width: clamp(320px, 50%, 800px);
  margin: 20vh auto 0;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 70px 0;
  z-index: 3;
  @media (max-width: 425px) {
    padding: 30px 0;
  }
  @media (max-width: 320px) {
    padding: 15px 0;
  }
`;

export const FormGroup = styled.div`
  position: relative;
  padding: 10px 0 0;
  margin-top: 5px;
  width: 100%;
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 0.8rem;
  color: #9b9b9b;
`;

export const FormInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #000;
  padding: 7px 0 0;
  background: transparent;
  transition: border-color 0.2s;
  @media (max-width: 425px) {
    padding: 5px 0 0;
    font-size: 1.1rem;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown + ${FormLabel} {
    font-size: 1.3rem;
    cursor: text;
    top: 15px;
    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }

  &:focus + ${FormLabel} {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 0.8rem;
    color: #11998e;
    font-weight: 700;
  }
`;

// export const FieldSet = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
// `;

// export const FormLabel = styled.label`
//   color: #999;
//   font-weight: normal;
//   opacity: 0.75;
//   order: 1;
//   outline: 0;
//   padding-left: 2px;
//   pointer-events: none;
//   text-shadow: none;
//   text-transform: capitalize;
//   transform-origin: left top;
//   transform: scale(1) translate3d(0, 22px, 0);
//   transition: 200ms ease all;
//   //&:focus-within {
//   //  color: #00778b;
//   //  opacity: 1;
//   //  transform: scale(0.8) translate3d(0, 5px, 0);
//   //}
// `;
//
// export const FormInput = styled.input`
//   border-radius: 0;
//   display: flex;
//   font-size: 100%;
//   line-height: 25px;
//   text-shadow: none;
//
//   border: 0;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
//   color: #000;
//   flex: 1 1 auto;
//   order: 2;
//
//   &:focus {
//     outline: 0;
//   }
//
//   &:not(:focus) {
//     //color: transparent;
//   }
//
//   &:focus + ${FormLabel} {
//     color: #00778b;
//     opacity: 1;
//     transform: scale(0.8) translate3d(0, 5px, 0);
//   }
// `;

export const DropZone = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

export const FileDropZone = styled.div`
  display: flex;
`;

export const ButtonDel = styled.button``;

export const Button = styled.button`
  color: #fff;
  border: none;
  background: #00778b;
  border-radius: 5px;
  padding: 10px 0;
  margin-top: 20px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(105, 105, 105, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const ResponceCard = styled.div`
  width: clamp(320px, 40%, 550px);
  height: 140px;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center !important;
  p {
    color: black !important;
    text-align: center !important;
  }
  span {
    font-size: 21px;
    color: black !important;
    font-weight: 700;
    @media (max-width: 425px) {
      font-weight: 700;
      color: black !important;
      font-size: 18px;
    }
  }
`;

export const Close = styled.div`
  position: absolute;
  right: 4px;
  top: 8px;
  width: 32px;
  height: 24px;
  opacity: 0.3;
  :hover {
    opacity: 1;
  }
  :before,
  :after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #333;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

export const Loader = styled.div`
  border: 3px solid hsla(185, 100%, 100%, 1);
  border-top-color: #00778b;
  border-radius: 50%;
  width: 5em;
  height: 5em;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
`;

export const Submit = styled.input`
  color: #fff;
  border: none;
  background: #00778b;
  border-radius: 5px;
  padding: 10px 0;
  margin-top: 20px;
  cursor: pointer;
`;

export const FormTitle = styled.h2`
  color: #000;
  @media (max-width: 425px) {
    margin: 0;
  }
`;

export const WrappTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckIcon = styled.img`
  max-width: 30px;
  padding-right: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
export const Input = styled.input``;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 25px;
//   position: relative;
// `;
//
// export const Label = styled.label`
//   color: #999;
//   font-weight: normal;
//   opacity: 0.75;
//   order: 1;
//   /*outline: 0;*/
//   padding-left: 2px;
//   pointer-events: none;
//   text-shadow: none;
//   text-transform: capitalize;
//   transform-origin: left top;
//   transform: scale(1) translate3d(0, 22px, 0);
//   transition: 200ms ease all;
// `;
//
// export const Input = styled.input`
//   border-radius: 0;
//   display: flex;
//   font-size: 100%;
//   line-height: 25px;
//   text-shadow: none;
//
//   border: 0;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
//   color: #000;
//   flex: 1 1 auto;
//   order: 2;
//
//   &:focus {
//     outline: 0;
//   }
//
//   &:not(:focus) {
//     color: transparent;
//   }
//
//   &:focus + ${Label} {
//     color: #3949ab;
//     opacity: 1;
//     transform: scale(0.8) translate3d(0, 5px, 0);
//   }
// `;
