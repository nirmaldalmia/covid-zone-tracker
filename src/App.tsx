import React from "react";
import { Row, Col, Typography, Input, Divider } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import "./App.css";
import StatusDot from "./components/StatusDot/StatusDot.component";
import PopularCities from "./assets/data/popular-cities";
import SearchResults from "./components/SearchResults/SearchResults.component";

const { Title } = Typography;

type IProps = {};
type IState = {
  query: string;
	data: Array<object>;
	filteredData: Array<object>;
};

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      query: "",
			data: [],
			filteredData: [],
    };
  }

  componentDidMount() {
    fetch("https://api.covid19india.org/zones.json")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.zones);
        this.setState({ data: result.zones });
      })
      .catch((error) => console.error(error));
  }

  handleChange(event: any) {
		this.setState({ query: event.target.value });
		const regex = new RegExp(`(${event.target.value})`, 'i');
		const filtered = this.state.data.filter((item: any) => regex.test(item.district));
		console.log(filtered);
		if (filtered.length > 10) {
			filtered.splice(10);
		}
		this.setState({ filteredData: filtered });
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
                  onChange={(event) => this.handleChange(event)}
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
              {!!this.state.query && (
                <div className="results-container">
                  <SearchResults
                    data={this.state.filteredData}
                    query={this.state.query}
                  />
                </div>
              )}
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
            <Col lg={6} md={12} sm={24} className="zone-info-container">
              <Row>
                <StatusDot
                  color="red"
                  text="Red zone"
                  textStyle={{ fontWeight: 500 }}
                />
                <p className="sub-text" style={{ fontSize: "14px" }}>
                  Most active cases
                </p>
              </Row>
              <Row>
                <StatusDot
                  color="orange"
                  text="Orange zone"
                  textStyle={{ fontWeight: 500 }}
                />
                <p className="sub-text" style={{ fontSize: "14px" }}>
                  Less active cases
                </p>
              </Row>
              <Row>
                <StatusDot
                  color="green"
                  text="Green zone"
                  textStyle={{ fontWeight: 500 }}
                />
                <p className="sub-text" style={{ fontSize: "14px" }}>
                  Very few active cases
                </p>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
