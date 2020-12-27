import React from 'react';
import { useDrawer } from '../../context/Drawer';

const CtaButton = () => {
  const { showDrawer, setShowDrawer } = useDrawer();

  return (
    <button type="button" onClick={() => { setShowDrawer(!showDrawer); }}>Toggle CTA</button>
  );
};

export default CtaButton;
