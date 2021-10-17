import React from 'react';
import { Container, Link, NavList, TextLogo, LogoImg } from './style';
import Phone from '../phone';
import BurgerToggle from '../mobileDropDown';
import { useWindowSize } from '../../hooks/useWindowSize';
import Logo from '../../assets/images/logo.png';
import LanguagesDrop from '../languagesDropDown';

const Header = () => {
  const { width } = useWindowSize();
  return (
    <Container>
      <LogoImg src={Logo} alt={''} />

      <TextLogo>IC IMPEXGROUP</TextLogo>

      {width > 425 && (
        <NavList>
          <Link to={'/'}>О нас</Link>
          <Link to={'/'}>Услуги</Link>
          <Link to={'/'}>Контакты</Link>
          <Phone />
          <LanguagesDrop />
        </NavList>
      )}

      <BurgerToggle />
    </Container>
  );
};

export default Header;
