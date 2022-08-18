import "./AppContent.scss";
import React from "react";
import { Layout } from "antd";
const { Content } = Layout;

function AppContent(props: any) {
  return (
    <Content
      className="site-layout"
      style={{ padding: props.padding, marginTop: 64 }}
    >
      {props.children}
    </Content>
  );
}

export default AppContent;
