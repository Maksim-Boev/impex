import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const TicketList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 0 0;
  margin: 0;
  top: 95px;
  ${({ open }) => {
    return open ? 'right: 0' : 'right: -100%';
  }};
  transition: right 0.22s ease-in;
  position: fixed;
  background: rgba(0, 119, 139);
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const Link = styled(HashLink)`
  color: #fff;
  padding: 10px 0;
  font-size: 28px;
  text-decoration: none;
`;

export const LinkPhone = styled.a`
  text-decoration: none;
  color: aliceblue;
  padding: 10px 0;
  font-size: 22px;
`;

export const TelWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LangWrapper = styled.a`
  display: flex;
  color: aliceblue;
  padding: 40px 0 0 0;
  font-size: 24px;
  bottom: 150px;
  position: absolute;
`;

export const Lang = styled.div`
  padding: 0 20px;
  color: #6dbfd1;
`;
