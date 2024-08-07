import React from "react";
import { createReactMaterial } from "@osmanthus/core";

const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3
};


const Container = createReactMaterial(({ background, padding = 0, children }) => {
  return (
    <div className="border-2" style={{ background, padding: `${padding}px`, minHeight: '100px', minWidth: '100px' }}>
      {children}
    </div>
  )
}, {
  props: ContainerDefaultProps,
  custom: {
    useCanvas: true,
  },
  related: {
  }
})





export {
  Container,
};
