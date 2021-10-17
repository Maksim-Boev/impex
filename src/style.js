import styled from 'styled-components';
import bg from './assets/images/shutterstock_564978133.jpg';

export const Video = styled.video`
  height: 100vh;
  object-fit: cover;
  @media (max-width: 425px) {
    padding-top: 70px;
  }
`;

export const About = styled.section`
  height: 100vh;
  top: -5px;
  position: relative;
  background: url(${bg}) center no-repeat;
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

export const Bookmark = styled.div`
  position: absolute;
  left: 10px;
  z-index: 2;
  width: 200px;
  height: 30px;
  background: #fff;
  border-radius: 0 0 5px 5px;
  text-align: center;
`;

export const Wrapper = styled.div`
  z-index: 3;
  color: #fff;
  position: absolute;
`;

export const Img = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Services = styled.section`
  @media (max-width: 425px) {
    padding: 0 10px;
  }
`;
