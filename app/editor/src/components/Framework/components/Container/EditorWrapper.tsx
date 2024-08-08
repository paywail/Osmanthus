import React from "react";
import { Editor as RootEditor, Options } from "@craftjs/core";
import * as _materials from '@osmanthus/materials';

import { Container } from "./Container";

import _ from "lodash";

const resolver = _.assign({ Container, ..._materials })



export const EditorRootWrapper: React.FC<any> = (props) => {


  return (
    <RootEditor
      {...props}
      resolver={resolver}
      indicator={{
        'success': '#2d9d78', // green
        'error': '#e34850', // red
        'style': { // custom CSS properties
        },
        'className': 'your-css-class' // custom CSS class
      }}
    >
      {props.children}
    </RootEditor>
  );
};
