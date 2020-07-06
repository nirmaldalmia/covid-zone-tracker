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
    <div className="dot-container" style={props.containerStyle}>
      <div className={"dot " + props.color} style={props.dotStyle}></div>
      <p className="dot-text" style={props.textStyle}>{props.text}</p>
    </div>
  );
};

export default StatusDot;
