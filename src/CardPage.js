import { Row, Col, Card, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import VideoModal from "./VideoModal";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
function CardPage() {
  const navigator = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div style="margin:auto" className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={4}>
            <Card
              hoverable={true}
              style={{ color:"yellow" , width: "500px" }}
              actions={[
                <SettingOutlined
                  key="setting"
                  onClick={() => {
                    alert("lol");
                  }}
                />,
                <EditOutlined key="edit" />,
                // <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <div onClick={() => showModal()}>Video 1</div>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              onClick={() => showModal()}
              hoverable={true}
              style={{ width: 200 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              Video 2
            </Card>
          </Col>
          <Col span={4}>
            <Card
              onClick={() => showModal()}
              hoverable={true}
              style={{ width: 200 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              Video 3
            </Card>
          </Col>
        </Row>
        <Modal
          width={800}
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          centered={true}
          footer={null}
          onCancel={handleCancel}
          destroyOnClose={true}
        >
          <VideoModal></VideoModal>
        </Modal>
      </div>
    </>
  );
}
export default CardPage;
