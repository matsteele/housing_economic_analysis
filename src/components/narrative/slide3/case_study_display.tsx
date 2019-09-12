import React, { useContext, useState, useEffect } from "react";

import s from "../storyStarts";

import { ShiftOutImageHOC } from "../../elements/element_base";

export default function CaseStudyDisplay() {
  return (
    <>
      <svg height="100%" width="100%">
        <image
          height="100%"
          width="100%"
          href={"./src/components/narrative/slide3/houstonComparison-01.svg"}
        />
      </svg>
      <ShiftOutImageHOC
        imgURL={"./src/components/narrative/slide3/houstonComparison-pop.svg"}
        startingSlide={s._3_strt}
        endingSlide={s._3_strt + 2}
      />
      <ShiftOutImageHOC
        startingSlide={s._3_strt + 2}
        endingSlide={s._3_strt + 6}
        imgURL={
          "./src/components/narrative/slide3/houstonComparison-02.svg"
        }
      />
      <ShiftOutImageHOC
        startingSlide={s._3_strt + 4}
        endingSlide={s._3_strt + 6}
        imgURL={
          "./src/components/narrative/slide3/houstonComparison-03.svg"
        }
      />
    </>
  );
}
