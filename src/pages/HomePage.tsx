import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";

import { UserType } from "../interface";
import { Wrapper } from "../components/Layout";
import { UserDetail } from "../components/UserDetail";

export const HomePage = () => {
  const [userData, setUserData] = useState<UserType[]>([]);
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
        {userData.map((user: UserType) => (
          <Col xs={24} xl={6} lg={8} sm={12} key={user.id}>
            <UserDetail user={user} />
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};
