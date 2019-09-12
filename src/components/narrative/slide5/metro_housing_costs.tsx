import React, { useContext, useState, useEffect } from "react";
import {
  ShiftOutImageHOC,
} from "../../elements/element_base";
import s from "../storyStarts";


export default function CaseStudyDisplay() {
  return (
    <>
      <ShiftOutImageHOC
        imgURL={"./src/components/narrative/slide5/housing_costs-01.svg"}
        startingSlide={s._5_strt + 1}
        endingSlide={s._5_strt + 6}
      />
      <ShiftOutImageHOC
        imgURL={"./src/components/narrative/slide5/housing_costs-02.svg"}
        startingSlide={s._5_strt + 2}
        endingSlide={s._5_strt + 6}
      />
      <ShiftOutImageHOC
        imgURL={"./src/components/narrative/slide5/housing_costs-03.svg"}
        startingSlide={s._5_strt + 3}
        endingSlide={s._5_strt+6}
      />
    </>
  );
}
