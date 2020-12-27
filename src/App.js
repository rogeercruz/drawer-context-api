import React from 'react';
import DrawerProvider from './context/Drawer';
import CtaButton from './components/CtaButton';
import Drawer from './components/Drawer';

const App = () => (
  <DrawerProvider>
    <>
      <Drawer />
      <CtaButton />
    </>
  </DrawerProvider>
);

export default App;
