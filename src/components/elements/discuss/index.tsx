import React, { useContext, useState, useEffect } from "react";
import { store } from "utils/store";

import story from "../../narrative/story";

import {
  ShiftOutHOC,
  elementDimensions,
  OutlinedAbsoluteDiv
} from "../element_base";

const width = elementDimensions.TextDivWidth;
const height = elementDimensions.DisplayHeight;

const Discuss = (props: iProps): JSX.Element => {
 const { state } = useContext(store);
  const currentSlide = story[state.currentSlideNumber];
  return (
    <TextDiv>
      {currentSlide.discuss ? (
        <ShiftOutHOC
          startingSlide={currentSlide.discuss.start}
          endingSlide={currentSlide.discuss.end}
          height={height}
          width={width}
          over={true}
        >
          {currentSlide.discuss.text}
        </ShiftOutHOC>
      ) : (
        ""
      )}
    </TextDiv>
  );
};

//styles
import styleUtils from "utils/styles";
import styled from "@emotion/styled";

const TextDiv: any = styled(OutlinedAbsoluteDiv)({
  width: width,
  height: height,
  right: elementDimensions.BufferWidth,
  top: elementDimensions.TopBuffer
});

// types
interface iProps {
  balance: number;
}

export default Discuss;
