import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { Framework } from '../components/Framework'

import { Editor, Frame, Element } from "@craftjs/core";

const Index = () => {
  return (
    <div className='h-screen' >
      <div style={{ margin: "0 auto", width: "1000px" }}>
        <Framework />
      </div >
    </div>
  );
};

export default Index;