import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const DrawerContext = createContext();

const ModalProvider = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <DrawerContext.Provider
      value={{
        showDrawer,
        setShowDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalProvider;

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) throw new Error('useModal must be wrapped within Provider');
  const {
    showDrawer, setShowDrawer,
  } = context;
  return {
    showDrawer, setShowDrawer,
  };
};
