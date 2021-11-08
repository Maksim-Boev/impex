import styled from 'styled-components';
import { primeColor } from '../../constants/colors';
import { HashLink } from 'react-router-hash-link';

export const Container = styled.header`
  position: fixed;
  z-index: 6;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 119, 139, 0.6);
  width: 100%;
  height: 135px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  not supported by any browser */
  @media (max-width: 425px) {
    background: ${primeColor};
    justify-content: space-between;
    height: 100px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: clamp(400px, 100%, 1900px);
  padding: 0 100px;
  @media (max-width: 425px) {
    padding: 0 0 0 20px;
    width: auto;
  }
`;

export const NavList = styled.nav`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-self: center;
`;

export const Link = styled(HashLink)`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  :hover {
    color: aquamarine;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 140px;
  @media (max-width: 425px) {
    width: 100px;
  }
`;

export const TextLogo = styled.div`
  color: #fff;
  font-size: 26px;
  line-height: 26px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 0;
  @media (max-width: 425px) {
    padding-left: 0;
    font-weight: bold;
  }
  @media (max-width: 320px) {
    font-size: 22px;
  }
`;
