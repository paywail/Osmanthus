import React from 'react';

import { Typography, Paper, Grid } from '@material-ui/core';

import { Editor, Frame, Element } from "@craftjs/core";
import { TopBar } from '../TopBar';
import { Toolbox } from '../Toolbox';
import { SettingsPanel } from '../SettingPannel';
import * as _materials from '@osmanthus/materials';
const {
  Card, Button, Text, Container, CardTop, CardBottom

} = _materials;

const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key,
  component: _materials[key as keyof typeof _materials]
}));
console.log('test-------->,baseMaterials ----->', baseMaterials);

export const Framework = () => {
  return (
    <div style={{ margin: "0 auto", width: "1000px" }}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Editor resolver={{ ..._materials }}>
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <TopBar />
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
  )


}