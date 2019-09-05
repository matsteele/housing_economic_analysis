import React, { useContext, useState, useEffect } from "react";


import {
  ShiftOutHOC,
  elementDimensions,
  OutlinedAbsoluteDiv
} from "../../elements/element_base";

export default function CaseStudyDisplay() {
  const height = "100%";
  const width = "100%";
  return (
    <>
      <svg height="100%" width="100%">
        <image
          height="100%"
          width="100%"
          href={"./src/components/narrative/slide6/housing_bubble-01.svg"}
        />
      </svg>
      <ShiftOutHOC
        startingSlide={21}
        endingSlide={25}
        height={height}
        width={width}
        opacity="1"
      >
        <svg height="100%" width="100%">
          <image
            height="100%"
            width="100%"
            href={"./src/components/narrative/slide6/housing_bubble-02.svg"}
          />
        </svg>
      </ShiftOutHOC>
    </>
  );
}
