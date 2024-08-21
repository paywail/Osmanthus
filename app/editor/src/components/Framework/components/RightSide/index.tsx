import React from 'react';
import { SettingsPanel } from './SettingPanel';
import { EventsPanel } from './Events';
import { TopBar } from './TopBar';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

export default function RightSide() {

  const items: TabsProps['items'] = [
    {
      key: 'props',
      label: '属性',
      children: <SettingsPanel />,
    },
    {
      key: 'style',
      label: '样式',
      children: '还没有样式😯',
    },
    {
      key: 'event',
      label: '事件',
      children: <EventsPanel />,
    },
  ];

  return (
    <div className='p-2'>
      <div>工具栏</div>
      <TopBar />
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
}
