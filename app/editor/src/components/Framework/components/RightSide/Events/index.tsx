import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Collapse,
  ConfigProvider,
  Form,
  Input,
  Select,
} from "antd";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  CloseOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import _, { merge } from "lodash";
import { useEditor } from "@craftjs/core";
import { useDebounceFn } from "ahooks";
import { nanoid } from "nanoid";
import EventModal from './components/EventModal';

export interface IEventType {
  name?: string;
  fn?: string;
}


const defaultCode = `function () {
  console.log('hello onMessage...')
}`;

export const EventsPanel = () => {
  const [form] = Form.useForm();
  const [eventList, setEventList] = useState<Array<{ code: string; name: string }>>([]);

  const {
    actions,
    selected
  } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;
    if (currentNodeId) {
      const { data, info } = state.nodes[currentNodeId];
      const selected = {
        id: currentNodeId,
        currentNodeProps: data.props,
        events: data.props?.__events__ || [],
        actions: info.actions || [],
      }
      return {
        selected
      };
    }
  });

  const { run: handleFormChange } = useDebounceFn((_, formData) => {
    const { events } = formData
    console.log('test-------->events, ----->', events);
    if (selected.id) {
      actions.setProp(selected.id, (setterProps) => {
        return merge(setterProps, {
          __events__: events
        })
      })
    }
  })

  // 当前编辑的组件发生改变，selected.id副作用更新了
  useEffect(() => {
    if (selected && selected.id) {
      if (selected.actions.length) {
        try {
          const events = selected.actions.map(e => ({ ...e }));
          setEventList(events);
        } catch (error) {

        }
      }

      /** 切换组件清除setter配置 */
      form.resetFields();


      /** 设置新组件内容属性配置 */
      // form.setFieldsValue({
      //   events,
      // })
    }
  }, [selected.id]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            itemMarginBottom: 8
          },
        },
      }}
    >
      <Flex vertical>
        <Form
          form={form}
          onValuesChange={handleFormChange}
        >
          <Collapse
            size="small"
            ghost
            defaultActiveKey='event'
            expandIconPosition="end"
            items={[
              {
                label: "基础事件",
                key: 'event',
                children: (
                  <Form.List name="events">
                    {(fields, actions) => {
                      return (
                        <Flex vertical>
                          {fields.map((field, index) => (
                            <Flex
                              key={field.key}
                              gap={12}
                              justify="space-between"
                            >
                              <Flex flex={1}>
                                <Form.Item
                                  name={[field.name, 'name']}
                                  rules={[
                                    { required: true, message: "事件名称不能为空" },
                                    ({ getFieldValue }) => ({
                                      validator(_, value) {
                                        let error = false;
                                        if (getFieldValue("events")) {
                                          getFieldValue("events").forEach(
                                            (item: IEventType, i: number) => {
                                              if (
                                                item.name === value &&
                                                index !== i
                                              )
                                                error = true;
                                            }
                                          );
                                        }
                                        return error
                                          ? Promise.reject(
                                            new Error("当前事件已注册，事件名称不要一样😯")
                                          )
                                          : Promise.resolve();
                                      },
                                    }),
                                  ]}
                                >
                                  <Input
                                    style={{ width: "100%" }}
                                    placeholder="onClick"
                                  />
                                </Form.Item>
                              </Flex>
                              <Form.Item name={[field.name, 'id']} hidden>
                                <Input disabled />
                              </Form.Item>
                              <Form.Item name={[field.name, 'actionCode']} style={{ width: '100px' }}>
                                <Select >
                                  {eventList.map(e => {
                                    return (
                                      <Select.Option key={e.code} value={e.code}>
                                        {e.name}
                                      </Select.Option>
                                    )
                                  })}
                                </Select>
                              </Form.Item>
                              <Form.Item shouldUpdate>
                                {({ getFieldValue }) => {
                                  const actionsCode = getFieldValue(['events', index, 'actionCode']);
                                  if (actionsCode) {
                                    const item = eventList.find(e => e.code === actionsCode);
                                    return (<Form.Item noStyle name={[field.name, "options"]}>
                                      <EventModal
                                        options={item.items}
                                      />
                                    </Form.Item>)
                                  }
                                }}
                              </Form.Item>
                            </Flex>
                          ))}
                          <Flex justify="center" >
                            <Button ghost type="primary" onClick={() => actions.add({
                              name: '',
                              id: nanoid(8),
                              fn: '',
                            })} icon={<PlusOutlined />}>
                              新增事件
                            </Button>
                          </Flex>
                        </Flex>
                      );
                    }}
                  </Form.List>
                ),
              },
            ]}
          />
        </Form>
      </Flex>
    </ConfigProvider >
  );
};
