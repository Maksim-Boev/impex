import styled from 'styled-components';
import bgForm from '../assets/images/sklad.jpg';

export const PageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 140px 50px 50px;
  & p {
    text-align: justify;
  }
  & span {
    font-weight: bold;
  }
  @media (max-width: 424px) {
    padding: 110px 30px 0;
  }
`;

export const Img = styled.img`
  max-width: 100%;
`;
export const WrapperPageNotFound = styled.div`
  text-align: center;
  font-weight: bold;
  padding-top: 50vh;
`;

export const WrapperFormFromPages = styled.section`
  height: 900px;
  margin-top: 50px;
  position: relative;
  background: url(${bgForm}) center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  @media (max-width: 425px) {
    height: 100vh;
    padding: 0 10px;
    background-position: 40%;
    margin: 50px -30px 0;
  }
`;
