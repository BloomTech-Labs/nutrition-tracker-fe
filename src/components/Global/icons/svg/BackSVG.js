import React from "react";

export default ({
  width = "25",
  height = "25",
  fill = "000000",
  margin = "5",
  padding = "0",
  viewBox = "0 0 25 25"
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
        d="M19.7628 11.0312V13H7.77938L13.2641 18.625L11.8814 20.0312L4 12.0156L11.8814 4L13.2641 5.40625L7.77938 11.0312H19.7628Z"
        fill={fill}
      />
    </svg>
  );
};
