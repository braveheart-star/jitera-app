import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Typography } from "antd";
import { Wrapper } from "../components/Layout";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  HeartOutlined,
  DeleteOutlined,
  DeleteFilled,
} from "@ant-design/icons";

const { Meta } = Card;

export const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("userData: ", userData);
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
  return (
    <Wrapper>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 16, sm: 16, md: 24, lg: 32 },
        ]}
      >
        {userData.map((item: any) => (
          <Col xs={24} xl={6} lg={8} sm={12}>
            <Card
              hoverable
              loading={loading}
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
                      <Typography
                        style={{
                          marginLeft: "10px",
                          color: "rgba(0, 0, 0, 0.7)",
                        }}
                      >
                        {item.email}
                      </Typography>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <PhoneOutlined />
                      <Typography
                        style={{
                          marginLeft: "10px",
                          color: "rgba(0, 0, 0, 0.7)",
                        }}
                      >
                        {item.phone}
                      </Typography>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <GlobalOutlined />
                      <Typography
                        style={{
                          marginLeft: "10px",
                          color: "rgba(0, 0, 0, 0.7)",
                        }}
                      >
                        {item.website}
                      </Typography>
                    </div>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};
