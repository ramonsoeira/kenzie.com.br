import React from "react";

const Heart = props => {
  return (
    <svg {...props}>
      <g transform="translate(290.48 553.675)">
        <path
          fill="#00b68c"
          stroke="#fff"
          d="M37.768 11.929A19.012 19.012 0 0 1 64.637 38.8l-27.01 27.08a3.134 3.134 0 0 1-4.49 0L6.128 38.8a18.986 18.986 0 0 1 26.8-26.869l2.385 2.385c.069-.002 2.455-2.387 2.455-2.387zm22.45 22.45a12.7 12.7 0 0 0-17.96-17.96l-4.63 4.63a3.134 3.134 0 0 1-4.49 0l-4.63-4.63a12.7 12.7 0 0 0-17.96 17.96l24.834 24.764z"
          transform="translate(-291 -560)"
        />
      </g>
    </svg>
  );
};

Heart.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "69",
  height: "61",
  viewBox: "0 0 69 61"
};

export default Heart;
