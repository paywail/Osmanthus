import { EditOutlined } from '@ant-design/icons';
import { Button, Modal, Form } from 'antd';
import React, { useRef, useState } from 'react';
import { BetaSchemaForm } from '@ant-design/pro-components'
import { FormInstance } from 'antd/es/form/Form';
interface IProps {
  value?: any;
  onChange?: (val: any) => void;
  options: any;
}
export default function EventModal(
  {
    value,
    onChange,
    options,
  }: IProps
) {
  const formRef = useRef<FormInstance>();
  const [open, setOpen] = useState(false);
  const onOk = async () => {
    await formRef.current?.validateFields();
    const resValue = formRef.current?.getFieldsValue();
    console.log('test-------->resvalue, ----->', resValue);
    setOpen(false);
    onChange && onChange(resValue);
  }
  const onCancel = () => {
    setOpen(false);
  }

  return <>
    <Button icon={<EditOutlined />} onClick={() => setOpen(true)} />
    <Modal open={open} destroyOnClose onCancel={onCancel} onOk={onOk}>
      <BetaSchemaForm columns={options} formRef={formRef} />
    </Modal>
  </>
}
