import "./AppLayout.scss";
import React from "react";
import { Layout } from "antd";
import { getCurrentYear } from "../../assets/js/helpers";
import AppHeader from "../header/AppHeader";
import { Content } from "antd/lib/layout/layout";
const { Header, Footer } = Layout;

function AppLayout() {
  return (
    <main>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <AppHeader />
        </Header>
        <Content className="site-layout" style={{ marginTop: 64 }} />
        <Footer style={{ textAlign: "center" }}>
          Medical Inventory ©{getCurrentYear()}
        </Footer>
      </Layout>
    </main>
  );
}

export default AppLayout;
