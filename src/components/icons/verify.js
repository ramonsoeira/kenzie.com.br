import React from "react";

const Verify = props => (
  <svg {...props}>
    <g
      stroke="#00b58c"
      strokeMiterlimit="10"
      strokeWidth="0.853px"
      transform="translate(.426 .426)"
    >
      <path d="M27 54A27.007 27.007 0 0 1 16.49 2.122a27.007 27.007 0 0 1 21.02 49.756A26.832 26.832 0 0 1 27 54zm0-50.625a23.631 23.631 0 0 0-9.2 45.393A23.631 23.631 0 0 0 36.2 5.232 23.476 23.476 0 0 0 27 3.375z" />
      <path
        d="M3.292 8.8a1.929 1.929 0 0 0-2.727 2.732l6.778 6.778a1.929 1.929 0 0 0 2.727 0L25.089 3.292A1.929 1.929 0 1 0 22.362.565L8.707 14.22z"
        transform="translate(15.139 17.068)"
      />
    </g>
  </svg>
);

Verify.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#00b58c",
  width: "55",
  height: "55",
  viewBox: "0 0 55 55"
};

export default Verify;
