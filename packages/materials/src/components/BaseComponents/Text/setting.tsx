import React from 'react'
import { useNode } from "@craftjs/core";
import { FormControl, FormLabel, Slider } from "@material-ui/core";

const TextSettings = () => {
  const { actions: { setProp }, fontSize } = useNode((node) => ({
    fontSize: node.data.props.fontSize
  }));

  return (
    <FormControl size="small" component="fieldset">
      <FormLabel component="legend">Font size</FormLabel>
      <Slider
        value={fontSize || 7}
        step={7}
        min={1}
        max={50}
        onChange={(_, value) => {
          setProp(props => props.fontSize = value);
        }}
      />
    </FormControl>
  )
}
export default TextSettings;