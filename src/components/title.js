// Title.js
import React from "react";

const Title = ({ title, textColor, backGroundColor, fontSize }) => <h1 style={{ color: textColor, backgroundColor: backGroundColor, fontSize: fontSize }}>{title}</h1>;
export default Title;
