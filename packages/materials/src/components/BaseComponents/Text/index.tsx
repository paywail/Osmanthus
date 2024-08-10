import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import TextSettings from "./setting";
import { createReactMaterial } from '@osmanthus/core';
import { textIcon } from "@/assets/icon";

export const Text = createReactMaterial(({ text, fontSize }, ref) => {
  const { actions: { setProp }, hasSelectedNode, hasDraggedNode } = useNode((state) => {
    return {
      hasSelectedNode: state.events.selected,
      hasDraggedNode: state.events.dragged,
      hasHoverNode: state.events.hovered
    }
  });
  const [edit, setEdit] = useState(false);

  useEffect(() => { !hasSelectedNode && setEdit(false) }, [hasSelectedNode]);
  return (
    <div ref={ref} onClick={() => setEdit(true)} >
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
}, {
  props: {
    text: "Hello World!!!",
    fontSize: 20
  },
  displayName: "文本",
  related: {
    icon: () => <img height="100%" width="100%" src={textIcon} />,
    settings: TextSettings
  },
  
})



