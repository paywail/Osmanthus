import * as _materials from '@osmanthus/materials';
// import { SettingsPanel } from './components/RightSide/SettingPannel';
import React from "react";
import { LeftSider } from "./components/LeftSide";
import { DocumentNodes, EditorRootWrapper } from "./components/Container/index";
import RightSide from './components/RightSide';


const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key, 
  component: _materials[key as keyof typeof _materials]
}));

export const Framework = (props) => {
  return (
    <EditorRootWrapper  >
      <LeftSider groupList={baseMaterials} groupName={'基础组件'} />
      <DocumentNodes />
      <RightSide />
    </EditorRootWrapper>
  )
}

