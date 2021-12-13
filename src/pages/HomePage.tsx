import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Typography } from "antd";
import { Wrapper } from "../components/Layout";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EditOutlined,
  HeartOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { ItemType } from "../interface";

const { Meta } = Card;

export const HomePage = () => {
  const [userData, setUserData] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          if (res.status === 200) {
            setUserData(res.data);
            setLoading(false);
          }
        });
    };

    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Wrapper>
      <Row
        gutter={[
          { sm: 16, md: 24 },
          { xs: 16, sm: 16, md: 16 },
        ]}
      >
        {userData.map((item: ItemType) => (
          <Col xs={24} xl={6} lg={8} sm={12} key={item.id}>
            {renderItemDetail(item)}
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

const renderItemDetail = (item: ItemType) => {
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
