import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const Icon = styled.div`
  width: 16px;
  height: 16px;
  @media (max-width: 1024px) {
    margin-bottom: 10px;
  }
`;
export const LinkPhone = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 0 10px;
  font-size: 18px;
  :hover {
    color: aquamarine;
  }
`;

export const Container = styled.div``;
