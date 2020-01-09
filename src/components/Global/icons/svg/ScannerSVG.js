import React from "react";
export default ({
  width = "40",
  height = "40",
  fill = "000000",
  margin = "0",
  padding = "0 0 0 0",
  viewBox = "0 0 60 45"
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      margin={margin}
      padding={padding}
    >
      <path
        d="M10 8.6H15V34.4H10V8.6ZM17.5 8.6H20V34.4H17.5V8.6ZM22.5 8.6H30V34.4H22.5V8.6ZM32.5 8.6H35V34.4H32.5V8.6ZM40 8.6H45V34.4H40V8.6ZM47.5 8.6H50V34.4H47.5V8.6ZM5 4.3V12.9H0V4.3C0 3.15957 0.526784 2.06585 1.46447 1.25944C2.40215 0.453034 3.67392 0 5 0H15V4.3H5ZM55 0C56.3261 0 57.5979 0.453034 58.5355 1.25944C59.4732 2.06585 60 3.15957 60 4.3V12.9H55V4.3H45V0H55ZM5 30.1V38.7H15V43H5C3.67392 43 2.40215 42.547 1.46447 41.7406C0.526784 40.9342 0 39.8404 0 38.7V30.1H5ZM55 38.7V30.1H60V38.7C60 39.8404 59.4732 40.9342 58.5355 41.7406C57.5979 42.547 56.3261 43 55 43H45V38.7H55Z"
        fill="white"
      />
    </svg>
  );
};