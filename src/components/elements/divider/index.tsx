import React, { useContext, useState, useEffect } from "react";
import IntroDivider from "./intro_divider";
import PresentationLegend from "./presentation_legend";

import {
  ShiftOutHOC,
  elementDimensions,
  OutlinedAbsoluteDiv
} from "../element_base";

const width = elementDimensions.DividerWidth;
const height = "100%";

const Divider = (props: iProps): JSX.Element => {

  return (
    <DividerDiv>
      <StyledSVG>
        <line
          className="cls-5"
          stroke="#fff"
          x1="39"
          y1="-9.4"
          x2="39"
          y2={window.innerHeight}
        />
      </StyledSVG>
      <ShiftOutHOC
        startingSlide={0}
        endingSlide={6}
        height={height}
        width={width}
        opacity="1"
      >
        <IntroDivider />
      </ShiftOutHOC>
      <ShiftOutHOC opacity="1" startingSlide={6} height={height} width={width}>
        <PresentationLegend />
      </ShiftOutHOC>
    </DividerDiv>
  );
};

//styles
import styleUtils from "utils/styles";
import styled from "@emotion/styled";

const DividerDiv: any = styled(OutlinedAbsoluteDiv)({
  width: width,
  height: height,
  flexDirection: "column",
  right:
    elementDimensions.BufferWidth +
    elementDimensions.TextDivWidth 
});

export const StyledSVG: any = styled.svg({
  overflow: "visible !important",
  height: "100%",
  width: '77px'
});

// types
interface iProps {
  balance: number;
}

export default Divider;
