import React, { useState } from "react";
import "./AppHeader.scss";
import {
  MenuOutlined,
  RightOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons/lib";
import { Avatar, Drawer, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import EngineModuleRoute from "../../../modules/engine/assets/routes";
import { formatRouteToMenuItems } from "../../../assets/js/helpers";
import { IAppRoutedMenuItem } from "../../interfaces/IAppRoute";

function AppHeader() {
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);

  const menuItems = formatRouteToMenuItems(EngineModuleRoute);

  const defaultSelectedMenuKey = () => {
    const index = menuItems.find((m: IAppRoutedMenuItem) => m.routeIndex);
    return index ? [index.key] : [];
  };

  return (
    <>
      <div className="header-root">
        <div className="app-navigation">
          <Space size="middle" style={{ width: "100%" }}>
            <Link to="/">
              <div className="organisation-brand">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8476 24.0924V20.1684C10.8476 19.1667 11.6656 18.3546 12.6747 18.3546H16.3632C16.8477 18.3546 17.3125 18.5457 17.6551 18.8858C17.9977 19.226 18.1902 19.6873 18.1902 20.1684V24.0924C18.1871 24.5089 18.3517 24.9093 18.6472 25.2049C18.9428 25.5004 19.3449 25.6667 19.7644 25.6667H22.2809C23.4562 25.6697 24.5844 25.2083 25.4165 24.3844C26.2487 23.5604 26.7163 22.4416 26.7163 21.2749V10.0958C26.7163 9.15332 26.2955 8.25933 25.5673 7.65465L17.0067 0.867365C15.5175 -0.322679 13.3839 -0.284255 11.9393 0.958622L3.57401 7.65465C2.81136 8.2415 2.35553 9.13814 2.33301 10.0958V21.2635C2.33301 23.6953 4.31881 25.6667 6.76843 25.6667H9.22744C10.0987 25.6667 10.8068 24.9688 10.8132 24.1038L10.8476 24.0924Z"
                    fill="#F2911B"
                  />
                </svg>
                <div className="organisation-name">KPEDETIN</div>
              </div>
            </Link>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={defaultSelectedMenuKey()}
              items={menuItems}
            />
          </Space>
        </div>
        <div className="user-shortcuts">
          <Space>
            <div className="shortcuts">
              <SettingOutlined style={{ fontSize: "32px", color: "#667085" }} />
            </div>
            <Avatar className="user-avatar" icon={<UserOutlined />} />
            <div className="mobile-sidebar-trigger">
              <MenuOutlined onClick={() => setCollapsedSidebar(!collapsedSidebar)} />
            </div>
          </Space>
        </div>
      </div>
      <Drawer
        className="app-sidebar"
        placement="left"
        width={300}
        onClose={() => setCollapsedSidebar(!collapsedSidebar)}
        visible={collapsedSidebar}
        closable={false}
      >
        <div className="sidebar-container">
          <Menu
            mode="vertical"
            defaultSelectedKeys={defaultSelectedMenuKey()}
            items={menuItems}
          />
          <div className="user-shortcuts">
            <Space>
              <Avatar className="user-avatar" icon={<UserOutlined />} />
              <div className="user-name">DOHOU Patricia</div>
              <RightOutlined />
            </Space>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default AppHeader;
