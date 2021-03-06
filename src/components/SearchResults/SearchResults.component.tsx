import React from "react";
import { List } from "antd";
import './SearchResults.styles.css';

type Props = {
  data: Array<object>;
	query?: string;
	handleClick: Function;
};

const getHighlightedText = (text: string, highlight: string) => {
  // Split on highlight term and include term into parts, ignore case
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {" "}
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? { fontWeight: "bold" }
              : {}
          }
        >
          {part}
        </span>
      ))}{" "}
    </span>
  );
};

const SearchResults = (props: Props) => {
  return (
    <List
      size="small"
      // header={<div>Header</div>}
      // footer={<div>Footer</div>}
      bordered
      dataSource={props.data}
      renderItem={(item: any) => (
        <List.Item onClick={() => props.handleClick(item)} className="search-item">
          {getHighlightedText(item.district, props.query || "")}
        </List.Item>
      )}
    />
  );
};

export default SearchResults;
