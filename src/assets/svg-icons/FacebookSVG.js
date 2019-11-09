import React from "react";

export default ({
  width = "30",
  height = "30",
  fill = "none",
  margin = "-2 0 0 2",
  padding = "0 0 0 0",
  viewBox = "0 0 30 30"
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      style={{ margin: `${margin}`, padding: `${padding}` }}
      viewBox={viewBox}
    >
      <g clip-path="url(#clip0)">
        <path
          d="M15 30.0001C23.8889 30.0001 30 24.4444 30 15.5556C30 7.77778 25.5556 0 15.5556 0C5.55555 0 0 6.61082 0 15.5556C0 24.5003 6.66667 30.0001 15 30.0001Z"
          fill="#395185"
        />
        <path
          d="M16.585 30.4691V18.8514H20.4847L21.0685 14.3239H16.585V11.4331C16.585 10.1223 16.9491 9.22894 18.8289 9.22894L21.2265 9.22789V5.17848C20.8116 5.12328 19.3885 5 17.7329 5C14.2761 5 11.9096 7.10996 11.9096 10.9849V14.3239H8V18.8514H11.9096V30.4691H16.585Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
