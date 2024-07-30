import React from 'react';

import { Typography, Paper, Grid } from '@material-ui/core';

import { Editor, Frame, Element, Canvas } from "@craftjs/core";
import { TopBar } from '../TopBar';
import { MaterialGroup } from '../MaterialGroup';
import { SettingsPanel } from '../SettingPannel';
import * as _materials from '@osmanthus/materials';

console.log('test-------->_materials, ----->', _materials);
const { Container, Button, Card, Text } = _materials;

const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key,
  component: _materials[key as keyof typeof _materials]
}));

export const Framework = (props) => {
  return (
    <div>3213123</div>
    // <Editor resolver={{ ..._materials }} >
    //   <MaterialGroup groupList={undefined} groupName={''} />
    //   <div
    //     id="__CasterViewPort__"
    //     style={{
    //       width: "100vw",
    //       height: '100vh',
    //     }}
    //   >
    //     <Frame {...props} >
    //       <Canvas
    //         canvas
    //         is={Container}
    //         backgroundColor="#FFF"
    //         height="100%"
    //         width="100%"
    //       >
    //         <div>这是一个占位的div哈哈哈</div>
    //         {/* <Text size="small" text="It's me again!" /> */}
    //       </Canvas>
    //     </Frame>
    //   </div>
    //   <SettingsPanel />
    // </Editor>
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