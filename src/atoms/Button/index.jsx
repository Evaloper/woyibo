import React from "react";

export const Button = (props) => {
  return (
    <button
      className={props.className}
      style={{
        width: props.width,
        backgroundColor: props.backgroundColor,
        fontSize: props.fontSize,
        padding: "15px",
        borderRadius: "8px",
        border: props.border,
        color: props.color,
      }}
    >
      {props.title}
    </button>
  );
};
