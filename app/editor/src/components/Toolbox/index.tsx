// components/Toolbox.js
import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import * as _materials from '@osmanthus/materials';

import { useEditor, Element } from "@craftjs/core";

const {
  Card, Button, Text, Container, CardTop, CardBottom
} = _materials
const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key,
  component: _materials[key as keyof typeof _materials]
}));
export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <div className="grid gap-4 grid-cols-2 border-solid border-2 border-indigo-600 h-full w-1/5 m-5">
      <div> <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Button size={'small'} >按钮</Button>)}>按钮</MaterialButton></div>
      <div> <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Text text='Is a new Text Component' />)}>文本框</MaterialButton></div>
      <div> <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Element is={Container} canvas padding='20px'>Custom Container</Element>)}>容器</MaterialButton></div>
      <div> <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Card background='transparent' >Custom Card</Card>)}>卡片</MaterialButton></div>
    </div>
  )
};