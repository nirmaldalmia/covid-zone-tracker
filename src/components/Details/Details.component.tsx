import React from "react";
import { Row, Col } from "antd";
import "./Details.styles.css";
import StatusDot from "../StatusDot/StatusDot.component";
import { ArrowUpOutlined } from "@ant-design/icons";

type Props = {
  data: any;
};

const Details = (props: Props) => {
  const { district, state, zone, source } = props.data;
  return (
    <Col md={12} sm={24}>
      <Row className="details-container">
        <Col md={6} sm={12}>
          <p className="label">City</p>
        </Col>
        <p style={{ marginBottom: 0, lineHeight: "30px" }}>{district}</p>
      </Row>
      <Row className="details-container">
        <Col md={6} sm={12}>
          <p className="label">State</p>
        </Col>
        <p className="state">{state}</p>
      </Row>
      <Row className="details-container">
        <Col md={6} sm={12}>
          <p className="label">Zone</p>
        </Col>
        <StatusDot
          color={zone.toLowerCase()}
          text={`${zone} zone`}
          containerStyle={{ marginBottom: 0 }}
          textStyle={{ fontWeight: 500, fontSize: "20px" }}
        />
      </Row>
      <Row>
        <a className="know-more" target="_blank" rel="noopener noreferrer" href={source}>
          Know more <ArrowUpOutlined className="arrow-icon" />
        </a>
      </Row>
    </Col>
  );
};

export default Details;
