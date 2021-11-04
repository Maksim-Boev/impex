import styled from 'styled-components';

export const Wrapper = styled.div`
  width: clamp(320px, 50%, 800px);
  margin: 20vh auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 20px 0;
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
`;

export const Submit = styled.input`
  color: #fff;
  border: none;
  background: #00778b;
  border-radius: 5px;
  padding: 10px 0;
  margin-top: 20px;
`;

export const FormTitle = styled.h2`
  color: #000;
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
