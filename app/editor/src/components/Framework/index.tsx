import * as _materials from '@osmanthus/materials';
import React from "react";
import { LeftSider } from "./components/LeftSide";
import { DocumentNodes, EditorRootWrapper } from "./components/Container/index";
import RightSide from './components/RightSide';
import { IFrameWrapper } from './components/IFrameWrapper';
import { FrameworkContextProvider } from './components/RootProvider';
import { Allotment } from 'allotment';
import 'allotment/dist/style.css';

const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key,
  component: _materials[key as keyof typeof _materials]
}));

const Framework = ({ children, ...props }, ref) => {

  return (
    <EditorRootWrapper {...props}>
      {children ? (children) : (
        <div className='h-[100vh] flex flex-col '>
          <div className='h-4'></div>
          <Allotment className='w-screen border-t-2'>
            <Allotment.Pane preferredSize={240} maxSize={400} minSize={200}>
              <LeftSider groupList={baseMaterials} groupName={'基础组件'} />
            </Allotment.Pane>
            <Allotment.Pane>
              <IFrameWrapper >
                <DocumentNodes />
              </IFrameWrapper>
            </Allotment.Pane>
            <Allotment.Pane preferredSize={240} maxSize={400} minSize={200}>
              <RightSide />
            </Allotment.Pane>
          </Allotment>
        </div>

      )}
    </EditorRootWrapper>
  )
}
export default React.forwardRef(Framework);

