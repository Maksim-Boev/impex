import styled from 'styled-components';
import bgAbout from '../../assets/images/shutterstock.webp';
import { Link } from 'react-router-dom';
import bgService from '../../assets/images/doroga.webp';
import bgForm from '../../assets/images/sklad.webp';
import { HashLink } from 'react-router-hash-link';

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

export const WrapperCarousel = styled.div`
  @media (max-width: 425px) {
    margin-top: 70px;
  }
  & :after {
    background: rgba(1, 76, 90, 0.1);
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;
    top: 0;
  }
`;

export const About = styled.section`
  height: 100vh;
  top: -5px;
  position: relative;
  background: url(${bgAbout}) center no-repeat;
  background-size: cover;
  @media (max-width: 425px) {
    padding: 0 10px;
    background-position: 65%;
  }
  :after {
    background: linear-gradient(
      to right,
      rgba(1, 76, 90, 1) 29%,
      rgba(0, 152, 177, 0) 100%
    );
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;
  }
`;

export const Wrapper = styled.div`
  width: 95%;
  z-index: 3;
  color: #fff;
  position: absolute;
`;

export const Text = styled.div`
  width: 40%;
  padding: 50px 0 0 100px;
  font-size: 24px;
  @media (max-width: 425px) {
    width: 80%;
    font-size: 16px;
    padding: 50px 30px 0;
  }
`;

export const WrapperIcon = styled.div`
  width: clamp(400px, 80%, 1300px);
  height: min-content;
  padding: 150px 0 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0;
    width: 85%;
  }
`;

export const LinkUI = styled(Link)`
  width: 350px;
  height: 150px;
  text-decoration: none !important;
  text-align: center;
  color: #fff;
  transition: 0.5s;
  font-size: 20px;
  padding: 20px;
  @media (max-width: 425px) {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }

  :hover {
    transition: 0.5s;
    color: rgba(1, 76, 90, 1);
    background: white;
    & svg {
      transition: 0.5s;
      fill: rgba(1, 76, 90, 1);
    }
  }
  :not(:hover) {
    transition: 0.5s;
  }
`;

export const LinkWrapper = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: white;
    & svg {
      transition: 0.5s;
      fill: rgba(1, 76, 90, 1);
    }
  }
  :not(:hover) {
    transition: 0.5s;
  }
`;

export const ServiceIcon = styled.div`
  width: 100px;
`;

export const Img = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Form = styled.section`
  height: 100vh;
  top: -5px;
  position: relative;
  background: url(${bgForm}) center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  @media (max-width: 425px) {
    padding: 0 10px;
    background-position: 40%;
  }
  :after {
    background: linear-gradient(
      to right,
      rgba(1, 76, 90, 1) 29%,
      rgba(0, 152, 177, 0) 100%
    );
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;
  }
`;

export const Services = styled.section`
  height: 100vh;
  top: -5px;
  position: relative;
  background: url(${bgService}) center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  @media (max-width: 425px) {
    padding: 0 10px;
    background-position: 40%;
  }
  :after {
    background: linear-gradient(
      to right,
      rgba(1, 76, 90, 1) 29%,
      rgba(0, 152, 177, 0) 100%
    );
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;
  }
`;

export const LinkForm = styled(HashLink)`
  color: #fff;
  text-decoration: none;
  background: rgba(19, 128, 149, 1);
  padding: 10px 30px;
  position: absolute;
  top: 400px;
  z-index: 3;
  @media (max-width: 425px) {
    top: 170px;
  }
  :hover {
    background: rgba(1, 76, 90, 1);
  }
`;
