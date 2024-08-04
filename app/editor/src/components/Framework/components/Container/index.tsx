import React from "react";
import { Paper } from "@material-ui/core";
import { createReactMaterial } from "@osmanthus/core";

const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3
};


const Container = createReactMaterial(({ background, padding = 0, children }) => {
  return (
    <Paper style={{ margin: "5px 0", background, padding: `${padding}px`, minHeight: '100px', minWidth: '100px' }}>
      {children}
    </Paper>
  )
}, {
  props: ContainerDefaultProps,
  related: {
  }
})





export {
  Container,
};
