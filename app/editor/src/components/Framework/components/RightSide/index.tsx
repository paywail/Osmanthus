import React from 'react';
import { SettingsPanel } from './SettingPanel';
import { TopBar } from './TopBar';


export default function RightSide() {

  return (
    <div className='w-1/4 border-2 p-2' style={{ height: 'calc(100vh - 48px)' }}>
      <div>工具栏</div>
      <TopBar />
      <SettingsPanel />
    </div>
  )
}
