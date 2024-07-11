import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import { FormControl, FormLabel, Slider } from "@material-ui/core";


export const Text = ({ text, fontSize }) => {
  const { connectors: { connect, drag }, actions: { setProp }, hasSelectedNode, hasDraggedNode } = useNode((state) => {
    return {
      hasSelectedNode: state.events.selected,
      hasDraggedNode: state.events.dragged,
      hasHoverNode: state.events.hovered
    }
  });
  const [edit, setEdit] = useState(false);

  useEffect(() => { !hasSelectedNode && setEdit(false) }, [hasSelectedNode]);
  return (
    <div ref={ref => connect(drag(ref))} onClick={() => setEdit(true)} >
      <ContentEditable
        disabled={!edit}
        html={text}
        onChange={e =>
          setProp(props =>
            props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px` }}
      />
    </div>
  )
}
const TextSettings = () => {
  const { actions: { setProp }, fontSize } = useNode((node) => ({
    fontSize: node.data.props.fontSize
  }));

  return (
    <>
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
    </>
  )
}

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20
  },
  related: {
    settings: TextSettings
  }
}
