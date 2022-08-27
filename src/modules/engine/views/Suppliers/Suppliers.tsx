import "./Suppliers.scss";
import React from "react";
import { Button, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function Suppliers() {
  return (
    <section className="supplier-page-root">
      <PageHeader
        className="section-content-header"
        title="Fournisseurs"
        subTitle="Ajouter vos contacts fournisseurs"
        extra={[
          <Button key="1" type="primary" className="add-supplier-btn">
            <PlusOutlined />
            Ajouter un fournisseur
          </Button>,
        ]}
      />
    </section>
  );
}

export default Suppliers;
