import React, { useState } from "react";
import { SmallDashOutlined } from "@ant-design/icons";
import _ from 'lodash';
import './index.less';
import { MaterialProps } from "../MaterialList/types";
import { MaterialGroup } from "../MaterialList/MaterialGroup";

interface IProps {
  groupList: MaterialProps["components"];
  groupName: string;
}
export const LeftSider: React.FC<IProps> = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const SiderBarMap = [
    {
      id: '1',
      name: '组件',
      components: props.groupList,
      icon: SmallDashOutlined,
    }
  ];
  const onSideEnter = (activeIndex: number) => {
    setActiveTab(activeIndex);
  }
  const onSideLeave = () => {
    setActiveTab(-1);
  }
  const renderSideContent = (activeTab: number) => {
    return (
      <MaterialGroup groupList={SiderBarMap[activeTab].components} groupName={props.groupName} key={activeTab} />
    )
  }

  return (
    <div className='sidebar mr-2 w-1/4'>
      <ul className="sidebar-widgets">
        {SiderBarMap.map((item, index) => {
          return (
            <li key={item.id} onClick={() => setActiveTab(index)}>
              <span>{item.name}</span>
            </li>
          )
        })}
      </ul>
      <div
        className={activeTab > -1 ? 'sidebar-content sidebar-content-show' : 'sidebar-content'
        }
      >
        {activeTab > -1 && renderSideContent(activeTab)}
      </div>
    </div>
  )
};