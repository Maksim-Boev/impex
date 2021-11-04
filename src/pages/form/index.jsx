import React from 'react';
import { Form, Wrapper } from '../main/styles';
import From from '../../components/Form';

const FormPage = () => {
  return (
    <>
      <Form id={'form'}>
        <Wrapper>
          <From />
        </Wrapper>
      </Form>
    </>
  );
};

export default FormPage;
