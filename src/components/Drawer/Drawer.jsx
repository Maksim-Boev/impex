import React, { useEffect, useState } from 'react';
import {
  TicketList,
  Link,
  LinkPhone,
  LangWrapper,
  Lang,
  TelWrapper,
} from './StyledComponents';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Drawer = ({ toggle, onClick }) => {
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem('lng') || 'uk'
  );

  const { i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem('lng') !== currentLang) {
      localStorage.setItem('lng', currentLang);
    }
    i18n.changeLanguage(currentLang);
  }, [currentLang]);
  console.log(currentLang === 'uk');
  return (
    <>
      <TicketList open={toggle}>
        <Link to={'/#about'}>
          <span onClick={onClick}>О нас</span>
        </Link>
        <Link to={'/#services'}>
          <span onClick={onClick}>Услуги</span>
        </Link>
        {/*<Link to={'/'}>*/}
        {/*  <span onClick={onClick}>Контакты</span>*/}
        {/*</Link>*/}
        <TelWrapper>
          <LinkPhone href={`tel:+38 (050) 749-37-37`}>
            +38 (050) 749-37-37
          </LinkPhone>
          <LinkPhone href={`tel:+38 (098) 749-37-37`}>
            +38 (098) 749-37-37
          </LinkPhone>
          <LinkPhone href={`mailto:info@impexgroup.com.ua`}>
            info@impexgroup.com.ua
          </LinkPhone>
        </TelWrapper>

        <LangWrapper>
          <Lang
            active={currentLang === 'uk'}
            onTouchStart={() => {
              setCurrentLang('uk');
              onClick();
            }}
          >
            UK
          </Lang>
          <Lang
            active={currentLang === 'ru'}
            onTouchStart={() => {
              setCurrentLang('ru');
              onClick();
            }}
          >
            RU
          </Lang>
          <Lang
            active={currentLang === 'en'}
            onTouchStart={() => {
              setCurrentLang('en');
              onClick();
            }}
          >
            EN
          </Lang>
        </LangWrapper>
      </TicketList>
    </>
  );
};

export default Drawer;

Drawer.propTypes = {
  toggle: PropTypes.boolean,
  onClick: PropTypes.function,
};
