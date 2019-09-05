import React, { useContext, useState, useEffect } from "react";
import {
  ShiftOutImageHOC,
} from "../../elements/element_base";

export default function CaseStudyDisplay() {
  return (
    <>
      <ShiftOutImageHOC
        imgURL={"./src/components/narrative/slide4/housing_costs-01.svg"}
        startingSlide={20}
        endingSlide={25}
      />
      <ShiftOutImageHOC
        imgURL={"./src/components/narrative/slide4/housing_costs-02.svg"}
        startingSlide={21}
        endingSlide={25}
      />
      <ShiftOutImageHOC
        imgURL={"./src/components/narrative/slide4/housing_costs-03.svg"}
        startingSlide={22}
        endingSlide={25}
      />
    </>
  );
}
