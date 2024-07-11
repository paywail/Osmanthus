// pages/index.js

import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';

import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/SettingsPanel';
import { Topbar } from './components/Topbar';

import { Container } from './components/User/Container';
import { Button } from './components/User/Button';
import { Card, CardBottom, CardTop } from './components/User/Card';
import { Text } from './components/User/Text';
import { Editor, Frame, Element } from "@craftjs/core";

export default function App() {
  return (
    <div style={{ margin: "0 auto", width: "1000px" }}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom, }}>
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Topbar />
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas> // Canvas Node of type Container, droppable
                <Card background={'yellowgreen'} />
                <Button size="small" variant="outlined" color={'#485dca'}>Click Me</Button>
                <Text size="small" text="Hi world!" />
                <Element is={Container} padding={5} background="pink" canvas> // Canvas Node of type Container, droppable
                  <Text size="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>

    </div >
  );
}
