import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import imgJavascript from '../../Image/1.jpg';
const Course = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          src={imgJavascript}
          alt="javascript"
          sx={{ height: { lg: '50vh', xs: '70vh' } }}
        />
      </CardActionArea>
      <CardContent>Javascript</CardContent>
    </Card>
  );
};

export default Course;
