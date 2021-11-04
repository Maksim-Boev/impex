import React from 'react';
import { Container, Link, NavList, TextLogo, LogoImg, Wrapper } from './style';
import Phone from '../phone';
import BurgerToggle from '../mobileDropDown';
import { useWindowSize } from '../../hooks/useWindowSize';
import Logo from '../../assets/images/logo.png';
import LanguagesDrop from '../languagesDropDown';

const Header = () => {
  const { width } = useWindowSize();
  return (
    <Container>
      <Wrapper>
        <Link to={'/'}>
          <LogoImg src={Logo} alt={''} />

          <TextLogo>IC IMPEXGROUP</TextLogo>
        </Link>

        {width > 425 && (
          <NavList>
            <Link smooth to={'/#about'}>
              О нас
            </Link>
            <Link smooth to={'/#services'}>
              Услуги
            </Link>
            <Link to={'/'}>Контакты</Link>
            <Phone />
            <LanguagesDrop />
          </NavList>
        )}
      </Wrapper>

      <BurgerToggle />
    </Container>
  );
};

export default Header;
