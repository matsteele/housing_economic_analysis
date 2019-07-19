import React from "react";

import {
  ShiftOutHOC,
  elementDimensions,
  OutlinedAbsoluteDiv
} from "../../elements/element_base";

export default function MajorProblems() {
  return (
    <>
      <UpperDiv>two major problems in urban real estate market</UpperDiv>
      <BaseDiv>1. access to capital for large scale projects</BaseDiv>
      <BaseDiv>
        2. misalignment of interests with local stakeholders for more density
      </BaseDiv>
    </>
  );
}

import styleUtils from "utils/styles";
import styled from "@emotion/styled";

const BaseDiv: any = styled.div({
  width: "70%",
  height: "20%",
  right: elementDimensions.BufferWidth,
  top: elementDimensions.TopBuffer,
  color: "white",
  fontSize: "30px",
  lineHeight: 1
});

const UpperDiv: any = styled(BaseDiv)({
  width: "90%",
  height: '30%'

});


