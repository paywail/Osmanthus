import React from "react";
import { Canvas, Frame as DocumentFrame } from "@craftjs/core";
import { Container } from "./Container";


export const DocumentNodes: React.FC<React.ComponentProps<typeof DocumentFrame>> = (props) => {

  return (
    <div
      id="__CasterViewPort__"
      className="w-screen mr-4"
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
