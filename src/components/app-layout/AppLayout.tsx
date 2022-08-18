import "./AppLayout.scss";
import React from "react";
import { Breadcrumb, Layout } from "antd";
import { getCurrentYear } from "../../assets/js/helpers";
import AppHeader from "../header/AppHeader";
import AppContent from "../app-content/AppContent";
const { Header, Footer } = Layout;

function AppLayout() {
  let padding = "0 100px";

  return (
    <main>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%", padding }}>
          <AppHeader />
        </Header>
        <AppContent padding={padding} />
        <Footer style={{ textAlign: "center" }}>
          Medical Inventory ©{getCurrentYear()}
        </Footer>
      </Layout>
    </main>
  );
}

export default AppLayout;
