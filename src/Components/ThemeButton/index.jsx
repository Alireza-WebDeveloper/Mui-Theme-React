import React from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { ThemeContext } from '../../Context/Theme';
import { IconLightMode, IconDarkMode } from '../../Utils';
const ThemeButton = () => {
  const { changeTheme, mode } = ThemeContext();
  return (
    <>
      {' '}
      <Box>
        <FormControlLabel
          onChange={changeTheme}
          label={mode ? IconDarkMode : IconLightMode}
          control={<Switch checked={mode} />}
        />
      </Box>
    </>
  );
};

export default ThemeButton;
