import React from "react";
import "./StatusDot.styles.css";

type Props = {
	color: string;
	text: string;
	containerStyle?: object;
	dotStyle?: object;
	textStyle?: object;
}

const StatusDot = (props: Props) => {
  return (
    <div className="dot-container">
      <div className={"dot " + props.color}></div>
      <p className="dot-text">{props.text}</p>
    </div>
  );
};

export default StatusDot;
