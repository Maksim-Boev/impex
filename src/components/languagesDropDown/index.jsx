import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import {
  Border,
  DropDownList,
  DropDownListContainer,
  CurrentLang,
  ListItem,
} from './style';
import { CSSTransition } from 'react-transition-group';
import useOutsideClick from '../../hooks/useOutsideClick';
import { useTranslation } from 'react-i18next';

const LanguagesDrop = () => {
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem('lng') || 'uk'
  );
  const ref = useRef(null);
  const handleOutsideClick = () => setIsOpenLang(false);
  useOutsideClick(ref, handleOutsideClick);

  const toggling = () => setIsOpenLang(!isOpenLang);
  const { width } = useWindowSize();
  const { i18n } = useTranslation();
  console.log(currentLang);
  useEffect(() => {
    if (localStorage.getItem('lng') !== currentLang) {
      console.log('Chang Lang');
      localStorage.setItem('lng', currentLang);
    }
    i18n.changeLanguage(currentLang);
  }, [currentLang]);

  return (
    <>
      {width > 425 && (
        <div ref={ref}>
          <CurrentLang onClick={toggling}>
            {currentLang.toUpperCase()}
          </CurrentLang>

          <CSSTransition
            in={isOpenLang}
            timeout={300}
            classNames="alert"
            unmountOnExit
          >
            <DropDownListContainer>
              <DropDownList>
                <Border>
                  <ListItem
                    onClick={() => {
                      toggling();
                      setCurrentLang('uk');
                    }}
                  >
                    Українська
                  </ListItem>
                </Border>

                <Border>
                  <ListItem
                    onClick={() => {
                      toggling();
                      setCurrentLang('ru');
                    }}
                  >
                    Русский
                  </ListItem>
                </Border>
                <Border>
                  <ListItem
                    onClick={() => {
                      toggling();
                      setCurrentLang('en');
                    }}
                  >
                    English
                  </ListItem>
                </Border>
              </DropDownList>
            </DropDownListContainer>
          </CSSTransition>
        </div>
      )}
    </>
  );
};

export default LanguagesDrop;
