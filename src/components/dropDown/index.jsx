import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import icon from '../../assets/icon/down.svg';

import '../../index.css';
import {
  Border,
  Container,
  DropDownList,
  DropDownListContainer,
  Icon,
  ListItem,
} from './style';
import { useWindowSize } from '../../hooks/useWindowSize';
import useOutsideClick from '../../hooks/useOutsideClick';

const DropDown = (prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const { width } = useWindowSize();

  const ref = useRef(null);
  const handleOutsideClick = () => setIsOpen(false);
  useOutsideClick(ref, handleOutsideClick);

  console.log(width);

  return (
    <>
      {width > 425 && (
        <Container ref={ref}>
          <Icon>
            <img onClick={toggling} src={icon} alt={''} />
          </Icon>

          <CSSTransition
            in={isOpen}
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
                      prop.setNumber('+38 (098) 749-37-37');
                    }}
                  >
                    +38 (098) 749-37-37
                  </ListItem>
                  <ListItem
                    onClick={() => {
                      toggling();
                      prop.setNumber('+38 (050) 749-37-37');
                    }}
                  >
                    +38 (050) 749-37-37
                  </ListItem>
                </Border>
              </DropDownList>
            </DropDownListContainer>
          </CSSTransition>
        </Container>
      )}
    </>
  );
};

export default DropDown;
