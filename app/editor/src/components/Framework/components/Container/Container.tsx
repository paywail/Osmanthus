import React from "react";
import { createReactMaterial } from "@osmanthus/core";
import { useNode } from "@craftjs/core";

const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3
};

const Container = ({ background, padding, children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref))}
      className="border-2 w-full h-full"
      style={{ background, padding: `${padding}px`, }}
    >
      {children}
    </div>
  );
};

// const Container = createReactMaterial(({ background, padding = 0, children }) => {
//   return (
//     <div className="border-2 w-full h-full" style={{ background, padding: `${padding}px`, }}>
//       {children}
//     </div>
//   )
// }, {
//   props: ContainerDefaultProps,
//   custom: {
//     useCanvas: true,
//   },
//   related: {
//   }
// })


export {
  Container,
};
