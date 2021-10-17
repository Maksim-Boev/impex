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

const Drawer = ({ toggle }) => {
  return (
    <>
      <TicketList open={toggle}>
        <Link to={'/'}>О нас</Link>
        <Link to={'/'}>Услуги</Link>
        <Link to={'/'}>Контакты</Link>

        <TelWrapper>
          <LinkPhone href={`tel:+38 (050) 197-14-15`}>
            +38 (050) 197-14-15
          </LinkPhone>
          <LinkPhone href={`tel:+38 (050) 197-14-15`}>
            +38 (050) 197-14-15
          </LinkPhone>
          <LinkPhone href={`tel:+38 (050) 197-14-15`}>
            +38 (050) 197-14-15
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
};
