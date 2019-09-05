import React, { useContext, useState, useEffect } from "react";
import { store } from "utils/store";
import story from "../../narrative/story";

import {
  ShiftOutHOC,
  elementDimensions,
  OutlinedAbsoluteDiv
} from "../element_base";

// TODO transparent after 50% of screenHeight

const width = elementDimensions.DisplayWidth * 0.7;
const height = elementDimensions.TitleHeight;

const Title = (props: iProps): JSX.Element => {
  const { state } = useContext(store);
  const currentSlide = story[state.currentSlideNumber];

  let emphasisColorBasedOnTheme;
  switch (currentSlide.theme) {
    case "MainIdeasTeal":
      emphasisColorBasedOnTheme = styleUtils.offWhite;
      break;
    case "caseStudyGrey":
      emphasisColorBasedOnTheme = styleUtils.offWhite;
      break;
    case "dataStatsWhite":
      emphasisColorBasedOnTheme = styleUtils.lightGray;
      break;
  }

  return (
    <SourceDiv color={emphasisColorBasedOnTheme}>
      {currentSlide.source
        ? currentSlide.source.map(eachpoint => {
            return (
              <ShiftOutHOC
                startingSlide={eachpoint.start}
                endingSlide={eachpoint.end}
                height={height}
                width={width}
                over={true}
              >
                source: {eachpoint.text}
              </ShiftOutHOC>
            );
          })
        : ""}
    </SourceDiv>
  );
};

//styles
import styleUtils from "utils/styles";
import styled from "@emotion/styled";

const SourceDiv: any = styled(OutlinedAbsoluteDiv)(props => ({
  width: width,
  height: height,
  left: elementDimensions.DisplayWidth *.5,
  top:
    elementDimensions.DisplayHeight +
    elementDimensions.TitleHeight ,
  color: props.color,
  fontSize: "20px",
  lineHeight: 1
}));

// types
interface iProps {
  balance: number;
}

export default Title;
