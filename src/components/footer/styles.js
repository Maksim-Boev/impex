import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  // height: 200px;
  background: dimgrey;
`;

export const Container = styled.div`
  width: clamp(320px, 100%, 1920px);
  margin: 0 auto;
`;
export const LinkPhone = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  :hover {
    color: aquamarine;
  }
`;

export const Contact = styled.div`
  font-size: 16px;
  color: #fff;
`;

export const Address = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #fff;
  :hover {
    color: aquamarine;
  }
`;

export const Facebook = styled.a`
  display: flex;
  width: 30px;
  padding-left: 20px;
  :hover {
    & path {
      fill: aquamarine;
    }
  }
`;

export const Instagram = styled.a`
  display: flex;
  width: 30px;
  padding-left: 20px;
  :hover {
    & path {
      fill: aquamarine;
    }
  }
`;

export const WrappSocial = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const WrappContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding-top: 20px;
  padding-left: 100px;
  @media (max-width: 425px) {
    width: 80%;
    padding-left: 30px;
  }
`;
export const Associations = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 10px 0;
`;

export const AssociationsLogo = styled.img`
  max-width: 300px;

  @media (min-width: 425px) {
    max-width: 400px;
  }
`;
