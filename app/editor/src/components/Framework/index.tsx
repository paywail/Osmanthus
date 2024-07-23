import React from 'react';

import { Typography, Paper, Grid } from '@material-ui/core';

import { Editor, Frame, Element } from "@craftjs/core";
import { TopBar } from '../TopBar';
import { Toolbox } from '../Toolbox';
import { SettingsPanel } from '../SettingPannel';
import * as _materials from '@osmanthus/materials';

const { Container, Button, Card, Text } = _materials;

const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key,
  component: _materials[key as keyof typeof _materials]
}));

export const Framework = () => {
  return (
    <Editor resolver={{ ..._materials }} >
      <Toolbox baseMaterials={baseMaterials} />
      <div className='flex-1'>
        <Frame >
          <Element is={Container} padding={5} background="#eee" canvas>
            {/* <Button size="small" variant="outlined" color={'#485dca'}>Click Me</Button>
            <Card background={'yellowgreen'} /> */}
            <Text size="small" text="Hi world!" />
            {/* <Element is={Container} padding={5} background="pink" canvas> // Canvas Node of type Container, droppable
              <Text size="small" text="It's me again!" />
            </Element> */}
        </Element>
      </Frame>
      </div>
      <SettingsPanel />
    </Editor>
  )
}

//  <Typography variant="h5" align="center">A super simple page editor</Typography>
//       <Editor resolver={{ ..._materials }}>
//         <Grid container spacing={3} style={{ paddingTop: "10px" }}>
//           <TopBar />
//           <Grid item xs>
//             <Frame>
//               <Element is={Container} padding={5} background="#eee" canvas> // Canvas Node of type Container, droppable
//                 <Card background={'yellowgreen'} />
//                 <Button size="small" variant="outlined" color={'#485dca'}>Click Me</Button>
//                 <Text size="small" text="Hi world!" />
//                 <Element is={Container} padding={5} background="pink" canvas> // Canvas Node of type Container, droppable
//                   <Text size="small" text="It's me again!" />
//                 </Element>
//               </Element>
//             </Frame>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper>
//               <Toolbox />
//               <SettingsPanel />
//             </Paper>
//           </Grid>
//         </Grid>
//       </Editor> 