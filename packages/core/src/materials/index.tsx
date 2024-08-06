import React from "react";
import { useNode } from "@craftjs/core";
import type { UserComponent, UserComponentConfig } from '@craftjs/core'
import _ from "lodash";
import { isExpression, parseJsStrToLte } from "./utils";
import { jsRuntime } from "./runtime";


/** 物料类型 */
export type MaterialComponent = UserComponent
/**
 * 物料组件HOC
 * @param WrappedComponent  基础组件
 * @returns 返回一个函数组件
 */
export function withMaterialNode<T = unknown>(WrapComponent: React.FunctionComponent<T>) {
  return function (props: any) {
    const { connectors: { connect, drag } } = useNode();
    const memoizedProps = React.useMemo(() => {
      const cloneProps = _.cloneDeepWith(props, (value) => {
        // vm run
        if (value && typeof value === "string" && isExpression(value)) {
          console.log(`执行代码： ${value} `, props)
          debugger
          return jsRuntime.execute(parseJsStrToLte(value), { props })?.value
        }
      })
      return cloneProps
    }, [props])

    return <WrapComponent ref={(dom: HTMLElement) => connect(drag(dom))} {...memoizedProps} />
  }
}
/**
 * 创建React物料组件
 * @param component 物料组件
 * @param options 物料配置
 */
export function createReactMaterial<T>(
  component: MaterialComponent,
  options: Partial<UserComponentConfig<T>>) {
  const forwardComponent = React.forwardRef(component);
  const MaterialComponent = withMaterialNode(forwardComponent);
  // craft 可以挂在组件的一些基础参数信息、relate组件等
  MaterialComponent.craft = options
  return MaterialComponent as MaterialComponent
}

