import { Toggle } from './style';
import { useWindowSize } from '../../hooks/useWindowSize';
import Drawer from '../Drawer';
import { useState } from 'react';

const BurgerToggle = () => {
  const { width } = useWindowSize();
  const [isToggled, setIsToggled] = useState(false);
  const toggleSideNav = () => {
    setIsToggled(!isToggled);
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
          <Drawer toggle={isToggled} onClick={toggleSideNav} />
        </>
      )}
    </>
  );
};

export default BurgerToggle;

