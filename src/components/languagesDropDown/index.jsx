import React, { useRef, useState } from 'react';
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

const LanguagesDrop = () => {
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [currentLang, setCurrentLang] = useState('UK');
  const ref = useRef(null);
  const handleOutsideClick = () => setIsOpenLang(false);
  useOutsideClick(ref, handleOutsideClick);

  const toggling = () => setIsOpenLang(!isOpenLang);
  const { width } = useWindowSize();

  return (
    <>
      {width > 425 && (
        <div ref={ref}>
          <CurrentLang onClick={toggling}>{currentLang}</CurrentLang>

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
                      setCurrentLang('UK');
                    }}
                  >
                    Українська
                  </ListItem>
                </Border>

                <Border>
                  <ListItem
                    onClick={() => {
                      toggling();
                      setCurrentLang('RU');
                    }}
                  >
                    Русский
                  </ListItem>
                </Border>
                <Border>
                  <ListItem
                    onClick={() => {
                      toggling();
                      setCurrentLang('EN');
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
