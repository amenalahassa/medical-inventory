import "./Suppliers.scss";
import React from "react";
import { Button, Empty, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { EmptyBoxLogo } from "../../../../assets/images/svg/export";

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
      <div className="supplier-page-content">
        <Empty
          image={<EmptyBoxLogo />}
          imageStyle={{
            height: 150,
          }}
          description={
            <div>
              <span>Votre liste de fournisseur est vide</span>
              <p>
                Un fournisseur est une personne ou une entreprise qui vous fournit
                vos marchandises.
              </p>
            </div>
          }
        >
          <Button type="primary" className="add-supplier-btn">
            Ajouter un fournisseur
          </Button>
        </Empty>
      </div>
    </section>
  );
}

export default Suppliers;
