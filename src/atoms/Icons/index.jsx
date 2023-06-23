import React from "react";

export const Icon = (props) => {
  if (props.type === "hamburger") {
    return (
        <svg
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "50px",
          height: "100%",
        }}
        viewBox="0 0 24 24"
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }
  return null;
};
