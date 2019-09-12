import React from "react";
import { css, jsx } from "@emotion/core";
import { ShiftOutHOC, elementDimensions } from "../../elements/element_base";
import styleUtils from "utils/styles";
import styled from "@emotion/styled";

import s from "../storyStarts";

console.log(s, "start");


export default function MajorProblems() {
  return (
    <>
      <UpperDiv>two major problems in the urban real estate market</UpperDiv>
      <div
        css={css`
          margin-left: 10%;
          justify-content: space-evenly;
          flex-direction: column;
          display: flex;
          height: 100%;
        `}
      >
        <BaseDiv>
          <ShiftOutHOC
            startingSlide={s._2_strt + 1}
            endingSlide={s._2_strt + 5}
            height="25%"
            width="75%"
          >
            <h1>
              <strong>1. access to capital </strong>
            </h1>
            <TabbedText>for multi-family developers</TabbedText>
          </ShiftOutHOC>
        </BaseDiv>
        <BaseDiv>
          <ShiftOutHOC
            startingSlide={s._2_strt + 3}
            endingSlide={s._2_strt + 5}
            height="25%"
            width="75%"
          >
            <h1>
              <strong>2. misalignment of interests </strong>
            </h1>
            <TabbedText>with local stakeholders for more density</TabbedText>
          </ShiftOutHOC>
        </BaseDiv>
      </div>
    </>
  );
}



const BaseDiv: any = styled.div({
  width: "50%",
  height: "20%",
  left: elementDimensions.BufferWidth*2,
  top: elementDimensions.TopBuffer,
  color: "white",
  fontSize: "30px",
  lineHeight: 1,
});

const UpperDiv: any = styled(BaseDiv)({
  width: "90%",
  height: "30%",
  top: "20%",
  fontSize: "60px"
});


const TabbedText: any = styled.div({
  marginLeft: "10%"
})
