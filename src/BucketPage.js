import { Row, Col, Card, Input } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import "./App.css";
import { EditOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
function BucketPage() {
  const [buckets, setBuckets] = useState([
    {
      name: "Entertainment",
      id: 1,
      isEdit: false,
      newName: "",
    },
    {
      name: "Educational",
      id: 2,
      isEdit: false,
      newName: "",
    },
    {
      name: "Finance",
      id: 3,
      isEdit: false,
      newName: "",
    },
  ]);
  // setBuckets([
  //   {
  //     name: "Entertainment",
  //     id: 1,
  //     isEdit: false,
  //   },
  //   {
  //     name: "Educational",
  //     id: 2,
  //     isEdit: false,
  //   },
  //   {
  //     name: "Finance",
  //     id: 3,
  //     isEdit: false,
  //   },
  // ]);
  const navigator = useNavigate();
  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {buckets.map((bucket) => (
            <Col span={4}>
              <Card
                // key={bucket.id}
                hoverable={true}
                style={{ width: 200 }}
                actions={
                  bucket.isEdit
                    ? [
                        <CloseOutlined
                          key="cancel"
                          onClick={() => {
                            bucket.isEdit = !bucket.isEdit;
                            setBuckets(
                              buckets.map((bucket2) =>
                                bucket2.id === bucket.id ? bucket : bucket2
                              )
                            );
                          }}
                        />,
                        // <EditOutlined key="edit" />,
                        <CheckOutlined
                          key="done"
                          onClick={() => {
                            bucket.isEdit = !bucket.isEdit;
                            bucket.name = bucket.newName;
                            setBuckets(
                              buckets.map((bucket2) =>
                                bucket2.id === bucket.id ? bucket : bucket2
                              )
                            );
                          }}
                        />,
                      ]
                    : [
                        // <CloseOutlined key="setting" />,
                        <EditOutlined
                          key="edit"
                          onClick={() => {
                            bucket.isEdit = !bucket.isEdit;
                            bucket.newName = bucket.name;
                            setBuckets(
                              buckets.map((bucket2) =>
                                bucket2.id === bucket.id ? bucket : bucket2
                              )
                            );
                          }}
                        />,
                        // <CheckOutlined key="ellipsis" />,
                      ]
                }
              >
                {bucket.isEdit ? (
                  <Input
                    placeholder="New Name"
                    defaultValue={bucket.name}
                    onChange={(val) => {
                      // console.log(val);
                      bucket.newName = val.target.value;
                    }}
                  />
                ) : (
                  <div onClick={() => navigator("/cards/" + bucket.id)}>
                    {bucket.name}
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
export default BucketPage;
