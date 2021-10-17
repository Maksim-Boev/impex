import { Toggle } from './style';
import PropTypes from 'prop-types';
import { useWindowSize } from '../../hooks/useWindowSize';
import Drawer from '../Drawer';
import { useState } from 'react';

const BurgerToggle = () => {
  const { width } = useWindowSize();
  const [isToggled, setToggle] = useState(false);
  const toggleSideNav = () => {
    setToggle(!isToggled);
  };
  return (
    <>
      {width < 425 && (
        <>
          <Toggle isOpen={isToggled} onClick={toggleSideNav}>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
          </Toggle>
          <Drawer toggle={isToggled} />
        </>
      )}
    </>
  );
};

export default BurgerToggle;

BurgerToggle.propTypes = {
  isToggled: PropTypes.isToggled,
  toggleSideNav: PropTypes.toggleSideNav,
};
