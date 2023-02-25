import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import Course from '../../Components/Course';
import { StyledButton } from '../../Components/Ui';

const Home = () => {
  return (
    <Grid container pt={12}>
      <Grid item lg={6} xs={11} sx={{ m: 'auto' }}>
        <Stack
          component="section"
          sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 5 }}
        >
          <Course />
          <Box
            component="section"
            sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}
          >
            <Button variant="contained" color="success" size="large">
              javascript
            </Button>
            <Button variant="outlined" color="error" size="large">
              material ui
            </Button>
            <Button variant="text" color="info" size="large">
              react
            </Button>
          </Box>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius
          </Typography>
          <Typography variant="h4" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius
          </Typography>
          <Typography
            sx={{
              backgroundColor: (theme) => theme.palette.warning.main,
              p: 3,
              borderRadius: 2,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non sint
            nobis ea ut
          </Typography>
          <StyledButton>Python</StyledButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
