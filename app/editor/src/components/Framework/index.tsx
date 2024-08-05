import * as _materials from '@osmanthus/materials';
import { SettingsPanel } from '../SettingPannel';
import React from "react";
import { LeftSider } from "./components/LeftSide";
import { DocumentNodes, EditorRootWrapper } from "./components/Container/index";


const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key, 
  component: _materials[key as keyof typeof _materials]
}));

export const Framework = (props) => {
  return (
    <EditorRootWrapper  >
      <LeftSider groupList={baseMaterials} groupName={'基础组件'} />
      <DocumentNodes />
      <SettingsPanel />
    </EditorRootWrapper>
  )
}

