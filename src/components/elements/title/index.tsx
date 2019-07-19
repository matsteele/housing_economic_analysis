import React, { useContext, useState, useEffect } from "react";
import { store } from "utils/store";
import story from "../../narrative/story";

import {
  ShiftOutHOC,
  elementDimensions,
  OutlinedAbsoluteDiv
} from "../element_base";

// TODO transparent after 50% of screenHeight

const width = elementDimensions.DisplayWidth * 0.5;
const height = elementDimensions.TitleHeight;

const Title = (props: iProps): JSX.Element => {
  const { state } = useContext(store);
  const currentSlide = story[state.currentSlideNumber];

  return (
    <TitleDiv>
      {currentSlide.title
        ? currentSlide.title.map(eachpoint => {
            return (
              <ShiftOutHOC
                startingSlide={eachpoint.start}
                endingSlide={eachpoint.end}
                height={height}
                width={width}
              >
                {eachpoint.text}
              </ShiftOutHOC>
            );
          })
        : ""}
    </TitleDiv>
  );
};

//styles
import styleUtils from "utils/styles";
import styled from "@emotion/styled";

const TitleDiv: any = styled(OutlinedAbsoluteDiv)({
  width: width,
  height: height,
  left: elementDimensions.BufferWidth * 2,
  top: elementDimensions.BufferWidth,
  color: "white",
  fontSize: "30px",
  lineHeight: 1
});

// types
interface iProps {
  balance: number;
}

export default Title;
