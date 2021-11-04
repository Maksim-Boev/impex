import styled from 'styled-components';

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
