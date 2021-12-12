import React from "react";
import { Layout } from "antd";
const { Header, Content } = Layout;

export const Wrapper = (props: any) => {
  return (
    <div>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Header
          className="siteLayoutBackground"
          style={{
            background: "#233c58",
            color: "white",
            paddingBlock: "20px",
            lineHeight: "0px",
          }}
        >
          <img
            src="https://jitera.com/packs/media/styles/img/logo-jitera-white-0cba213098fb44f164173063eaef1f34.svg"
            style={{ width: "100px" }}
            alt="logo"
          />
        </Header>

        <Content
          style={{
            margin: "24px auto",
            maxWidth: "1250px",
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </div>
  );
};
