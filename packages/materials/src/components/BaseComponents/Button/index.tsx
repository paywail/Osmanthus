import React from "react";
import { Button as MaterialButton } from "antd";
import { useNode } from "@craftjs/core";
import { ButtonSettings } from "./Setting";
import { createReactMaterial } from '@osmanthus/core';
import type { ButtonProps } from "antd/es/button";
import { buttonIcon } from '@/assets/icon'

export const Button = createReactMaterial(
  (props: ButtonProps, ref: any) => {
    console.log('test-------->props, ----->', props);
    return (
      <MaterialButton type="default" ref={ref} {...props} >
        {props.children || '默认按钮'}
      </MaterialButton>

    )
  },
  {
    displayName: "按钮",
    related: {
      settings: ButtonSettings,
      icon: () => <img height="100%" width="100%" src={buttonIcon} />
    },
  },
);



