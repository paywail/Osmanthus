import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { Framework } from '../components/Framework'

import { Editor, Frame, Element } from "@craftjs/core";

const Index = () => {
  return (
    <div className='h-screen flex justify-between' >
      <Framework />
    </div>
  );
};

export default Index;