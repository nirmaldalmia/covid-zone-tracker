import React from "react";
import { Row, Col, Typography, Input, Divider } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import "./App.css";
import StatusDot from "./components/StatusDot/StatusDot.component";
import PopularCities from "./assets/data/popular-cities";

const { Title } = Typography;

type IProps = {};
type IState = {
  query: string;
};

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleClear() {
    this.setState({ query: "" });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Row>
            <Col md={12} sm={24} className="content">
              <div>
                <Title className="heading">Covid Zone Tracker</Title>
                <p className="sub-text subtitle">
                  Track which zone your family/loved ones are in
                </p>
                <Input
                  size="large"
                  placeholder="Enter city/district name"
                  onChange={(event) =>
                    this.setState({ query: event.target.value })
                  }
                  value={this.state.query}
                  prefix={
                    <SearchOutlined
                      style={{
                        fontSize: "24px",
                        color: "rgba(255, 255, 255, 0.3)",
                        marginLeft: "8px",
                      }}
                    />
                  }
                  className="searchbar"
                  suffix={
                    !!this.state.query ? (
                      <CloseOutlined
                        style={{
                          fontSize: "24px",
                          color: "rgba(255, 255, 255, 0.3)",
                          marginRight: "8px",
                        }}
                        onClick={() => this.handleClear()}
                      />
                    ) : null
                  }
                />
              </div>
            </Col>
          </Row>
          <Row className="popular-container">
            <Col md={12} sm={24}>
              <h6 className="popular-title">POPULAR CITIES</h6>
              <Divider
                style={{ border: "1px solid rgba(255, 255, 255, 0.12)" }}
              />
              <Row>
                {PopularCities.map((item) => (
                  <Col md={6} sm={12} key={item.name}>
                    <StatusDot color={item.zone} text={item.name} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row>
						<Col md={8} sm={24} className="zone-info-container">

						</Col>
					</Row>
        </div>
      </div>
    );
  }
}
