import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import { useEditor, Element } from "@craftjs/core";


export const Toolbox = (props) => {
  const { baseMaterials } = props;
  const { connectors, query } = useEditor();

  return (
    <div className="grid gap-4 grid-cols-2 border-solid border-2 border-indigo-600  w-1/5 m-5">
      {
        baseMaterials.map(({ key, component }) => {
          let value = React.createElement(component);
          if (key.includes('Container')) {
            // 如果是容器的话，此时需要渲染成Element
            value = <Element canvas is={component} />;
          }
          return <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, value)}>{key}</MaterialButton>
        })
      }

    </div>
  )
};