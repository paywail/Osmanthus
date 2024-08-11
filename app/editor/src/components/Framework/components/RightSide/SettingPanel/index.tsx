import React from 'react';
import { Button } from 'antd';
import { useEditor } from '@craftjs/core';

export const SettingsPanel = () => {
  const all = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selected;
    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable()
      };
    }

    return {
      selected
    }
  });
  const { actions, selected } = all;

  return (
    selected ?
      <div className='p-4'>
        {
          selected.settings && React.createElement(selected.settings)
        }
        {
          selected.isDeletable ? (
            <Button
              onClick={() => {
                actions.delete(selected.id);
              }}
            >
              Delete
            </Button>
          ) : null
        }
      </div> : null
  )
}