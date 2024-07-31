import React from "react";
import { useNode } from "@craftjs/core";
import { Form, Input, Select } from "antd";

export const ButtonSettings = () => {
  const [form] = Form.useForm();
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));
  const handleChange = (changedValues: any, values: any) => {
    const [key, value] = Object.entries(changedValues)[0];
    setProp(props => props[key] = value)
  }

  return (
    <Form
      form={form}
      onValuesChange={handleChange}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="children" label="按钮名字" >
        <Input />
      </Form.Item>
      <Form.Item name="size" label="尺寸" >
        <Select
          allowClear
          options={[
            { value: 'large', label: '大' },
            { value: 'middle', label: '中' },
            { value: 'small', label: '小' },
          ]}
        />
      </Form.Item>
      <Form.Item name="type" label="按钮类型" >
        <Select
          allowClear
          options={[
            { value: 'default', label: '默认' },
            { value: 'primary', label: '主按钮' },
            { value: 'text', label: '次按钮' },
            { value: 'dashed', label: '虚线' },
            { value: 'link', label: '链接' },
          ]}
        />
      </Form.Item>
      <Form.Item name="shape" label="按钮形状" >
        <Select
          allowClear
          options={[
            { value: 'default ', label: '默认' },
            { value: 'circle', label: '圆形' },
            { value: 'round', label: '圆弧' },
          ]}
        />
      </Form.Item>

    </Form>
  )
};