import * as _materials from '@osmanthus/materials';
import React from "react";
import { LeftSider } from "./components/LeftSide";
import { DocumentNodes, EditorRootWrapper } from "./components/Container/index";
import RightSide from './components/RightSide';
import { FrameworkContextProvider } from './components/RootProvider';

const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key,
  component: _materials[key as keyof typeof _materials]
}));

const Framework = ({ children, ...props }, ref) => {

  return (
    <EditorRootWrapper {...props}>
      {children ? (children) : (
        <>
          <LeftSider groupList={baseMaterials} groupName={'基础组件'} />
          <DocumentNodes />
          <RightSide /></>
      )}
    </EditorRootWrapper>
  )
}
export default React.forwardRef(Framework);

