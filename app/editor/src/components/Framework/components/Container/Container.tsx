import React from "react";
import { createReactMaterial } from "@osmanthus/core";
import { useNode } from "@craftjs/core";

const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3
};



const Container = createReactMaterial(({ background, padding = 0, children }, ref) => {
  return (
    <div className=" w-full h-full" style={{ background, padding: `${padding}px`, }} ref={ref}>
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
