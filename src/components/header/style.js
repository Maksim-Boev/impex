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
  height: 70px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  not supported by any browser */
  @media (max-width: 425px) {
    background: ${primeColor};
    justify-content: space-between;
  }
`;

export const NavList = styled.nav`
  width: 500px;
  display: flex;
  justify-content: space-around;
`;

export const Link = styled(HashLink)`
  color: #fff;
  text-decoration: none;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 70px;
  padding-left: 15px;
`;

export const TextLogo = styled.div`
  color: #fff;
  font-size: 26px;
  line-height: 26px;
  padding-left: 20px;
  padding-right: 0;
  @media (max-width: 425px) {
    padding-left: 0;
  }
`;
