import "./EngineModule.scss";
import React from "react";
import { Layout } from "antd";
import { getCurrentYear, renderRoute } from "../../../assets/js/helpers";
import AppHeader from "../../../shared/components/header/AppHeader";
import { Content } from "antd/lib/layout/layout";
import { Routes } from "react-router-dom";
import EngineModuleRoute from "../../../modules/engine/assets/routes";
const { Header, Footer } = Layout;

function EngineModule() {
  return (
    <main>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <AppHeader />
        </Header>
        <Content>
          <Routes>{EngineModuleRoute.map(renderRoute)}</Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Medical Inventory ©{getCurrentYear()}
        </Footer>
      </Layout>
    </main>
  );
}

export default EngineModule;
