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

  const { i18n, t } = useTranslation();

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
          <span onClick={onClick}>{t('main.aboutNav')}</span>
        </Link>
        <Link to={'/#services'}>
          <span onClick={onClick}>{t('main.serviceNav')}</span>
        </Link>
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
            onClick={() => {
              setCurrentLang('uk');
              onClick();
            }}
          >
            UK
          </Lang>
          <Lang
            active={currentLang === 'ru'}
            onClick={() => {
              setCurrentLang('ru');
              onClick();
            }}
          >
            RU
          </Lang>
          <Lang
            active={currentLang === 'en'}
            onClick={() => {
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
