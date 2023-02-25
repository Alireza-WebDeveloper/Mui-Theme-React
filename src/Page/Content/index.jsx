import { Grid } from '@mui/material';
import React from 'react';

const Content = () => {
  return (
    <Grid container pt={15} spacing={4}>
      <Grid item lg={3} md={6} xs={12}>
        React
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        Bootstrap
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        Material Ui
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        Next Js
      </Grid>
    </Grid>
  );
};

export default Content;
