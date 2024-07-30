// components/user/Card.js
import React from "react";
import { Text } from "../Text";
import { Button } from "../Button";
import { Element, useNode } from "@craftjs/core";

import { Container, ContainerSettings, ContainerDefaultProps } from "../Container";
import { createReactMaterial } from '@osmanthus/core';

// Notice how CardTop and CardBottom do not specify the drag connector. This is because we won't be using these components as draggables; adding the drag handler would be pointless.

export const CardTop = createReactMaterial(({ children }) => {
  return (
    <div className="text-only">
      {children}
    </div>
  )
}, {
  rules: {
    // Only accept Text
    // canMoveIn: (incomingNodes) => incomingNodes
  }
})


export const CardBottom = createReactMaterial(({ children }) => {
  return (
    <div className="button-only">
      {children}
    </div>
  )
}, {
  rules: {
    // Only accept Buttons
    // canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Button)
  }
})


export const Card = createReactMaterial(({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <Element id="text" is={CardTop} canvas> // Canvas Node of type CardTop
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is={CardBottom} canvas> // Canvas Node of type CardBottom
        <Button size="small" color={'black'} >Learn more</Button>
        <Button size="small" color={'origin'} >Learn more222</Button>
      </Element>
    </Container>
  )
}, {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings 
    settings: ContainerSettings
  }
})
