import styled from 'styled-components';

export const Video = styled.video`
  height: 100vh;
  object-fit: cover;
  @media (max-width: 425px) {
    padding-top: 70px;
  }
`;

export const Wrapper = styled.div`
  z-index: 3;
  color: #fff;
  position: absolute;
`;

export const Text = styled.div`
  width: 40%;
  padding: 50px 0 0 100px;
  font-size: 24px;
`;

export const ServiceIcon = styled.div`
  width: 100px;
`;
