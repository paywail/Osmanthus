import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import { ButtonSettings } from "./Setting";
import { createReactMaterial } from '@osmanthus/core';


export const Button = createReactMaterial(({ size, variant, color, children }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <MaterialButton ref={ref => connect(drag(ref))} size={size} variant={variant} color={color} >
      {children}
    </MaterialButton>
  )
}, {
  props: {
    size: "small",
    variant: "contained",
    color: "primary",
    text: "Click me"
  },
  related: {
    settings: ButtonSettings
  }
})

