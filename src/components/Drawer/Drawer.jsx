import React from 'react';
import {
  TicketList,
  Link,
  LinkPhone,
  LangWrapper,
  Lang,
  TelWrapper,
} from './StyledComponents';
import PropTypes from 'prop-types';

const Drawer = ({ toggle, onClick }) => {
  return (
    <>
      <TicketList open={toggle}>
        <Link to={'/#about'}>
          <span onClick={onClick}>О нас</span>
        </Link>
        <Link to={'/#services'}>
          <span onClick={onClick}>Услуги</span>
        </Link>
        <Link to={'/'}>
          <span onClick={onClick}>Контакты</span>
        </Link>

        <TelWrapper>
          <LinkPhone href={`tel:+38 (050) 111-11-11`}>
            +38 (050) 111-11-11
          </LinkPhone>
          <LinkPhone href={`tel:+38 (050) 111-11-11`}>
            +38 (050) 111-11-11
          </LinkPhone>
          <LinkPhone href={`tel:+38 (050) 111-111-11`}>
            +38 (050) 111-11-11
          </LinkPhone>
        </TelWrapper>

        <LangWrapper>
          <Lang>UK</Lang>
          <Lang style={{ color: '#fff' }}>RU</Lang>
          <Lang>EN</Lang>
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
