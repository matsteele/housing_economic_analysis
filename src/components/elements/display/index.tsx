import React, { useContext, useState, useEffect } from "react";
import {store} from "utils/store";
import story from "../../narrative/story";

import {
  ShiftOutHOC,
  elementDimensions,
  OutlinedAbsoluteDiv
} from "../element_base";

const width = elementDimensions.DisplayWidth;
const height = elementDimensions.DisplayHeight;

const Display = (props: iProps): JSX.Element => {
  const { state} = useContext(store);
  const currentSlide = story[state.currentSlideNumber];

  const DisplayComponent = currentSlide.display.component;

  return (
    <MainDisplay ClassName="MainDisplay">
      <ShiftOutHOC
        startingSlide={currentSlide.display.start}
        endingSlide={currentSlide.display.end}
        height={height}
        width={width}
      >
        {<DisplayComponent />}
      </ShiftOutHOC>
    </MainDisplay>
  );
};

export default Display;

//styles
import styleUtils from "utils/styles";
import styled from "@emotion/styled";

const MainDisplay: any = styled(OutlinedAbsoluteDiv)({
  width: width,
  height: height,
  left: elementDimensions.BufferWidth * 2,
  top: elementDimensions.TopBuffer,
  flexDirection: 'column'
});
