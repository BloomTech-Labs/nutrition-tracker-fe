import React from "react";

export default ({
  width = "25",
  height = "25",
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
        d="M10.3671 7.49986L8.13294 9.73405L2.86711 15L0.632927 12.766L5.89876 7.49986L0.632927 2.23404L2.86696 0L8.1328 5.26584L10.3668 7.49986H10.3671Z"
        fill="black"
      />
    </svg>
  );
};
