import React from "react";
import { Badge, Card, Flex, Typography, theme } from "antd";


export interface IProps {
  icon: React.ReactNode;
  name: string;
}


export const MaterialItem = React.forwardRef<
  HTMLDivElement,
  IProps
>((props, ref) => {
  return (
    <Flex ref={ref} vertical align="center" gap={8} wrap="wrap" className="cursor-pointer">
      <Flex justify="center" align="center" >
        {props.icon}
      </Flex>
      <Typography.Paragraph
        ellipsis={{
          rows: 2,
          tooltip: true,
        }}
        type="secondary"
        style={{ fontSize: 12, maxWidth: "6em" }}
      >
        {props.name}
      </Typography.Paragraph>
    </Flex>
  );
});
