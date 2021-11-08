import React from 'react';
import { Container, Link, NavList, TextLogo, LogoImg, Wrapper } from './style';
import Phone from '../phone';
import BurgerToggle from '../mobileDropDown';
import { useWindowSize } from '../../hooks/useWindowSize';
import Logo from '../../assets/images/logo.png';
import LanguagesDrop from '../languagesDropDown';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { width } = useWindowSize();
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Link to={'/'}>
          <LogoImg src={Logo} alt={''} />

          {width > 425 && <TextLogo>IMPEXGROUP</TextLogo>}
        </Link>

        {width > 425 && (
          <NavList>
            <Link smooth to={'/#about'}>
              {t('main.aboutNav')}
            </Link>
            <Link smooth to={'/#services'}>
              {t('main.serviceNav')}
            </Link>
            {/*<Link smooth to={'/#contacts'}>*/}
            {/*  {t('main.contact')}*/}
            {/*</Link>*/}
            <Phone />
            <LanguagesDrop />
          </NavList>
        )}
      </Wrapper>
      {width < 425 && <TextLogo>IMPEXGROUP</TextLogo>}
      <BurgerToggle />
    </Container>
  );
};

export default Header;
