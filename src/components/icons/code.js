import React from "react";

const Code = props => (
  <svg {...props}>
    <g transform="translate(2.5 3.177)">
      <g
        stroke="#00b58c"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="5px"
      >
        <path
          id="Path_2"
          d="M22.709 0L0 18.5l22.709 18.61"
          transform="translate(0 3)"
        />

        <path
          id="Path_2_Copy"
          d="M-22.709 0L0 18.5l-22.709 18.61"
          transform="translate(74.413 3)"
        />

        <path id="Path_3" d="M0 43.439L14.938 0" transform="translate(30)" />
      </g>
    </g>
  </svg>
);

Code.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  width: "50",
  height: "70",
  viewBox: "0 0 80 50"
};

export default Code;
