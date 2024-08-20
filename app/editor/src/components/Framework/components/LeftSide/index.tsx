import React, { useState } from "react";
import { BranchesOutlined, ProductOutlined, SmallDashOutlined } from "@ant-design/icons";
import _ from 'lodash';
import './index.less';
import { MaterialProps } from "../MaterialList/types";
import { MaterialGroup } from "../MaterialList/MaterialGroup";
import { HistoryList } from "../HistoryList";
import cx from 'classnames'

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
      icon: <ProductOutlined />,
    },
    {
      id: '2',
      name: '历史',
      components: <HistoryList />,
      icon: <BranchesOutlined />,
    }

  ];

  const renderSideContent = (activeTab: number) => {
    if (activeTab === 0) {
      return (
        <MaterialGroup groupList={SiderBarMap[activeTab].components} groupName={props.groupName} key={activeTab} />
      )
    }
    if (activeTab === 1) {
      return SiderBarMap[activeTab].components
    }

  }

  return (
    <div className='flex mr-4 h-[100%]'>
      <ul className="min-w-12 pt-4 border-r-2">
        {SiderBarMap.map((item, index) => {
          return (
            <li
              key={item.id}
              className={cx("mb-4 cursor-pointer flex items-center justify-center", { 'bg-zinc-200': activeTab === index })}
              onClick={() => setActiveTab(index)}
            >
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
            </li>
          )
        })}
      </ul>
      <div className={'sidebar-content sidebar-content-show'}
      >
        {renderSideContent(activeTab)}
      </div>
    </div>
  )
};