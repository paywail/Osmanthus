import { Editor, Frame, Element, Canvas } from "@craftjs/core";
import { TopBar } from '../TopBar';
import { MaterialGroup } from './comonents/MaterialList/MaterialGroup';
import { Container } from "./comonents/Container";
import { SettingsPanel } from '../SettingPannel';
import * as _materials from '@osmanthus/materials';
import React from "react";
import { EmptySetter } from "./comonents/Empty";
import { LeftSider } from "./comonents/LeftSider";


const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key, 
  component: _materials[key as keyof typeof _materials]
}));

export const Framework = (props) => {
  return (
    <Editor resolver={{ ..._materials, Container, EmptySetter }} >
      <LeftSider groupList={baseMaterials} groupName={'基础组件'} />
      <div
        id="__CasterViewPort__"
        style={{
          width: "100vw",
          height: '100vh',
        }}
      >
        <Frame {...props} >
          <Canvas
            canvas
            is={Container}
          // backgroundColor="#FFF"
          // height="100%"
          // width="100%"
          >
            <div>这是一个占位的div哈哈哈</div>
          </Canvas>
        </Frame>
      </div>
      <SettingsPanel />
    </Editor>
  )
}

