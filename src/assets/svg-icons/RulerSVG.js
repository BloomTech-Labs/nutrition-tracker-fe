import React from "react";

export default ({
  width = "28",
  height = "28",
  fill = "#495057",
  margin = "0",
  padding = "1 0 0 7",
  viewBox = "0 0 20 20"
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      style={{ margin: `${margin}`, padding: `${padding}` }}
      viewBox={viewBox}
    >
      <path
        // fillRule="evenodd"
        // clipRule="evenodd"
        d="M0 0V20H12V0H0ZM1.5 2.5H4.5V3.75H1.5V2.5ZM1.5 10H4.5V11.25H1.5V10ZM4.5 18.75H1.5V17.5H4.5V18.75ZM6 15H1.5V13.75H6V15ZM6 7.5H1.5V6.25H6V7.5Z"
        fill={fill}
      />
    </svg>
  );
};
