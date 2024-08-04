import React from "react";
import { useEditor, Element, Canvas } from "@craftjs/core";
import { Flex, Typography, Button, Tag, Row, Col } from "antd";
import _ from 'lodash';
import { MaterialItem } from "./MaterialItem";
import type { MaterialProps } from "./types";
import { SmileOutlined } from "@ant-design/icons";

interface IProps {
  groupList: MaterialProps["components"];
  groupName: string;
}
export const MaterialGroup: React.FC<IProps> = (props) => {
  const { connectors, actions } = useEditor();

  const isEmpty = Object.keys(props.groupList).length === 0;

  if (isEmpty) {
    return null;
  }

  return (
    <Flex vertical gap={12}>
      <Flex justify="flex-start" gap={6}>
        <Typography.Text type="secondary">{props.groupName}</Typography.Text>
        {isEmpty ? null : (
          <Tag color="blue" bordered={false}>
            {Object.keys(props.groupList).length}
          </Tag>
        )}
      </Flex>
      <Row gutter={12}>
        {props.groupList.map((item, index) => {
          const { key, component: value } = item;
          const displayName = value.craft?.displayName;
          const { icon } = value.craft.related || {};
          const { useCanvas = false } = value.craft?.custom || {};
          return (
            <Col span={8} key={key}>
              <MaterialItem
                ref={(ref: HTMLDivElement) => {
                  if (ref) {
                    connectors.create(
                      ref,
                      useCanvas ? (
                        <Canvas canvas is={value} />
                      ) : (
                        React.createElement(value)
                      ), {
                      onCreate: (nodeTee) => {
                        console.log('nodeTree拖拽结束', nodeTee)
                        actions.selectNode(nodeTee.rootNodeId);
                      },
                    }
                    );
                  }
                }}
                name={displayName}
                icon={icon ? React.createElement(icon) : <SmileOutlined />}
              />
            </Col>
          );
        })}
      </Row>
    </Flex >
  )
};