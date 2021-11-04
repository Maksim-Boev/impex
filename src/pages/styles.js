import styled from 'styled-components';
import bgForm from '../assets/images/sklad.webp';

export const PageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 10vh 50px 50px;
  & span {
    font-weight: bold;
  }
  @media (max-width: 424px) {
    padding: 10vh 30px 50px;
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
  height: 100vh;
  margin-top: 50px;
  top: -5px;
  position: relative;
  background: url(${bgForm}) center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  @media (max-width: 425px) {
    padding: 0 10px;
    background-position: 40%;
    margin: 50px -30px;
  }
`;
