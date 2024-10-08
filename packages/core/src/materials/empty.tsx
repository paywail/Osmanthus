import React from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { Flex, Typography, theme } from "antd";

export interface EmptySetterProps {
  children?: React.ReactNode;
  name?: string;
  onChange?: any;
}

export const Empty: React.FC<EmptySetterProps> = ({
  children,
  name,
  ...props
}) => {
  // 如果children小于1的话，代表组件是空的内容，因此需要为其添加placeholder来保证元素能够被正常插入
  const isEmpty = React.Children.count(children) < 1;

  return isEmpty ? (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Typography.Text type="secondary">
        <PlusCircleFilled />
      </Typography.Text>
      <Typography.Text type="secondary">
        请添加您的组件, 当前 {name ? `<${name}/>` : ""}
      </Typography.Text>
    </Flex>
  ) : (
    children
  );
};

