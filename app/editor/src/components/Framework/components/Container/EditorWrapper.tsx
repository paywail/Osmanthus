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
    >
      {props.children}
    </RootEditor>
  );
};
