// components/Toolbox.js
import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import {
  Card, Button, Text, Container, CardTop, CardBottom
} from '@osmanthus/materials';
import { useEditor, Element } from "@craftjs/core";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <Box px={2} py={2}>
      <Grid container direction="column" alignItems="center" justify="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Button size={'small'} >Custom Button</Button>)}>Button</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Text text='Is a new Text Component' />)}>Text</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Element is={Container} canvas padding='20px'>Custom Container</Element>)}>Container</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Card background='transparent' >Custom Card</Card>)}>Card</MaterialButton>
        </Grid>
      </Grid>
    </Box>
  )
};