import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Cancel = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085"
      stroke="#000000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Cancel;
