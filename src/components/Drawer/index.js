import React from 'react';
import { useDrawer } from '../../context/Drawer';
import DrawerBody from './styled';

const Drawer = () => {
  const { showDrawer, setShowDrawer } = useDrawer();

  return (
    <DrawerBody show={showDrawer}>
      <h2>Drawer</h2>
      <button type="button" onClick={() => { setShowDrawer(!showDrawer); }}>Close</button>
    </DrawerBody>
  );
};

export default Drawer;
