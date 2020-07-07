import React from "react";
import { Row, Col, Divider } from "antd";
import StatusDot from "../StatusDot/StatusDot.component";
import PopularCities from "../../assets/data/popular-cities";
import "./PopularCitiesList.styles.css";

type Props = {
  handleClick: Function;
};

const PopularCitiesList = (props: Props) => (
  <Col md={12} sm={24}>
    <h6 className="popular-title">POPULAR CITIES</h6>
    <Divider style={{ border: "1px solid rgba(255, 255, 255, 0.12)" }} />
    <Row>
      {PopularCities.map((item) => (
        <Col lg={6} md={8} sm={12} key={item.name}>
          <div className="popular-item" onClick={() => props.handleClick(item.district)}>
            <StatusDot color={item.zone} text={item.name} />
          </div>
        </Col>
      ))}
    </Row>
  </Col>
);

export default PopularCitiesList;
