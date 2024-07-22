// components/Toolbox.js
import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import * as _materials from '@osmanthus/materials';
import { useEditor, Element } from "@craftjs/core";
import { Flex } from "antd";

const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key,
  component: _materials[key as keyof typeof _materials]
}));
console.log('test-------->,baseMaterials ----->', baseMaterials);

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <Flex vertical>

    </Flex>
  )
};