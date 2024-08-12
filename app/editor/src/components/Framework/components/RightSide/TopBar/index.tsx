import React, { useState } from "react";
import { Switch, Grid, Button, Space, notification, Modal, Input } from "antd";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from 'copy-to-clipboard';

const { TextArea } = Input;
export const TopBar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }))
  const [dialogOpen, setDialogOpen] = useState(false);

  const [stateToLoad, setStateToLoad] = useState('');

  // 复制页面配置json
  const copy2Json = () => {
    const pageSchema = query.serialize();
    const compressSchema = lz.encodeBase64(lz.compress(pageSchema))

    copy(compressSchema);
    notification.success({ message: '复制成功' })

  }
  const handleTextAreaChange = (e) => {
    const val = e.target.value;
    setStateToLoad(val)
  }
  const handleOk = () => {
    setDialogOpen(false);
    if (stateToLoad) {
      const json = lz.decompress(lz.decodeBase64(stateToLoad));
      actions.deserialize(json);
    }
  }
  const handlePreviewEvt = () => {
    // 获取当前schema
    const schema = query.serialize()
    const previewId = "uid-" + new Date().getTime()
    sessionStorage.setItem(previewId, schema)
    window.open(`/preview/${previewId}`, '_blank')
  }
  return (
    <div className="flex">
      <Space className="ml-auto">
        <Button onClick={handlePreviewEvt}>预览</Button>
        <Button onClick={copy2Json}>复制</Button>
        <Button onClick={() => { setDialogOpen(true) }} >加载</Button>
      </Space>
      <Modal
        title='Copy to here'
        open={dialogOpen}
        destroyOnClose
        onCancel={() => setDialogOpen(false)}
        onOk={handleOk}

      >
        <TextArea rows={4} onChange={handleTextAreaChange} />
      </Modal>
    </div >
  )
};