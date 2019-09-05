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
 
  let keyIndex = 0;

  return (
    <TextDiv>
      {currentSlide.discuss
        ? currentSlide.discuss.map(eachTextChunk => {
            keyIndex += 1;
            return (
              <React.Fragment key={`discuss_${keyIndex}`}>
                <ShiftOutHOC
                  key={`discuss_${keyIndex}`}
                  startingSlide={eachTextChunk.start}
                  endingSlide={eachTextChunk.end}
                  height={height}
                  width={width}
                  opacity={"text"}
                >
                  {eachTextChunk.text}
                </ShiftOutHOC>
              </React.Fragment>
            );
          })
        : ""}
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
