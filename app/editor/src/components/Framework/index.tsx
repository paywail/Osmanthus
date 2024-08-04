import { Editor, Frame, Element, Canvas } from "@craftjs/core";
import * as _materials from '@osmanthus/materials';
import { Container } from "./components/Container";
import { SettingsPanel } from '../SettingPannel';
import React from "react";
import { Empty } from "./components/Empty";
import { LeftSider } from "./components/LeftSide";


const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key, 
  component: _materials[key as keyof typeof _materials]
}));

export const Framework = (props) => {
  return (
    <Editor resolver={{ ..._materials, Container, Empty }} >
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

