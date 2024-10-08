import React from "react";
import { Canvas, Frame as DocumentFrame } from "@craftjs/core";
import { Container } from "./Container";


export const DocumentNodes: React.FC<React.ComponentProps<typeof DocumentFrame>> = (props) => {

  return (
    <div
      id="DocumentViewContainer"
      style={{ width: '100vw', height: '100vh' }}
    >
      <DocumentFrame {...props} >
        <Canvas
          canvas
          is={Container}
          backgroundColor="#FFF"
          height="100%"
          width="100%"
        >

        </Canvas>
      </DocumentFrame>
    </div>
  );
};
