import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import ThemeButton from '../ThemeButton';

const Header = () => {
  return (
    <AppBar color="default">
      <Toolbar>
        <ThemeButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
