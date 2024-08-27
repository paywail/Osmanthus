import React from "react";
import ReactFrameComponent, {
  FrameContextConsumer,
} from "react-frame-component";
import styles from './index.module.less'
export interface IFrameProps {
  children?: React.ReactNode;
}
import {
  StyleProvider,
  createCache as createCacheByAntd,
} from "@ant-design/cssinjs";

export const IFrameWrapper: React.FC<IFrameProps> = (props) => {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  return (
    <ReactFrameComponent
      id={'IFrameWrapper'}
      ref={iframeRef}
      className={styles.wrapper}
      head={
        <>
          <style>
            {`
              .editor-component-active {
                position: relative; 
              }

              .editor-component-active::after {
                content: '';
                pointer-events: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: block;
                border: 1px solid #1677ff;
              }

              .editor-component-hover {
                position: relative;
              }

              .editor-component-hover::after {
                content: '';
                pointer-events: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: block;
                border: 1px dashed #1677ff;
                background: rgba(0, 0, 0, 0.1);
              }

              #ROOT {
                width: 100%;
                height: 100%;
              }

        `}
          </style>
        </>
      }
    >
      <FrameContextConsumer>
        {({ document: _document }) => {
          const antdCache = createCacheByAntd();
          return (
            <StyleProvider cache={antdCache} container={_document?.head}>
              {props.children}
            </StyleProvider>
          )
        }}
      </FrameContextConsumer>
    </ReactFrameComponent>
  );
};
