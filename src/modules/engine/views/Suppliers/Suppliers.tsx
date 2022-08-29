import "./Suppliers.scss";
import React, { useState } from "react";
import { Button, Empty, PageHeader, Space, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { EmptyBoxLogo } from "../../../../assets/images/svg/export";
import Column from "antd/lib/table/Column";
import { ISupplier } from "../../assets/interfaces/ISupplier";
import Search from "antd/lib/input/Search";
import { DeleteOutlined } from "@ant-design/icons/lib";

function Suppliers() {
  const [suppliers, setSuppliers] = useState<ISupplier[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const addSupplier = () => {
    setSuppliers([
      ...suppliers,
      { id: suppliers.length, address: "ici", name: "F1", tel: "001" },
    ]);
  };

  return (
    <section className="supplier-page-root">
      <PageHeader
        className="section-content-header"
        title="Fournisseurs"
        subTitle="Ajouter vos contacts fournisseurs"
        extra={[
          <Button
            onClick={() => addSupplier()}
            key="1"
            type="primary"
            className="add-supplier-btn"
          >
            <PlusOutlined />
            Ajouter un fournisseur
          </Button>,
        ]}
      />
      <div className="supplier-page-content">
        {suppliers.length == 0 ? (
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
        ) : (
          <div className="supplier-list">
            <div className="table-box-header">
              <Search
                size="large"
                placeholder="Rechercher un fournisseur"
                allowClear
              />
              {selectedRowKeys.length > 0 && (
                <Space>
                  <Button type="primary" className="btn-danger">
                    <DeleteOutlined />
                    Supprimer
                  </Button>
                </Space>
              )}
            </div>
            <Table
              className="table-box"
              rowSelection={rowSelection}
              dataSource={suppliers}
            >
              <Column title="Nom" dataIndex="name" key="age" />
              <Column title="Contact" dataIndex="tel" key="contact" />
              <Column title="Localisation" dataIndex="address" key="place" />
            </Table>
          </div>
        )}
      </div>
    </section>
  );
}

export default Suppliers;
