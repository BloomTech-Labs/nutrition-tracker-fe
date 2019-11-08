import React from "react";

export default ({
  width = "32",
  height = "32",
  fill = "none",
  margin = "0",
  padding = "0",
  viewBox = "0 0 32 32"
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
        d="M30 26H2C1.4475 26 1 25.5525 1 25V7C1 6.4475 1.4475 6 2 6H30C30.5525 6 31 6.4475 31 7V25C31 25.5525 30.5525 26 30 26Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M31 7.54V7C31 6.4475 30.5525 6 30 6H2C1.4475 6 1 6.4475 1 7V7.505L15.9775 19.0375L31 7.54Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M11 15L2 25"
        stroke="#FFB300"
        stroke-width="0.75"
        stroke-miterlimit="10"
      />
      <path
        d="M21 15L30 25"
        stroke="#FFB300"
        stroke-width="0.75"
        stroke-miterlimit="10"
      />
      <path
        d="M1 7L15.9789 19L31 7.0397"
        stroke="#FFB300"
        stroke-width="0.75"
        stroke-miterlimit="10"
      />
      <path
        opacity="0.2"
        d="M30 6.75C30.1375 6.75 30.25 6.8625 30.25 7V25C30.25 25.1375 30.1375 25.25 30 25.25H2C1.8625 25.25 1.75 25.1375 1.75 25V7C1.75 6.8625 1.8625 6.75 2 6.75H30ZM30 6H2C1.4475 6 1 6.4475 1 7V25C1 25.5525 1.4475 26 2 26H30C30.5525 26 31 25.5525 31 25V7C31 6.4475 30.5525 6 30 6Z"
        fill="#444444"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="16"
          y1="9.20825"
          x2="16"
          y2="26.0825"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC107" />
          <stop offset="1" stop-color="#FFD54F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="16"
          y1="2.114"
          x2="16"
          y2="18.0385"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFE082" />
          <stop offset="0.993" stop-color="#FFCA28" />
        </linearGradient>
      </defs>
    </svg>
  );
};
