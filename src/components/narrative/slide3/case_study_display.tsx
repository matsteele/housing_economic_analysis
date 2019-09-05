import React, { useContext, useState, useEffect } from "react";
import { store } from "utils/store";
import story from "../../narrative/story";

import {
  ShiftOutHOC,
} from "../../elements/element_base";

export default function CaseStudyDisplay() {
  const { state } = useContext(store);
  const currentSlide = story[state.currentSlideNumber];
  const height = '100%'
  const width = '100%'
  return (
    <>
      <svg height="100%" width="100%">
        <image
          height="100%"
          width="100%"
          href={"./src/components/narrative/slide3/houstonComparison-01.svg"}
        />
      </svg>
      <ShiftOutHOC
        startingSlide={12}
        endingSlide={14}
        height={height}
        width={width}
        opacity="1"
      >
        <svg height="100%" width="100%">
          <image
            height="100%"
            width="100%"
            href={"./src/components/narrative/slide3/houstonComparison-pop.svg"}
          />
        </svg>
      </ShiftOutHOC>
      <ShiftOutHOC
        startingSlide={14}
        endingSlide={18}
        height={height}
        width={width}
        opacity="1"
      >
        <svg height="100%" width="100%">
          <image
            height="100%"
            width="100%"
            href={"./src/components/narrative/slide3/houstonComparison-02.svg"}
          />
        </svg>
      </ShiftOutHOC>
      <ShiftOutHOC
        startingSlide={16}
        endingSlide={18}
        height={height}
        width={width}
        opacity="1"
      >
        <svg height="100%" width="100%">
          <image
            height="100%"
            width="100%"
            href={"./src/components/narrative/slide3/houstonComparison-03.svg"}
          />
        </svg>
      </ShiftOutHOC>
    </>
  );
}
