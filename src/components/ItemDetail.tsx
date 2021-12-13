import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EditOutlined,
  HeartOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { Card, Typography } from "antd";

import { ItemType } from "../interface";

const { Meta } = Card;

export const ItemDetail = (props: { item: ItemType }) => {
  const { item } = props;

  const itemStyles = {
    marginLeft: "10px",
    color: "rgba(0, 0, 0, 0.7)",
  };
  return (
    <Card
      hoverable
      cover={
        <div
          style={{
            background: "#cccbcb9f",
            paddingTop: "15px",
            display: "flex",
          }}
        >
          <img
            style={{ maxWidth: "100%", width: "200px", margin: "auto" }}
            alt="avatar"
            src={`https://avatars.dicebear.com/v2/avataaars/${item.name}.svg?options[mood][]=happy`}
          />
        </div>
      }
      actions={[
        <HeartOutlined key="setting" style={{ color: "red" }} />,
        <EditOutlined key="edit" />,
        <DeleteFilled key="delete" />,
      ]}
    >
      <Meta
        title={item.name}
        description={
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <MailOutlined />
              <Typography style={itemStyles}>{item.email}</Typography>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <PhoneOutlined />
              <Typography style={itemStyles}>{item.phone}</Typography>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <GlobalOutlined />
              <Typography style={itemStyles}>{item.website}</Typography>
            </div>
          </div>
        }
      />
    </Card>
  );
};
