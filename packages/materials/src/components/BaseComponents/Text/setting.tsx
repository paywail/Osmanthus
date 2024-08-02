import React from 'react'
import { useNode } from "@craftjs/core";
import { Form, Input, Slider } from 'antd';

const TextSettings = () => {
  const [form] = Form.useForm();
  const { actions: { setProp } } = useNode((node) => ({
    fontSize: node.data.props.fontSize
  }));
  const handleChange = (changedValues: any, values: any) => {
    const [key, value] = Object.entries(changedValues)[0];
    setProp(props => props[key] = value);
  }

  return (
    <Form
      form={form}
      onValuesChange={handleChange}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="text" label="按钮名字" >
        <Input />
      </Form.Item>
      <Form.Item name="fontSize" label="字体大小" >
        <Slider defaultValue={[20, 50]} />
      </Form.Item>


    </Form>
  )
}
export default TextSettings;