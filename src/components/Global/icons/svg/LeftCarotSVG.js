import React from "react";

export default ({
  width = "24",
  height = "24",
  fill = "000000",
  margin = "0",
  padding = "0",
  viewBox = "0 0 14 14"
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
        d="M0.632904 7.49986L2.86709 9.73405L8.13292 15L10.3671 12.766L5.10127 7.49986L10.3671 2.23404L8.13307 0L2.86723 5.26584L0.633191 7.49986H0.632904Z"
        fill="black"
      />
    </svg>
  );
};
