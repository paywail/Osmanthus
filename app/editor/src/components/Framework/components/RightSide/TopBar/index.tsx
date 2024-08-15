import React, { useState } from "react";
import { Switch, Grid, Button, Space, notification, Modal, Input } from "antd";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from 'copy-to-clipboard';
import { setHistoryItem } from "@/utils/db";
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

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
  // 粘贴页面配置的json
  const handleTextAreaChange = (e) => {
    const val = e.target.value;
    setStateToLoad(val)
  }
  // 解析json
  const handleOk = () => {
    setDialogOpen(false);
    if (stateToLoad) {
      const json = lz.decompress(lz.decodeBase64(stateToLoad));
      actions.deserialize(json);
    }
  }
  // 跳转预览
  const handlePreviewEvt = async () => {
    const previewId = nanoid();
    // 获取当前schema
    const schema = query.serialize();
    // 保存到本地记录中
    await setHistoryItem({
      id: previewId,
      pageSchema: schema,
      createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      createUser: "zzlw",
    });


    sessionStorage.setItem(previewId, schema)
    window.open(`/preview/${previewId}`, '_blank')
  }
  // 保存到本地
  const handleLocalSave = async () => {
    const uniqueId = nanoid();
    // 获取当前schema
    const schema = query.serialize();
    // 保存到本地记录中
    await setHistoryItem({
      id: uniqueId,
      pageSchema: schema,
      createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      createUser: "zzlw",
    });

  }
  return (
    <div className="flex">
      <Space className="ml-auto">
        <Button onClick={handlePreviewEvt}>预览</Button>
        <Button onClick={copy2Json}>复制</Button>
        <Button onClick={() => { setDialogOpen(true) }} >加载</Button>
        <Button onClick={() => { handleLocalSave() }} >保存</Button>
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